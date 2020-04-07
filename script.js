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

const buttons = [
    [
        { code: 'Backquote', en: '`', ru: 'ё', printable: true },
        { code: 'Digit1', en: '1', ru: '1', printable: true },
        { code: 'Digit2', en: '2', ru: '2', printable: true },
        { code: 'Digit3', en: '3', ru: '3', printable: true },
        { code: 'Digit4', en: '4', ru: '4', printable: true },
        { code: 'Digit5', en: '5', ru: '5', printable: true },
        { code: 'Digit6', en: '6', ru: '6', printable: true },
        { code: 'Digit7', en: '7', ru: '7', printable: true },
        { code: 'Digit8', en: '8', ru: '8', printable: true },
        { code: 'Digit9', en: '9', ru: '9', printable: true },
        { code: 'Digit0', en: '0', ru: '0', printable: true },
        { code: 'Minus', en: '-', ru: '-', printable: true },
        { code: 'Equal', en: '=', ru: '=', printable: true },
        { code: 'Backspace', en: 'Backspace', ru: 'Backspace', printable: false }
    ],

    [
        { code: 'Tab', en: 'Tab', ru: 'Tab', printable: false },
        { code: 'KeyQ', en: 'q', ru: 'й', printable: true },
        { code: 'KeyW', en: 'w', ru: 'ц', printable: true },
        { code: 'KeyE', en: 'e', ru: 'у', printable: true },
        { code: 'KeyR', en: 'r', ru: 'к', printable: true },
        { code: 'KeyT', en: 't', ru: 'е', printable: true },
        { code: 'KeyY', en: 'y', ru: 'н', printable: true },
        { code: 'KeyU', en: 'u', ru: 'г', printable: true },
        { code: 'KeyI', en: 'i', ru: 'ш', printable: true },
        { code: 'KeyO', en: 'o', ru: 'щ', printable: true },
        { code: 'KeyP', en: 'p', ru: 'з', printable: true },
        { code: 'BracketLeft', en: '[', ru: 'х', printable: true },
        { code: 'BracketRight', en: ']', ru: 'ъ', printable: true },
        { code: 'Backslash', en: '\\', ru: '\\', printable: true },
        { code: 'Delete', en: 'DEL', ru: 'DEL', printable: false },
    ],

    [
        { code: 'CapsLock', en: 'Caps Lock', ru: 'Caps Lock', printable: false },
        { code: 'KeyA', en: 'a', ru: 'ф', printable: true },
        { code: 'KeyS', en: 's', ru: 'ы', printable: true },
        { code: 'KeyD', en: 'd', ru: 'в', printable: true },
        { code: 'KeyF', en: 'f', ru: 'а', printable: true },
        { code: 'KeyG', en: 'g', ru: 'п', printable: true },
        { code: 'KeyH', en: 'h', ru: 'р', printable: true },
        { code: 'KeyJ', en: 'j', ru: 'о', printable: true },
        { code: 'KeyK', en: 'k', ru: 'л', printable: true },
        { code: 'KeyL', en: 'l', ru: 'д', printable: true },
        { code: 'Semicolon', en: ';', ru: 'ж', printable: true },
        { code: 'Quote', en: '\'', ru: 'э', printable: true },
        { code: 'Enter', en: 'Enter', ru: 'Enter', printable: false },
    ],

    [
        { code: 'ShiftLeft', en: 'Shift', ru: 'Shift', printable: false },
        { code: 'NoCode', en: '\\', ru: '\\', printable: true },
        { code: 'KeyZ', en: 'z', ru: 'я', printable: true },
        { code: 'KeyX', en: 'x', ru: 'ч', printable: true },
        { code: 'KeyC', en: 'c', ru: 'с', printable: true },
        { code: 'KeyV', en: 'v', ru: 'м', printable: true },
        { code: 'KeyB', en: 'b', ru: 'и', printable: true },
        { code: 'KeyN', en: 'n', ru: 'т', printable: true },
        { code: 'KeyM', en: 'm', ru: 'ь', printable: true },
        { code: 'Comma', en: ',', ru: 'б', printable: true },
        { code: 'Period', en: '.', ru: 'ю', printable: true },
        { code: 'Slash', en: '\/', ru: '.', printable: true },
        { code: 'ArrowUp', en: '▲', ru: '▲', printable: false },
        { code: 'ShiftRight', en: 'Shift', ru: 'Shift', printable: false },
    ],

    [
        { code: 'ControlLeft', en: 'Ctrl', ru: 'Ctrl', printable: false },
        { code: 'MetaLeft', en: 'Win', ru: 'Win', printable: false },
        { code: 'AltLeft', en: 'Alt', ru: 'Alt', printable: false },
        { code: 'Space', en: ' ', ru: ' ', printable: true },
        { code: 'AltRight', en: 'Alt', ru: 'Alt', printable: false },
        { code: 'ArrowLeft', en: '◄', ru: '◄', printable: false },
        { code: 'ArrowDown', en: '▼', ru: '▼', printable: false },
        { code: 'ArrowRight', en: '►', ru: '►', printable: false },
        { code: 'ControlRight', en: 'Ctrl', ru: 'Ctrl', printable: false }
    ],
];

