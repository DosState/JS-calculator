function sum(firstOp,secondOp){
    firstOp = Number(firstOp)
    secondOp = Number(secondOp)
    return firstOp+secondOp
}

function sub(firstOp,secondOp){
    firstOp = Number(firstOp)
    secondOp = Number(secondOp)
    return firstOp-secondOp;
}

function divide(firstOp,secondOp){
    firstOp = Number(firstOp)
    secondOp = Number(secondOp)
    return firstOp/secondOp
}

function mul(firstOp,secondOp){
    firstOp = Number(firstOp)
    secondOp = Number(secondOp)
    return firstOp*secondOp
}

function operate(firstOp, operator, secondOp){
    switch(operator){
        case "+":
            return sum(firstOp, secondOp)
        case "-":
            return sub(firstOp, secondOp)
        case "/":
            return divide(firstOp, secondOp)
        case "*":
            return mul(firstOp, secondOp)
    }
}

function refreshDisplay(arr, elem){
    if (elem.innerText === "Welcome"){
        elem.textContent = "";
    }
    let string = arr.join(" ");
    elem.textContent = string;
}

const display = document.querySelector("p");
const buttons = document.querySelectorAll("button");
const operands = ["+", "-", ".", "*", "/"];
let buttonTexts = [];
let firstOp = "";
let secondOp = "";
let operator = "";

buttons.forEach( button => {
    button.addEventListener("click", (e)=>{
        const buttonText = e.target.innerText;
        if (buttonText === "C"){
            buttonTexts = [];
            firstOp = "";
            secondOp = "";
            operator = "";
        }
        else if (buttonText === "="){
            buttonTexts = [];
            console.log(firstOp, secondOp, operator)
            buttonTexts.push(operate(firstOp, operator, secondOp))
            refreshDisplay(buttonTexts, display);
            firstOp="";
            secondOp="";
            operator="";
        }
        else if (operands.includes(buttonText) && !(operator==="")){
            buttonTexts = [];
            console.log(firstOp, secondOp, operator)
            buttonTexts.push(operate(firstOp, operator, secondOp))
            refreshDisplay(buttonTexts, display);
            firstOp = operate(firstOp, operator, secondOp);
            secondOp = "";
            operator = buttonText;
            buttonTexts.push(buttonText)
        }
        else{
            if (operands.includes(buttonText)){
                operator = buttonText;
            }
            else{
                if (operator === ""){
                    firstOp += buttonText;
                }
                else{
                    secondOp += buttonText;
                }
            }
            buttonTexts.push(buttonText);
        }
        refreshDisplay(buttonTexts, display);
    });
});