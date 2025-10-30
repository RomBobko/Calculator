const refs = {
    totalValue: document.querySelector('.total'),
    keypad: document.querySelector('.keypad'),
};

refs.keypad.addEventListener('click', keypadClickHandler);

let current = '';
let previous = '';
let operator = null;
let justEvaluated = false;

const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => (b === 0 ? 'Error' : a / b);

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
    if (justEvaluated) {
        current = '';
        justEvaluated = false;
    }

    current += digit;
}

function operationBtnHandler(op) {
    if (!current && previous) {
        operator = op;
        return;
    }

    if (previous && current && operator) {
        const result = compute(previous, current, operator);
        previous = result.toString();
        current = '';
        operator = op;
        return;
    }

    previous = current;
    current = '';
    operator = op;
}

function clearBtnHandler() {
    current = '';
    previous = '';
    operator = null;
    justEvaluated = false;
}

function equalsBtnHandler() {
    if (!previous || !current || !operator) return;

    const result = compute(previous, current, operator);
    current = result.toString();
    previous = '';
    operator = null;
    justEvaluated = true;
}

function render() {
    refs.totalValue.textContent =
        `${previous}${operator || ''}${current} `.trim() || '0';
}
