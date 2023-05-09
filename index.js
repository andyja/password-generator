const alphaChars = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const numChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const sybmbolChars = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
    "/"];
let passwordGenerated = false;
let passwordOneEl = document.getElementById("password-one-el");
// let passwordTwoEl = document.getElementById("password-two-el");
let resetBtn = document.getElementById("reset-btn");
let lengthResult = document.querySelector("#length");
let passwordRangeResult = document.querySelector("#password-range-result");
let numCheckBox = document.getElementById("numChars-checked");
let symCheckBox = document.getElementById("symbolChars-checked");
let generatePasswordsBtn = document.getElementById("generate-passwords-btn");
generatePasswordsBtn.addEventListener('click', generatePasswords);

lengthResult.addEventListener('change', (e) => {
    passwordRangeResult.innerText = e.target.value;
    passwordGenerated = false;
    passwordOneEl.textContent = "";
    // passwordTwoEl.textContent = "";
    });
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
// function renderCopyTwoBtn(){
//     return ` 
//             <button>
//                 <span class="copy-detail">
//                     <i id="copyTwo" class="fa-solid fa-copy"></i>
//                 </span> 
//                 Copy Password 2 
//             </button>
//     `;
//     }
function generatePasswords() {
    passwordLength = lengthResult.value;
    if (passwordGenerated === false) {
        if (numCheckBox.checked && symCheckBox.checked){
            let numElementsFromNumCharsArray = 2;
            let numElementsFromSybmbolCharsArray = 2;
            let numElementsFromAlphaCharsArray = passwordLength - numElementsFromNumCharsArray - numElementsFromSybmbolCharsArray;
            let result = '';    
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
            passwordOneEl.textContent = result;
        }
        else if(numCheckBox.checked){
            let numElementsFromNumCharsArray = 2;
            let numElementsFromSybmbolCharsArray = 0;
            let numElementsFromAlphaCharsArray = passwordLength - numElementsFromNumCharsArray - numElementsFromSybmbolCharsArray;
            let result = '';
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
            passwordOneEl.textContent = result;
        }
        else if (symCheckBox.checked){
            let numElementsFromNumCharsArray = 0;
            let numElementsFromSybmbolCharsArray = 2;
            let numElementsFromAlphaCharsArray = passwordLength - numElementsFromNumCharsArray - numElementsFromSybmbolCharsArray;
            let result = '';
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
            passwordOneEl.textContent = result;
        }
        else {
            let numElementsFromNumCharsArray = 0;
            let numElementsFromSybmbolCharsArray = 0;
            let numElementsFromAlphaCharsArray = passwordLength - numElementsFromNumCharsArray - numElementsFromSybmbolCharsArray;
            let result = '';
            for (let i = 0; i < numElementsFromAlphaCharsArray; i++) {
                let index = Math.floor(Math.random() * alphaChars.length);
                if (i < alphaChars.length) {
                    result += alphaChars[index];
                }
            }
            passwordOneEl.textContent = result;
        };

        // for (let j = 0; j < passwordLength; j ++) {
        //     let index = Math.floor(Math.random() * alphaChars.length)
        //     passwordTwoEl.textContent += alphaChars[index]
        // }
        passwordGenerated = !true;
        document.getElementById("copy-password-one-btn").innerHTML = renderCopyOneBtn();
        // document.getElementById("copy-password-two-btn").innerHTML = renderCopyTwoBtn();
    };
};     

let copyPasswordOneBtn = document.getElementById("copy-password-one-btn");
// copyPasswordOneBtn.addEventListener('click', function(){
//     console.log("clicked")
// });

copyPasswordOneBtn.addEventListener('click', copyTextOne);

async function copyTextOne() {
    if (!passwordGenerated) {
        let copyPasswordOne = document.getElementById("password-one-el").innerHTML;
        document.getElementById("copyOne").classList.add('copied');
        // document.getElementById("copyTwo").classList.remove('copied');
        try {
            await navigator.clipboard.writeText(copyPasswordOne);
            alert('Password1 copied to clipboard');
        } catch (err) {
        alert('Failed to copy: ', err);
        }
    }
}

// let copyPasswordTwoBtn = document.getElementById("copy-password-two-btn");
// copyPasswordTwoBtn.addEventListener('click', copyTextTwo);

// async function copyTextTwo() {
//     if (passwordGenerated) {
//         let copyPasswordTwo = document.getElementById("password-two-el").innerHTML;
//         document.getElementById("copyTwo").classList.add('copied');
//         document.getElementById("copyOne").classList.remove('copied');
//         try {
//             await navigator.clipboard.writeText(copyPasswordTwo);
//             alert('Password2 copied to clipboard');
//         } catch (err) {
//             alert('Failed to copy: ', err);
//         }
//     }
// }
function resetPasswords() {
    passwordGenerated = false;
    passwordOneEl.textContent = "";
    // passwordTwoEl.textContent = "";
    numCheckBox.checked = false;
    symCheckBox.checked = false;
    document.getElementById("copy-password-one-btn").innerHTML = "";
    // document.getElementById("copy-password-two-btn").innerHTML = "";
};