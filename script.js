const container = document.querySelector('.container'), 
      transition = 1000;

function createDiv() {
    const cDiv = document.createElement('div'),
          tDiv = document.createTextNode('Animation : ');

    cDiv.appendChild(tDiv),
    container.appendChild(cDiv)
}