import { word,add } from './js/word.js';
import printMe from './print.js';
import './css/style.css';
import jsimg from './img/js.png';
function component() {
  var element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  let a = word;
  let b = 'Big Denzel,';
  element.innerHTML = add(b,a);
  element.classList.add('hello');
  var img = new Image();
  img.src = jsimg;
  img.onclick = printMe;
  element.appendChild(img);

  return element;
}

document.body.appendChild(component());