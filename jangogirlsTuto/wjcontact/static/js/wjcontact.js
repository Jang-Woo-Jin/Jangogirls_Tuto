document.getElementById("research_text").addEventListener("onFocus", clearText(this));
document.getElementById("research_text").addEventListener("onFocusout", defaultText(this));
const DEFAULT_SENTENCE = "Please insert name."

function clearText(y){ 
    if (y.defaultValue==y.value) 
        y.value = "" 
} 
function defaultText(y){
    //if (y.value!=DEFAULT_SENTENCE) 
        y.value = "ha"//DEFAULT_SENTENCE
}  