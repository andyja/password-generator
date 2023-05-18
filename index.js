const alphaChars = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const numChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const sybmbolChars = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
    "/"];
let passwordGenerated = false;
let passwordOneEl = document.getElementById("password-one-el");
let resetBtn = document.getElementById("reset-btn");
let lengthResult = document.querySelector("#length");
let passwordRangeResult = document.querySelector("#password-range-result");
let numCheckBox = document.getElementById("numChars-checked");
let symCheckBox = document.getElementById("symbolChars-checked");
let generatePasswordsBtn = document.getElementById("generate-passwords-btn");
let copyPasswordOneBtn = document.getElementById("copy-password-one-btn");

generatePasswordsBtn.addEventListener('click', function() {
    passwordGenerated = true;
    generatePasswordsBtn.innerHTML = '<i class="fa-solid fa-gears fa-spin"></i>';
    generatePasswordsBtn.disabled = true;

    setTimeout(function() {
        const password = generatePasswords();
        passwordOneEl.textContent = password;

        setTimeout(function() {
            generatePasswordsBtn.innerHTML = "Generate Password";
            generatePasswordsBtn.disabled = false;
            passwordGenerated = false;
        }, 700);
    }, 2000);
});

lengthResult.addEventListener('change', function(e) {
    if (!passwordGenerated) {
        passwordRangeResult.innerText = e.target.value;
        passwordOneEl.textContent = "";
        document.getElementById("copy-password-one-btn").innerHTML = "";
    }
});
copyPasswordOneBtn.addEventListener('click', copyTextOne);
resetBtn.addEventListener('click', resetPasswords);

function renderCopyOneBtn(){
    return ` 
            <button id="copyOne">
                <span class="copy-detail">
                    <i  class="fa-solid fa-copy"></i>
                </span> 
                Click To Copy Password 
            </button>
    `;
    }
function generatePasswords() {
    let result = '';
    passwordLength = lengthResult.value;
     {
        if (numCheckBox.checked && symCheckBox.checked){
            let numElementsFromNumCharsArray = 2;
            let numElementsFromSybmbolCharsArray = 2;
            let numElementsFromAlphaCharsArray = passwordLength - numElementsFromNumCharsArray - numElementsFromSybmbolCharsArray;
              
            for (let i = 0; i < numElementsFromAlphaCharsArray; i++) {
                let index = Math.floor(Math.random() * alphaChars.length);
                if (i < alphaChars.length) {
                    result += alphaChars[index];
                }
            }
            for (let i = 0; i < numElementsFromNumCharsArray; i++) {
                let index = Math.floor(Math.random() * numChars.length);
                if (i < numChars.length) {
                    result += numChars[index];
                }
            }
            for (let i = 0; i < numElementsFromSybmbolCharsArray; i++) {
                let index = Math.floor(Math.random() * sybmbolChars.length);
                if (i < sybmbolChars.length) {
                    result += sybmbolChars[index];
                }
            }
        }
        else if(numCheckBox.checked){
            let numElementsFromNumCharsArray = 2;
            let numElementsFromSybmbolCharsArray = 0;
            let numElementsFromAlphaCharsArray = passwordLength - numElementsFromNumCharsArray - numElementsFromSybmbolCharsArray;
            for (let i = 0; i < numElementsFromAlphaCharsArray; i++) {
                let index = Math.floor(Math.random() * alphaChars.length);
                if (i < alphaChars.length) {
                    result += alphaChars[index];
                }
            }
            for (let i = 0; i < numElementsFromNumCharsArray; i++) {
                let index = Math.floor(Math.random() * numChars.length);
                if (i < numChars.length) {
                    result += numChars[index];
                }
            }
        }
        else if (symCheckBox.checked){
            let numElementsFromNumCharsArray = 0;
            let numElementsFromSybmbolCharsArray = 2;
            let numElementsFromAlphaCharsArray = passwordLength - numElementsFromNumCharsArray - numElementsFromSybmbolCharsArray;
            for (let i = 0; i < numElementsFromAlphaCharsArray; i++) {
                let index = Math.floor(Math.random() * alphaChars.length);
                if (i < alphaChars.length) {
                    result += alphaChars[index];
                }
            }
            for (let i = 0; i < numElementsFromSybmbolCharsArray; i++) {
                let index = Math.floor(Math.random() * sybmbolChars.length);
                if (i < sybmbolChars.length) {
                    result += sybmbolChars[index];
                }
            }
        }
        else {
            let numElementsFromNumCharsArray = 0;
            let numElementsFromSybmbolCharsArray = 0;
            let numElementsFromAlphaCharsArray = passwordLength - numElementsFromNumCharsArray - numElementsFromSybmbolCharsArray;
            for (let i = 0; i < numElementsFromAlphaCharsArray; i++) {
                let index = Math.floor(Math.random() * alphaChars.length);
                if (i < alphaChars.length) {
                    result += alphaChars[index];
                }
            }
        }
        let resultToArray = result.split("");
        let newResult = resultToArray.sort((a, b) => 0.5 - Math.random());
        passwordGenerated = !true;
        document.getElementById("copy-password-one-btn").innerHTML = renderCopyOneBtn();
        return newResult.join("");
    };
};     
async function copyTextOne() {
    if (!passwordGenerated) {
        let copyPasswordOne = document.getElementById("password-one-el").innerHTML;
        document.getElementById("copyOne").classList.add('copied');
        try {
            await navigator.clipboard.writeText(copyPasswordOne);
            alert('Password1 copied to clipboard');
        } catch (err) {
        alert('Failed to copy: ', err);
        }
    }
}
function resetPasswords() {
    passwordGenerated = false;
    passwordOneEl.textContent = "";
    numCheckBox.checked = false;
    symCheckBox.checked = false;
    document.getElementById("copy-password-one-btn").innerHTML = "";
};