const add = (a, b) => parseFloat(a) + parseFloat(b);

const subtract = (a, b) => parseFloat(a) - parseFloat(b);

const multiply = (a, b) => parseFloat(a) * parseFloat(b);

const divide = (a,b) => parseFloat(b) === 0 ? 'Cannot divide by 0' : parseFloat(a) / parseFloat(b);

let operationQ = [];

const operate = () => {
    if (operationQ.length === 0) {
        console.log('Cannot perform operation');
        return;
    }
    if (typeof operationQ[operationQ.length - 1] !== 'number') {
        console.log('Malformed expression');
        return;
    }
    if (operationQ.length === 3) {
        if (operationQ[1] === '+') {
            return add(operationQ[0], operationQ[2]);
        } else if (operationQ[1] === '-') {
            return subtract(operationQ[0], operationQ[2]);
        } else if (operationQ[1] === '*') {
            return multiply(operationQ[0], operationQ[2]);
        } else if (operationQ[1] === '/') {
            return divide(operationQ[0], operationQ[2]);
        }
        operationQ = [];
    }
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
        inputBox.value = num;
    } else {
        if (num === 'enter') {
            
        }
    }
}