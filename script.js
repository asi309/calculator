const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a,b) => b === 0 ? 'error0' : a / b;

let operationQ = [];

const operate = () => {
    const l = operationQ.length;
    if (operationQ[l-3] === '+') {
        return add(operationQ[l-4], operationQ[l-2]);
    } else if (operationQ[1] === '-') {
        return subtract(operationQ[l-4], operationQ[l-2]);
    } else if (operationQ[1] === '*') {
        return multiply(operationQ[l-4], operationQ[l-2]);
    } else if (operationQ[1] === '/') {
        return divide(operationQ[l-4], operationQ[l-2]);
    }
    operationQ = [];
};

// const handleOperation = (e) => {
    
// }

// const keys = document.querySelectorAll('.key');
// window.addEventListener('keydown', handleOperation);

const addNum = (num) => {
    console.log(num);
    const inputBox = document.querySelector('input');
    const btn = Array.from(document.querySelectorAll('.btn-operation'));
    if (typeof num === 'number') {
        inputBox.value += num;
    } else {
        if (num === '.') {
            inputBox.value += num;
        } else if (typeof num !== 'number') {
            operationQ.push(parseFloat(inputBox.value));
            inputBox.value = '';
            operationQ.push(num);
            console.log(operationQ);
            if (operationQ.length%4 === 0) {
                const result = operate();
                const operand = operationQ[operationQ.length-1];
                operationQ = [];
                if (operand === 'enter') {
                    result !== 'error0' ? inputBox.value = result : location.reload();
                } else {
                    operationQ.push(result);
                    operationQ.push(operand);
                }
            }
        }
    }
}

const clearInput = () => {
    const inputBox = document.querySelector('input');
    inputBox.value = '';
}

const clearOne = () => {
    const inputBox = document.querySelector('input');
    inputBox.value = inputBox.value.slice(0, inputBox.value.length - 1);
}

const clearOperation = () => {
    operationQ = [];
    const inputBox = document.querySelector('input');
    inputBox.value = '';
}