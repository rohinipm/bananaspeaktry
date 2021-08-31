var btnTransulate=document.querySelector("#btn-transulate");
var txtinput=document.querySelector("#txt-input");


btnTransulate.addEventListener("click", function clickEventHandler(){
    console.log("Clicked!");
    console.log("Text entered is: "+txtinput.value);
})