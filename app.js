var btnTransulate=document.querySelector("#btn-transulate");
var txtinput=document.querySelector("#txt-input");
var outputdiv=document.querySelector("#output");

console.log(outputdiv);


btnTransulate.addEventListener("click", function clickEventHandler(){
    //console.log("Clicked!");
    //console.log("Text entered is: "+txtinput.value);
    outputdiv.innerText="Transulated Text is: "+txtinput.value;
})
