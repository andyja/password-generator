const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let passwordGenerated = false;
let passwordLength = 15;
let passwordOneEl = document.getElementById("password-one-el");
let passwordTwoEl = document.getElementById("password-two-el");

function generatePasswords() {
    if (passwordGenerated === false) {

    for (let i = 0; i < passwordLength; i ++) {
        let index = Math.floor(Math.random() * characters.length)
        passwordOneEl.textContent += characters[index]
    }
    for (let j = 0; j < passwordLength; j ++) {
        let index = Math.floor(Math.random() * characters.length)
        passwordTwoEl.textContent += characters[index]
    }
    passwordGenerated = true;
}
}
async function copyTextOne() {
    if (passwordGenerated) {
        let copyPasswordOne = document.getElementById("password-one-el").innerHTML;
        try {
            await navigator.clipboard.writeText(copyPasswordOne);
            alert('Password1 copied to clipboard');
        } catch (err) {
        alert('Failed to copy: ', err);
        }
    } 
}
async function copyTextTwo() {
    if (passwordGenerated) {
        let copyPasswordTwo = document.getElementById("password-two-el").innerHTML;
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
}