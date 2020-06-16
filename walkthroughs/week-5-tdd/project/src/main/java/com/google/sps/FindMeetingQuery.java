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

import java.util.Collection;
import java.util.Collections;
import java.util.Iterator;

public final class FindMeetingQuery {
  public Collection<TimeRange> query(Collection<Event> events, MeetingRequest request) {
    Long duration = request.getDuration();
    Iterator<Event> iterator = events.iterator();
    int start = TimeRange.getTimeInMinutes(0,0);
    int end = TimeRange.getTimeInMinutes(0,0);
    Collection<TimeRange> timeBlock = Collections.emptyList();
    if(events.size()==0){
        return Collections.emptyList();//TimeRange.WHOLE_DAY;
    }
    while (iterator.hasNext()) {
        //iterate events and add time blocks of free time in TimeRange format to result.
        //iterate through result and delte if less than duration
        //timeBlock.add(new TimeRange(start,//end iterator.next().getWhen().))
    }
    return timeBlock;
    
  }
}
