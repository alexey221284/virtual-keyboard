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