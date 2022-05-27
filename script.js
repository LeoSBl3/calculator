let displayBox = document.querySelector('.display-box');
let historyScreen = document.querySelector('.history-screen');

let btnNr = document.querySelectorAll('.button');
let btnOp = document.querySelectorAll('.operator');
let btn0 = document.querySelector('.btn-0');
let btnClear = document.querySelector('.clear');
let btnEqual = document.querySelector('.equal');

let operationSign = '';
let operationName = '';
let result = null;

btnNr.forEach(button => {
    button.addEventListener('click', (e) => {

        displayBox.innerText += e.target.innerText;

    })
});

btnOp.forEach(operator => {
    operator.addEventListener('click', (e) => {

        if (!checkOperator(displayBox.innerText)) {
            operationName = e.target.innerText;
            displayBox.innerText += operationName;
        }
    })
});

btnEqual.addEventListener('click', (e) => {
    if (!displayBox.innerText) return;

    result = displayCalc(displayBox.innerText);
    displayBox.innerText = displayBox.innerText + ' = ' + result;

    let ul = document.querySelector('.result-list');
    let listResult = document.createElement('li');
    let rmBtn = document.createElement('button');
    let line = document.createElement('hr')

    listResult.textContent = displayBox.textContent;
    rmBtn.textContent = 'Clear';
    rmBtn.className = 'historybutton';
    line.className = 'line';

    ul.append(listResult);
    listResult.append(rmBtn);
    listResult.append(line);

    rmBtn.addEventListener('click', event => {
        listResult.remove();
        rmBtn.remove();
    });
    displayBox.textContent = '';
})

btnClear.addEventListener('click', (e) => {
    displayBox.innerText = '';
    displayNum1 = '';
    displayNum2 = '';
    result = '';

})

function checkOperator(displayContent) {

    let lastchar = displayContent.slice(-1);
    if (lastchar === '*' || lastchar === '+' || lastchar === '-') {
        if (lastchar === '*' && displayContent.innerText == '') {
            return false;
        }
        return true;
    } else {
        return false;
    }
}

function displayCalc(displayContent) {
    result = eval(displayContent);
    return result;
}


// let buttons = document.querySelectorAll('.button');
// let display = document.querySelector('.display-box');
// let historyScreen = document.querySelector('.history-screen');

// let btn = '';

// for(let i = 0; i<buttons.length; i++){
//     buttons[i].addEventListener('click', (e) => {
//         if (!operator(display.innerText)) {
//             displayText(buttons[i].textContent);

//         } else{
//             displayText(buttons[i].textContent);

//         }
//     });
 
//  }
//  function displayText(text){
//      display.textContent += text;
//  }

//  function operator(displayContent) {

//     let lastchar = displayContent.slice(-1);
//     if (lastchar === '*' || lastchar === '+' || lastchar === '-') {
//         if (lastchar === '*' && displayContent.innerText == '') {
//             return false;
//         }
//         return true;
//     } else {
//         return false;
//     }
// }