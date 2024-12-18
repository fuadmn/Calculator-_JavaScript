// Varibles
const allNumbers = document.querySelectorAll('.numbar');
const symbols = document.querySelectorAll('.symbol');
const equalButton = document.querySelector('.equal');
const cButton = document.querySelector('.c');
const ceButton = document.querySelector('.ce');

const display1 = document.querySelector('.display-1');
const display2 = document.querySelector('.display-2');
const display3 = document.querySelector('.display-3');


let sing = '';
let result = null;
let outputOne = '';
let outputTwo = '';
let dot = false;


allNumbers.forEach(number => {
    number.addEventListener('click', showNumber);
});

//show numbers
function showNumber(e) {
    if(e.target.innerText === '.' && !dot){
        dot = true;
    }else if(e.target.innerText === '.' && dot){
        return;
    }
   outputTwo =  outputTwo + e.target.innerText;
   display2.innerText = outputTwo;
}

//Display result on the screen
symbols.forEach(Symbol => {
    Symbol.addEventListener('click', showResult)
})

// show result
function showResult(e){
    if(!outputTwo) result;
    dot = false;
    const singName = e.target.innerText;

    if (outputOne && outputTwo && sing) {
        chickCalcultaion();
    } else {
        result = parseFloat(outputTwo);
    }
    clearMainDisplay(singName);
    sing = singName;
} 

//Check calculation
function chickCalcultaion(){
    if(sing === 'X'){
        result = parseFloat(result) * parseFloat(outputTwo);
    }else if (sing === '+'){
        result = parseFloat(result) + parseFloat(outputTwo);
    }else if (sing === '-'){
        result = parseFloat(result) - parseFloat(outputTwo);
    }else if (sing === '/'){
        result = parseFloat(result) / parseFloat(outputTwo);
    }else if (sing === '%'){
        result = parseFloat(result) % parseFloat(outputTwo);
    }
}

// clear display 
function clearMainDisplay(name =  ''){
    outputOne += outputTwo+ '' + name + '';
    display1.innerText = outputOne;
    display2.innerText = '';
    display3.innerText = result;
    outputTwo = '';
}

equalButton.addEventListener('click', calculte);

function calculte(){
   if(!outputOne || !outputTwo){
    return;
   }else{

    chickCalcultaion();
    clearMainDisplay();
    display2.innerText = result;
    outputTwo = result;   
    display3.innerText = '';
    outputOne = '';
   }
}

//cButton and ceButton 
cButton.addEventListener('click', deleteAll);
ceButton.addEventListener('click', deleteLastInput);

function deleteAll(){
    display1.innerText = '0';
    display2.innerText = '0';
    display3.innerText = '0';
    outputOne = '';
    outputTwo = '';
    result = ''; 

}

function deleteLastInput(){
    display2.innerText = '';
    outputTwo = '';
    
}


