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
  ['Hello world! I\'m a...', '¡Hola Mundo! Yo soy...', '你好，世界！我是...', 'Bonjour le monde! Je suis...'];
    var greeting = greetings[Math.floor(Math.random() * greetings.length)];
    var intros;
    switch(greeting){
        case 'Hello world! I\'m a...':
            intros = ['Student.', 'Developer.', 'Woman.', 'Human.', 'Ambitious.','Conscientious.','Creative.'];
            break;
        case '¡Hola Mundo! Yo soy...':
            intros = ['Estudiante.','Desarrollador.','Mujer.','Humano.','Ambicioso.','Concienzudo.','Creativo.'];
            break;
        case '你好，世界！我是...':
            intros = ['学生。','开发人员。','女人。','人类。','雄心勃勃。','尽责。','创意。'];
            break;
        case 'Bonjour le monde! Je suis...':
            intros = ['Étudiant.','Développeur.','Femme.','Humain.','Ambitieux.','Consciencieux.','Créatif.'];
            break;
    }

  var intro1 = intros[Math.floor(Math.random() * intros.length)];
  var intro2 = intros[Math.floor(Math.random() * intros.length)];
  var intro3 = intros[Math.floor(Math.random() * intros.length)];

  const introContainer = document.getElementById('intro-container');
  introContainer.innerText = greeting+ "        "+intro1 + "     " + intro2 + "     " + intro3;
}

async function getRandomQuoteUsingAsyncAwait() {
  let response = await fetch('/data');
  let quote = await response.text();
  document.getElementById('quote-container').innerText = quote;
}

async function loadTasks() {
    let response = await fetch('/list-tasks');
    let list = await response.json();
    for(c in list){ 
        let reviewsElem = document.getElementById("reviews");
        let commentElem = document.createElement("DIV");
        commentElem.appendChild(document.createTextNode(list[c].email+": "+list[c].description));
        reviewsElem.appendChild(commentElem);
    }
    document.getElementById("showCQC").onclick = null;
}
async function loginStatus() {
    let login = await fetch('/status');
    let status = await login.json();
    console.log(status);
    if (status==0){
        document.getElementById("cqcForm").style.display="none";
    }else{
        document.getElementById("cqcForm").style.display="block";
    }
}

function findOffset(element) {
  var top = 0, left = 0;

  do {
    top += element.offsetTop  || 0;
    left += element.offsetLeft || 0;
    element = element.offsetParent;
  } while(element);

  return {
    top: top,
    left: left
  };
}

window.onload = function () {
  var stickyHeader = document.getElementById('myHeader');
  var headerOffset = findOffset(stickyHeader);

  window.onscroll = function() {
    // body.scrollTop is deprecated and no longer available on Firefox
    var bodyScrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    if (bodyScrollTop > headerOffset.top) {
      stickyHeader.classList.add('fixed');
    } else {
      stickyHeader.classList.remove('fixed');
    }
  };
};