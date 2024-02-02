let capsState = false;
let shiftPressed = false;
let charTextList = [];
let wordTextList = [];
let current = 0;

//timer
let counter = 0; // half a second
let timer_on = 0;
let timeout;

//examples
const antAndHopper =
    'One summer\'s day, in a field, a Grasshopper was hopping about, chirping and singing to its heart\'s content.\n An Ant passed by, bearing along with great effort an ear of corn he was taking to his nest."Why don\'t you come and chat with me," asked the Grasshopper, "instead of toiling your life away?""I am helping to store up food for the winter," said the Ant, "and I recommend you to do the same."\n"Why bother about winter?" said the Grasshopper. "We have got plenty of food at present."';
const royalServant =
    'The King of Kamera in Africa was a proud and stern man, feared by all his subjects.\n\nOne day while sitting in his mud palace, surrounded by fawning courtiers and watched by a multitude of people who had come to see him, he was suddenly overcome by a sense of grandeur and loudly declared that he was master of the world and that all men were his servants.\n\n“You are mistaken," said a frail voice. “All men are servants of one another."\n\nA deathly silence followed the remark. The blood froze in the veins of the people assembled there. Then the king exploded in anger.\n\n“Who said that!" he demanded, rising from the royal stool. “Who dares suggest that I am a servant!!"\n\n“I do," said a voice in the crowd, and the people parted to reveal a white-haired old man, leaning heavily on a stout stick.\n\n“Who are you?" asked the king.\n\n“I am Boubakar," said the man. “We have no water in our village. I have come to ask for a well to be dug there."\n\n“So you are a beggar!" roared the king, striding down to where the man stood. “Yet you have the temerity to call me a servant!"\n\n“We all serve one another," said Boubakar, showing no fear, “and I will prove it to you before nightfall."\n\n“Do that," said the monarch. “Force me to wait on you. If you can do that I will have not one but three wells dug in your village. But if you fail, you’ll lose your head!"\n\n“In our village," said the old man, “when we accept a challenge, we touch the person’s feet. Let me touch your feet. Hold my stick."\n\nThe king took the stick and the old man bent down and touched the monarch’s feet.\n\n“Now you may give it back to me," he said, straightening up. The king gave him back his stick.\n\n“Do you want any more proof?" asked Boubakar.\n\n“Proof?" asked the king, bewildered.\n\n“You held my stick when I asked you to and gave it back to me when I asked you for it," said the old man. “As I said, all good men are servants of one another."\n\nThe king was so pleased with the Royal Servant Boubakar’s wit and daring that he not only had wells dug in his village but also retained him as an adviser.';
const robotMonkey =
    "Sliding his hands over the clay, Sly relished the moisture oozing around his fingers. The clay matted down the hair on the back of his hands making them look almost human. He turned the potter's wheel with his prehensile feet as he shaped the vase. Pinching the clay between his fingers he lifted the wall of the vase, spinning it higher.\n\nSomeone banged on the window of his pen. Sly jumped and then screamed as the vase collapsed under its own weight. He spun and hurled it at the picture window like feces. The clay spattered against the Plexiglas, sliding down the window.\n\nIn the courtyard beyond the glass, a group of school kids leapt back, laughing. One of them swung his arms aping Sly crudely. Sly bared his teeth, knowing these people would take it as a grin, but he meant it as a threat. Swinging down from his stool, he crossed his room in three long strides and pressed his dirty hand against the window. Still grinning, he wrote SSA. Outside, the letters would be reversed.\n\nThe student's teacher flushed as red as a female in heat and called the children away from the window. She looked back once as she led them out of the courtyard, so Sly grabbed himself and showed her what he would do if she came into his pen.\n\nHer naked face turned brighter red and she hurried away. When they were gone, Sly rested his head against the glass. The metal in his skull thunked against the window. It wouldn't be long now, before a handler came to talk to him.\n\nDamn.\n\nHe just wanted to make pottery. He loped back to the wheel and sat down again with his back to the window. Kicking the wheel into movement, Sly dropped a new ball of clay in the center and tried to lose himself.\n\nIn the corner of his vision, the door to his room snicked open. Sly let the wheel spin to a halt, crumpling the latest vase.\n\nVern poked his head through. He signed, 'You okay?'\n\nSly shook his head emphatically and pointed at the window.\n\n'Sorry.' Vern's hands danced. 'We should have warned you that they were coming.'\n\n'You should have told them that I was not an animal.'\n\nVern looked down in submission. 'I did. They're kids.'\n\n'And I'm a chimp. I know.' Sly buried his fingers in the clay to silence his thoughts.\n\n'It was Delilah. She thought you wouldn't mind because the other chimps didn't.'\n\nSly scowled and yanked his hands free. 'I'm not like the other chimps.' He pointed to the implant in his head. 'Maybe Delilah should have one of these. Seems like she needs help thinking.'\n\n'I'm sorry.' Vern knelt in front of Sly, closer than anyone else would come when he wasn't sedated. It would be so easy to reach out and snap his neck. 'It was a lousy thing to do.'\n\nSly pushed the clay around on the wheel. Vern was better than the others. He seemed to understand the hellish limbo where Sly lived–too smart to be with other chimps, but too much of an animal to be with humans. Vern was the one who had brought Sly the potter's wheel which, by the Earth and Trees, Sly loved. Sly looked up and raised his eyebrows. 'So what did they think of my show?'\n\nVern covered his mouth, masking his smile. The man had manners. 'The teacher was upset about the 'evil robot monkey.''\n\nSly threw his head back and hooted. Served her right.\n\n'But Delilah thinks you should be disciplined.' Vern, still so close that Sly could reach out and break him, stayed very still. 'She wants me to take the clay away since you used it for an anger display.'\n\nSly's lips drew back in a grimace built of anger and fear. Rage threatened to blind him, but he held on, clutching the wheel. If he lost it with Vern–rational thought danced out of his reach. Panting, he spun the wheel trying to push his anger into the clay.\n\nThe wheel spun. Clay slid between his fingers. Soft. Firm and smooth. The smell of earth lived in his nostrils. He held the world in his hands. Turning, turning, the walls rose around a kernel of anger, subsuming it.\n\nHis heart slowed with the wheel and Sly blinked, becoming aware again as if he were slipping out of sleep. The vase on the wheel still seemed to dance with life. Its walls held the shape of the world within them. He passed a finger across the rim.\n\nVern's eyes were moist. 'Do you want me to put that in the kiln for you?'\n\nSly nodded.\n\n'I have to take the clay. You understand that, don't you.'\n\nSly nodded again staring at his vase. It was beautiful.\n\nVern scowled. 'The woman makes me want to hurl feces.'\n\nSly snorted at the image, then sobered. 'How long before I get it back?'\n\nVern picked up the bucket of clay next to the wheel. 'I don't know.' He stopped at the door and looked past Sly to the window. 'I'm not cleaning your mess. Do you understand me?'\n\nFor a moment, rage crawled on his spine, but Vern did not meet his eyes and kept staring at the window. Sly turned.\n\nThe vase he had thrown lay on the floor in a pile of clay.\n\nClay.\n\n'I understand.' He waited until the door closed, then loped over and scooped the clay up. It was not much, but it was enough for now.\n\nSly sat down at his wheel and began to turn.\n\nEND";

let examples = [antAndHopper, royalServant, robotMonkey];

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
        wpm.toFixed(2) + " net W/M and " + accuracy.toFixed(2) + "% accuracy";
    return resultString;
}

function removeActiveClass() {
    const elements = document.querySelectorAll(".active");
    elements.forEach((element) => {
        element.classList.remove("active");
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
            if (char == "’") {
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
    $("#ex1").on("click", function () {
        insertText(examples[0]);
        current = 0;
    });
    $("#ex2").on("click", function () {
        insertText(examples[1]);
        current = 0;
    });
    $("#ex3").on("click", function () {
        insertText(examples[2]);
        current = 0;
    });
}
main();
