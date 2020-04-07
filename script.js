const keyboard = document.createElement('div');
const lng = document.createElement('div');
const textarea = document.createElement('textarea');
const info = document.createElement ('div')

keyboard.classList.add('keyboard');
document.body.append(textarea);
document.body.append(keyboard);
document.body.append(lng);
document.body.append(info);

info.classList.add('info');
info.innerText = "Смена раскладки клавиатуры SHIFT+ALT"

textarea.classList.add('textarea');
textarea.setAttribute('readonly', 'readonly');

const rows = new DocumentFragment();

for (let i = 0; i < 5; i++) {
    const row = document.createElement('div');

    row.classList.add('row');
    rows.append(row);
}
keyboard.append(rows);

for (let i = 0; i < 5; i++) {
    const rowN = new DocumentFragment();

    for (let i = 0; i < 15; i++) {
        const key = document.createElement('div');

        key.classList.add('key');
        rowN.append(key);
    }
    keyboard.children[i].append(rowN);
}

keyboard.children[0].children[0].remove();
keyboard.children[2].children[0].remove();
keyboard.children[2].children[1].remove();
keyboard.children[3].children[0].remove();
keyboard.children[4].children[0].remove();
keyboard.children[4].children[1].remove();
keyboard.children[4].children[2].remove();
keyboard.children[4].children[3].remove();
keyboard.children[4].children[4].remove();
keyboard.children[4].children[5].remove();

keyboard.children[0].lastChild.classList.add('backspace');
keyboard.children[1].firstChild.classList.add('tab');
keyboard.children[1].lastChild.classList.add('del');
keyboard.children[2].firstChild.classList.add('capslock');
keyboard.children[2].lastChild.classList.add('enter');
keyboard.children[3].firstChild.classList.add('left-shift');
keyboard.children[3].children[12].classList.add('arrow');
keyboard.children[3].lastChild.classList.add('right-shift');
keyboard.children[4].children[3].classList.add('space');
keyboard.children[4].children[5].classList.add('arrow');
keyboard.children[4].children[6].classList.add('arrow');
keyboard.children[4].children[7].classList.add('arrow');