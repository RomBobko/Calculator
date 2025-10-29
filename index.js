// 1. Отримати всі кнопки
// 2. Коли натискаю цифру — додати її в екран
// 3. Коли натискаю операцію — зберегти її
// 4. Коли натискаю = — порахувати і показати результат
// 5. Коли натискаю C — очистити все

// Знайти екран (.total)
// Знайти keypad
// Повісити слухач подій на keypad (один для всіх кнопок)
// Усередині слухача - визначити тип кнопки через dataset

// const refs = {
//     totalValue: document.querySelector('.total'),
//     numberBtn: document.querySelectorAll('[data-number]'),
//     operationBtn: document.querySelectorAll('[data-op]'),
//     clearBtn: document.querySelector('[data-clear]'),
//     equalsBtn: document.querySelector('[data-equals]'),
// };

const refs = {
    totalValue: document.querySelector('.total'),
    keypad: document.querySelector('.keypad'),
};

refs.keypad.addEventListener('click', keypadClickHandler);

function keypadClickHandler(event) {
    const btn = event.target;

    if()

    if (btn.dataset.number) {
        console.log('number');
    }
    if (btn.dataset.op) {
        console.log('operation');
    }
    if (btn.dataset.clear) {
        console.log('Clear');
    }
    if (btn.dataset.equals) {
        console.log('equal');
    }

    console.log('ловить');
    
}
