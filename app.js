let capsState = false;
let shiftPressed = false;
let charTextList = [];
let wordTextList = [];
let current = 0;

//timer
let counter = 0; // half a second
let timer_on = 0;
let timeout;

function timedCount() {
    counter++;
    timeout = setTimeout(timedCount, 100);
}
function startCount() {
    if (!timer_on) {
        timer_on = 1;
        timedCount();
    }
}
function stopCount() {
    clearTimeout(timeout);
    timer_on = 0;
    counter = 0;
}

// key event handlers
function handleKeyPress(event) {
    // event.preventDefault();

    var hasFocus = $("#typeInput").is(":focus");
    if (hasFocus) {
        return;
    }

    // Get the key code of the pressed key
    const keyCode = event.code;
    console.log(event);
    // Get the corresponding key element based on the key code
    const keyElement = document.getElementById(keyCode);

    //space
    if (event.keyCode === 32) {
        event.preventDefault();
    }
    // CAPS
    if (event.keyCode === 20) {
        if (capsState) {
            // pressed
            // letters
            toLowerCase();
            capsState = false; //no longer pressed
        } else {
            // not pressed
            // LETTERS
            convertToUppercase();
            capsState = true; // pressed
        }
    }
    // SHIFT
    if (event.keyCode === 16) {
        shiftPressed = true;
        if (capsState) {
            toLowerCase();
        } else {
            convertToUppercase();
        }
        charToShift();
    }

    // Do something with the key element, such as add a class
    if (keyElement) {
        keyElement.classList.add("active");
    }

    // verify if its the correct key:
    handleVerifyKey(event);
}
function handleKeyRelease(event) {
    var hasFocus = $("#typeInput").is(":focus");
    if (hasFocus) {
        return;
    }

    //verify caps lock state
    if (event.getModifierState("CapsLock")) {
        capsState = true; // caps on
        if (shiftPressed) {
            toLowerCase();
        } else {
            convertToUppercase();
        }
    } else {
        capsState = false; // caps off
        if (!shiftPressed) {
            toLowerCase();
        } else {
            convertToUppercase();
        }
    }

    // Get the key code of the released key
    const keyCode = event.code;

    // Get the corresponding key element based on the key code
    const keyElement = document.getElementById(keyCode);

    //change back to lowercase on release for the shift key
    if (event.keyCode === 16) {
        shiftPressed = false;
        // letters
        if (capsState) {
            convertToUppercase();
        } else {
            toLowerCase();
        }
        // others
        backToDefault();
    }

    // Do something with the key element, such as remove a class
    if (keyElement) {
        keyElement.classList.remove("active");
    }
}
function handleVerifyKey(event) {
    //start timer
    startCount();

    let charDivList = document.querySelectorAll(".character");
    console.log(event.key);

    if (event.key === charTextList[current]) {
        charDivList[current].classList.add("correct");
        // go next
        charDivList[current].classList.remove("current");
        current++;
    } else if (event.key === "Backspace") {
        // backspace case
        if (current != 0) {
            console.log("entering backspace case");
            charDivList[current].classList.remove("current");
            current--;
            // charDivList[current].classList.add("current");
            // remove colors
            charDivList[current].classList.remove("wrong");
            charDivList[current].classList.remove("correct");
        }
    } else if (
        event.key != "CapsLock" &&
        event.key != "Shift" &&
        event.key != "Alt"
    ) {
        charDivList[current].classList.add("wrong");
        // go next
        charDivList[current].classList.remove("current");
        current++;
    }

    if (current === charDivList.length - 1) {
        // reached end case!
        console.log("reached end case!");

        //show results
        alert(calculateResult());
        //stop timer
        stopCount();

        removeActiveClass();

        charDivList.forEach((div) => {
            div.classList.remove("wrong");
            div.classList.remove("correct");
        });
        // reset to 0
        current = 0;
        charDivList[current].classList.add("current");
    } else {
        charDivList[current].classList.add("current");
    }

    //scroll after current has been set
    checkPosition();
}
function calculateResult() {
    let uncorrectedErrors = document.getElementsByClassName("wrong").length;
    let totalChars = charTextList.length;
    let correctEntries = totalChars - uncorrectedErrors;

    let chars = charTextList.length;
    let seconds = counter / 10;
    let minutes = seconds / 60;
    let wpm = (chars / 5 - uncorrectedErrors) / minutes;
    let accuracy = (correctEntries / totalChars) * 100;
    let resultString =
        wpm.toFixed(2) + " net W/N and " + accuracy.toFixed(2) + "% accuracy";
    return resultString;
}
function removeActiveClass() {
    const elements = document.querySelectorAll('.active');
    elements.forEach(element => {
      element.classList.remove('active');
    });
}
  
// text insertion functions
function insertText(text) {
    if (text == null || text == "") {
        text = "This is the default text!";
        //    "This is the default text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et odio pellentesque diam volutpat commodo. Platea dictumst quisque sagittis purus sit amet volutpat. Nibh sed pulvinar proin gravida hendrerit.";
    }
    // reset counter
    current = 0;
    // reset timer
    stopCount();

    charTextList = getCharacters(text);
    wordTextList = getWords(text);
    console.log(wordTextList);

    const resultsContainer = document.querySelector(".results-container");
    resultsContainer.innerHTML = ""; // clear previous results

    let first = true;

    //for each word
    wordTextList.forEach((word) => {
        // create new word div
        const wordDiv = document.createElement("div");
        wordDiv.classList.add("word");

        for (let index = 0; index < word.length; index++) {
            let char = word.charAt(index);

            const charDiv = document.createElement("div");
            charDiv.classList.add("character");

            if (first) {
                charDiv.classList.add("current");
                first = false;
            }
            if (char == '’') {
                char = "'";
            }
            // charDiv.textContent = char;
            charDiv.innerHTML = char;
            wordDiv.appendChild(charDiv);
            // handle space
            if (index === word.length - 1) {
                const spaceDiv = document.createElement("div");
                spaceDiv.classList.add("character");

                spaceDiv.innerHTML = "&nbsp;";
                wordDiv.appendChild(spaceDiv);
            }
        }
        // append post div to results container
        resultsContainer.appendChild(wordDiv);
    });
}
function getCharacters(str) {
    return str.split("");
}
function getWords(str) {
    return str.split(" ");
}

// keyboard manipulation functions
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
    const keys = document.querySelectorAll(".letter");

    keys.forEach((key) => {
        const keyText = key.textContent;
        key.textContent = keyText.toUpperCase();
    });
}
function toLowerCase() {
    const keys = document.querySelectorAll(".letter");
    keys.forEach((key) => {
        key.textContent = key.textContent.toLowerCase();
    });
}

//scroll while typing
function checkPosition() {
    const current = document.getElementsByClassName("current")[0];
    const y = current.getBoundingClientRect().top;
    if (y >= 427) {
        window.scrollBy(0, 45);
    } else if (y < 0) {
        window.scrollBy(0, y);
    }
}

//event listeners for key press and release events
function main() {
    insertText();

    //js
    document.addEventListener("keydown", handleKeyPress);
    document.addEventListener("keyup", handleKeyRelease);

    //jq
    $("#clipboardBtn").on("click", async () => {
        const text = await navigator.clipboard.readText();

        insertText(text);
    });
    $("#submitBtn").on("click", function () {
        const inputField = document.getElementById("typeInput");
        insertText(inputField.value);
        current = 0;
    });
}
main();
