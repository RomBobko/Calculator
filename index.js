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

let current = '';
let previous = '';
let operator = null;
let justEvalueted = false;

function keypadClickHandler(event) {
    const btn = event.target;

    if (!btn.closest('button')) return;

    if (btn.dataset.number) {
        numberBtnHandler(btn.dataset.number);
    }
    if (btn.dataset.op) {
        operationBtnHandler(btn.dataset.op);
    }
    if (btn.dataset.clear) {
        clearBtnHandler();
    }
    if (btn.dataset.equals) {
        equalsBtnHandler();
    }

    render();
}

const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => (b === 0 ? 'Error' : a / b);

function compute(a, b, operator) {
    a = Number(a);
    b = Number(b);

    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return sub(a, b);
        case '*':
            return mul(a, b);
        case '/':
            return div(a, b);

        default:
            return 'Error';
    }
}

function numberBtnHandler(digit) {
    if (justEvalueted) {
        current = '';
        justEvalueted = false;
    }

    current += digit;
}

function operationBtnHandler(op) {
    previous = current;
    current = '';
    operator = op;
}

function clearBtnHandler(params) {
    current = '';
    previous = '';
    operator = null;
}

function equalsBtnHandler() {
    const result = compute(previous, current, operator);
    current = result.toString();
    previous = '';
    operator = null;
    justEvalueted = true;
}

function render() {
    refs.totalValue.textContent =
        `${previous} ${operator || ''} ${current} `.trim() || '0';
}
