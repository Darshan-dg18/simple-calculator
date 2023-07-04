const button = document.querySelectorAll("button");
const inputField = document.getElementById("result");

for(let i = 0; i<button.length; i++){
    button[i].addEventListener("click", () => {
        const buttonValue = button[i].textContent;
        if(buttonValue === "C"){
            clearResult();
        }else if(buttonValue === "="){
            calculateResult();
        }else{
            appendValue(buttonValue);
        }
    });
}

function clearResult(){
    inputField.value="";
}

function calculateResult(){
    inputField.value = eval(inputField.value);
}

function appendValue(buttonValue){
    inputField.value +=buttonValue;
}