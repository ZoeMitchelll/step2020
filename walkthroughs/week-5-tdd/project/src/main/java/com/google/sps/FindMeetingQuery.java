// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package com.google.sps;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;

public final class FindMeetingQuery {
    public Collection<TimeRange> query(Collection<Event> events, MeetingRequest request) {
        Long duration = request.getDuration();
        int start = 0;
        Collection<TimeRange> timeBlock = new ArrayList();
        if(duration>TimeRange.WHOLE_DAY.duration()){
            return Arrays.asList();
        }
        if(events.size()==0 ){
            return Arrays.asList(TimeRange.WHOLE_DAY);
        }
        /**returns all time intervals between events*/
        int min = 0;
        while (min<=TimeRange.END_OF_DAY){
            int overlap = overlaps(events,TimeRange.fromStartEnd(start,min,true),request);
            if(min==TimeRange.END_OF_DAY ){
                timeBlock.add(TimeRange.fromStartEnd(start,min,true));
                return timeBlock;
            }
            else if(overlap != 0){
                timeBlock.add(TimeRange.fromStartEnd(start,min,false));
                min = overlap;
                start = overlap;
            }
            min++;
        }
        /**deletes time intervals shorter than duration*/
        Iterator<TimeRange> times = timeBlock.iterator();
        while(times.hasNext()){
            if(times.next().duration()<duration){
                times.remove();
            }
        }

        return timeBlock;
    }

    private int overlaps(Collection<Event> events, TimeRange currentTime, MeetingRequest request){
        Iterator<Event> iterator = events.iterator();
        int end = 0;
        while (iterator.hasNext()) {
            Event e = iterator.next();
            if(!attending(e.getAttendees(),request.getAttendees())){
                if (e.getWhen().overlaps(currentTime)){
                    if(e.getWhen().end()>end){
                        end = e.getWhen().end();
                    }
                }
            }
        }
        return end;
    }

    private boolean attending(Collection<String> eventAtendees, Collection<String> meetingAtendees){
        return Collections.disjoint(eventAtendees, meetingAtendees);
    }
}
