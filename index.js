
const container = document.createElement('div');
container.classList.add('cont');
container.style.width = 1000 + 'px';
container.style.height = 1000 + 'px';
container.style.padding = 20 + 'px';
container.style.background = 'yellowgreen'
document.body.prepend(container);


const title = document.createElement('h1');
title.classList.add('title');
title.textContent = 'Virtual Keyboard';
container.prepend(title);


const wrapper = document.createElement('div');
wrapper.classList.add('wrap');
container.append(wrapper);

const line = document.createElement('div');
line.classList.add('line');
wrapper.append(line);


const arrayOne = ['~', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'];

(function f1() {
    for (let i = 0; i < arrayOne.length; i++) {
        let keyOne = document.createElement('div');
        keyOne.classList.add('key');
        keyOne.textContent = arrayOne[i];
        if (arrayOne[i].length > 2) {
            keyOne.classList.add('keyLong');
        }
        line.append(keyOne);
    }
}());


