const alphaChars = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const numChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const sybmbolChars = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
    "/"];
let passwordGenerated = false;
let passwordLength = 15;
let passwordOneEl = document.getElementById("password-one-el");
let passwordTwoEl = document.getElementById("password-two-el");
let resetBtn = document.getElementById("reset-btn");
let lengthResult = document.querySelector("length");
let passwordRangeResult = document.querySelector("password-range-result");
let numCharsChecked = document.getElementById("numChars-checked");
let symbolCharsChecked = document.getElementById("symbolChars-checked")

let generatePasswordsBtn = document.getElementById("generate-passwords-btn");
generatePasswordsBtn.addEventListener('click', generatePasswords);

lengthResult.addEventListener('change', (e) => {
    passwordRangeResult.innerText = e.target.value;
    passwordGenerated = false;
    passwordOneEl.textContent = "";
    passwordTwoEl.textContent = "";
    });
resetBtn.addEventListener('click', resetPasswords);

function renderCopyOneBtn(){
    return ` 
        <div id="copy-password-one-btn">
            <button>
                <span class="copy-detail">
                    <i class="fa-solid fa-copy"></i>
                </span> 
                Copy Password 1 
            </button>
        </div>
    `;
    }
function renderCopyTwoBtn(){
    return ` 
        <div id="copy-password-two-btn">
            <button>
                <span class="copy-detail">
                    <i class="fa-solid fa-copy"></i>
                </span> 
                Copy Password 2 
            </button>
        </div>
    `;
    }

function generatePasswords() {
    passwordLength = lengthResult.value;
    if (passwordGenerated === false) {
        for (let i = 0; i < passwordLength; i ++) {
            let index = Math.floor(Math.random() * alphaChars.length)
            passwordOneEl.textContent += alphaChars[index]
        }
        for (let j = 0; j < passwordLength; j ++) {
            let index = Math.floor(Math.random() * alphaChars.length)
            passwordTwoEl.textContent += alphaChars[index]
        }
        passwordGenerated = true;
        document.getElementById("copy-password-one-btn").innerHTML = renderCopyOneBtn();
        document.getElementById("copy-password-two-btn").innerHTML = renderCopyTwoBtn();
    }   
}

let copyPasswordOneBtn = document.getElementById("copyPasswordOne");
copyPasswordOneBtn.addEventListener('click', copyTextOne);

async function copyTextOne() {
    // let copiedTextOneClass = '';
    if (passwordGenerated) {
        let copyPasswordOne = document.getElementById("password-one-el").innerHTML;
        // copiedTextOneClass = 'copied'
        try {
            await navigator.clipboard.writeText(copyPasswordOne);
            alert('Password1 copied to clipboard');
        } catch (err) {
        alert('Failed to copy: ', err);
        }
    } 
}
let copyPasswordTwoBtn = document.getElementById("copy-password-two-btn");
copyPasswordTwoBtn.addEventListener('click', copyTextTwo);

async function copyTextTwo() {
    // let copiedTextTwoClass = '';
    if (passwordGenerated) {
        let copyPasswordTwo = document.getElementById("password-two-el").innerHTML;
        // let copiedTextTwoClass = 'copied';
        try {
            await navigator.clipboard.writeText(copyPasswordTwo);
            alert('Password2 copied to clipboard');
        } catch (err) {
            alert('Failed to copy: ', err);
        }
    }
}

function resetPasswords() {
    passwordGenerated = false;
    passwordOneEl.textContent = "";
    passwordTwoEl.textContent = "";
    numCharsChecked.checked = false;
    symbolCharsChecked.checked = false; 
};