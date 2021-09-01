var btnTransulate=document.querySelector("#btn-transulate");
var txtinput=document.querySelector("#txt-input");
var outputdiv=document.querySelector("#output");

var serverURL="https://api.funtranslations.com/translate/minion.json";

function getTransulationURL(text){
    retun serverURL+"?"+"text="+text
}

function errorHandeler(error){
    console.log("Error Occured"+error);
    alert("Something wrong with server! Try after some time!");
}

btnTransulate.addEventListener("click", function clickEventHandler(){
    var inputText=txtinput.value;

    fetch(getTransulationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var transulatedText=json.contents.transulated;
            outputdiv.innerText=transulatedText;
        })
        .catch(errorHandeler)
});
