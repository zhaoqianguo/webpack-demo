import _ from 'lodash';
import Fengjing from './images/fengjing.jpeg';
import './global.css';
import printMe from './print.js';

function component() {
  const ele = document.getElementById('root');
  const btn = document.createElement('button');

  ele.innerHTML = _.join(['Hello', 'webpack', '是我demo'], ' ');

  const myImage = new Image();
  myImage.src = Fengjing;
  ele.appendChild(myImage);

  btn.innerHTML = 'click me';
  btn.onclick = printMe;
  ele.appendChild(btn);

  return ele;
}

document.body.appendChild(component());
