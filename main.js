'use strict';
let main = document.querySelector('.main'),
    titleColor = document.querySelector('.title__color'),
    buttonGenerate = document.querySelector('.button__generate')

let getRandomColor = function(){
  let r = Math.ceil(Math.random() * 256),
      g = Math.ceil(Math.random() * 256),
      b = Math.ceil(Math.random() * 256);
  let color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
  console.log(color);
  main.style.background = color;
  titleColor.innerHTML = color;
  buttonGenerate.style.background = color;
}

buttonGenerate.addEventListener('click', getRandomColor);