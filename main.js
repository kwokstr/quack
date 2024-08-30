//examples of what else works
//function displayText2(){
   //const element = document.getElementById("textField2");
    //element.classList.remove("hidden");
    //element.classList.add("show");
//}
//function displayText2(){
    //const element = document.getElementById("textField2");
    //const displaySetting = element.style.display;
    //if (displaySetting=='block') {
    //    element.style.display='none';
    //}else{
    //    element.style.display='block'
    //}
//}
function displayText1(){
    const element = document.getElementById("textField");
    const className = element.className;
    if (className=="hidden") {
        element.classList.remove("hidden")
        element.classList.add("show")
    }else{
        element.classList.add("hidden")
        element.classList.remove("show")
    }
}
console.log(displayText1)

function displayText2(){
    const element = document.getElementById("textField2");
    const className = element.className;
    if (className=="hidden") {
        element.classList.remove("hidden")
        element.classList.add("show")
    }else{
        element.classList.add("hidden")
        element.classList.remove("show")
    }
}
console.log(displayText2)

function displayText0(){
    const element = document.getElementById("textField3");
    const className = element.className;
    if (className=="hidden") {
        element.classList.remove("hidden")
        element.classList.add("show")
    }else{
        element.classList.add("hidden")
        element.classList.remove("show")
    }
}
console.log(displayText0)