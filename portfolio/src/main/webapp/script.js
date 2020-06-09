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

/**
 * Adds a random greeting to the page.
 */
function addRandomGreeting() {
  var greetings =
      ['Hello world!', '¡Hola Mundo!', '你好，世界！', 'Bonjour le monde!'];

  // Pick a random greeting.
  var greeting = greetings[Math.floor(Math.random() * greetings.length)];

  // Add it to the page.
  const greetingContainer = document.getElementById('greeting-container');
  greetingContainer.innerText = greeting;
}
function addRandomIntro() {
  var intros =
      ['Student', 'Developer', 'Woman', 'Human'];

  // Pick a random greeting.
  var intro = intros[Math.floor(Math.random() * intros.length)];

  // Add it to the page.
  const introContainer = document.getElementById('intro-container');
  introContainer.innerText = intro;
}

async function getRandomQuoteUsingAsyncAwait() {
  const response = await fetch('/data');
  const quote = await response.text();
  document.getElementById('quote-container').innerText = quote;
}

async function loadTasks() {
    let list = await fetch('/list-tasks').then(response => response.json());
    for(c in list){ 
        let reviewsElem = document.getElementById("reviews");
        let commentElem = document.createElement("DIV");
        commentElem.appendChild(document.createTextNode(list[c].type+" "+list[c].description));
        if(!reviewsElem.contains(commentElem))
            reviewsElem.appendChild(commentElem);
    }
}
async function loginStatus() {
    let status = await fetch('/status').then(response => response.json());
    console.log(status);
    //let cqcForm = document.getElementById("cqcForm");
    if (status==0){//'Currently logged in as Guest.'){
        document.getElementById("cqcForm").style.display="none";
    }else{
        document.getElementById("cqcForm").style.display="block";
    }
}