function handleKeyPress(event) {
    // Get the key code of the pressed key
    const keyCode = event.code;
    console.log(event.code);
    console.log(event);
    // Get the corresponding key element based on the key code
    const keyElement = document.getElementById(keyCode);

    //change back to lowercase on release for the shift key
    if(event.keyCode === 16){
        convertToUppercase();
        charToShift();
    }

    // Do something with the key element, such as add a class
    if (keyElement) {
        keyElement.classList.add("active");
    }
}

function handleKeyRelease(event) {
    // Get the key code of the released key
    const keyCode = event.code;

    // Get the corresponding key element based on the key code
    const keyElement = document.getElementById(keyCode);

    //change back to lowercase on release for the shift key
    if(event.keyCode === 16){
        // letters
        toLowerCase();
        // others
        backToDefault();
    }

    // Do something with the key element, such as remove a class
    if (keyElement) {
        keyElement.classList.remove("active");
    }
}

// change non letter chars on shift
function charToShift() {
    // Numbers:
    changeTextContentTo("Digit1", "!");
    changeTextContentTo("Digit2", '"');
    changeTextContentTo("Digit3", "£");
    changeTextContentTo("Digit4", "$");
    changeTextContentTo("Digit5", "%");
    changeTextContentTo("Digit6", "^");
    changeTextContentTo("Digit7", "&");
    changeTextContentTo("Digit8", "*");
    changeTextContentTo("Digit9", "(");
    changeTextContentTo("Digit0", ")");
    // Other:
    changeTextContentTo("Backquote", "¬");
    changeTextContentTo("Minus", "_");
    changeTextContentTo("Equal", "+");
    changeTextContentTo("BracketLeft", "{");
    changeTextContentTo("BracketRight", "}");
    changeTextContentTo("Semicolon", ":");
    changeTextContentTo("Quote", "@");
    changeTextContentTo("Backslash", "~");
    changeTextContentTo("IntlBackslash", "|");
    changeTextContentTo("Comma", "<");
    changeTextContentTo("Period", ">");
    changeTextContentTo("Slash", "?");
    
}

function backToDefault() {
    // Numbers:
    changeTextContentTo("Digit1", "1");
    changeTextContentTo("Digit2", "2");
    changeTextContentTo("Digit3", "3");
    changeTextContentTo("Digit4", "4");
    changeTextContentTo("Digit5", "5");
    changeTextContentTo("Digit6", "6");
    changeTextContentTo("Digit7", "7");
    changeTextContentTo("Digit8", "8");
    changeTextContentTo("Digit9", "9");
    changeTextContentTo("Digit0", "0");
    // Other:
    changeTextContentTo("Backquote", "`");
    changeTextContentTo("Minus", "-");
    changeTextContentTo("Equal", "=");
    changeTextContentTo("BracketLeft", "[");
    changeTextContentTo("BracketRight", "]");
    changeTextContentTo("Semicolon", ";");
    changeTextContentTo("Quote", "'");
    changeTextContentTo("Backslash", "#");
    changeTextContentTo("IntlBackslash", "\\");
    changeTextContentTo("Comma", ",");
    changeTextContentTo("Period", ".");
    changeTextContentTo("Slash", "/");


}

function changeTextContentTo(idOfElem, to) {
    const elem = document.getElementById(idOfElem);
    elem.innerHTML = to;
}

// change letters to Uppercase / Lowercase on shift
function convertToUppercase() {
    const keys = document.querySelectorAll('.letter');
  
    keys.forEach(key => {
      const keyText = key.textContent;
      key.textContent = keyText.toUpperCase();
    });
  }
  
function toLowerCase() {
    const keys = document.querySelectorAll('.letter');
    keys.forEach((key) => {
      key.textContent = key.textContent.toLowerCase();
    });
}
  
// Add event listeners for key press and release events
document.addEventListener("keydown", handleKeyPress);
document.addEventListener("keyup", handleKeyRelease);