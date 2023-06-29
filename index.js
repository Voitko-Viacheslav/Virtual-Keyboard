
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


const arrayOne = ['~', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'];
const arrayTwo = ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '{', '}', 'Del'];

function createKeys(array) {
    const line = document.createElement('div');
    line.classList.add('line');
    wrapper.append(line);

    for (let i = 0; i < array.length; i++) {
        let keyOne = document.createElement('div');
        keyOne.classList.add('key');
        keyOne.textContent = array[i];
        if (array[i].length > 2) {
            keyOne.classList.add('keyLong');
        }
        line.append(keyOne);
    }
}

createKeys(arrayOne);
createKeys(arrayTwo);