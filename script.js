const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a,b) => b === 0 ? 'error0' : a / b;

let operationQ = [];

const operate = () => {
    const l = operationQ.length;
    if (operationQ[l-2] === '+') {
        return add(operationQ[l-3], operationQ[l-1]);
    } else if (operationQ[1] === '-') {
        return subtract(operationQ[l-3], operationQ[l-1]);
    } else if (operationQ[1] === '*') {
        return multiply(operationQ[l-3], operationQ[l-1]);
    } else if (operationQ[1] === '/') {
        return divide(operationQ[l-3], operationQ[l-1]);
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
            if (num !== 'enter') {
                operationQ.push(parseFloat(inputBox.value));
                inputBox.value = '';
                operationQ.push(num);
                console.log(operationQ);            
            } else {
                operationQ.push(parseFloat(inputBox.value));
                inputBox.value = '';
                console.log(operationQ);
                const result = operate();
                if (typeof result === 'number') {
                    inputBox.value = result;
                    operationQ = [];
                    // operationQ.push(result);
                } else if (result === 'error0') {
                    inputBox.value = 'Cannot divide by 0';
                    operationQ = [];
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