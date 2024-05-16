
let inputEle = document.getElementById("input");
let buttonEle = document.getElementById("btn");
let messageEle = document.getElementById("msg");

btn.onclick = function (){

    let inputValue = inputEle.value;
    console.log(inputValue);

    messageEle.innerHTML = "Your message has been entered  " + inputValue;

    inputEle.value =  "";
}