// selectors
const inputs = Array.from(document.querySelectorAll("input"));
const labelPassword = document.querySelector("#number-of-chars");
const button = document.querySelector("button");
const checkboxes = [...document.querySelectorAll('input[type="checkbox"]')];
const copyButton = document.querySelector(".image-container");
console.log(copyButton);
let passwordLength = inputs[1].value;
console.log(copyButton.getBoundingClientRect().width);


//tableau de caractères pour mdp

const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberChars = "0123456789";
const specialChars = "!@#$%^&*()_+[]{}|;:,.<>?";
let allChars = [];

labelPassword.textContent = `Longueur du mot de passe : ${passwordLength}`;

inputs[1].addEventListener("input", function (e) {
  passwordLength = e.target.value;
    labelPassword.textContent = `Longueur du mot de passe : ${passwordLength}`;
});

inputs[2].addEventListener("click", function (e) {
  e.target.checked
    ? allChars.push(lowercaseChars)
    : (allChars = allChars.filter((char) => char !== lowercaseChars));
  console.log(allChars);
});

inputs[3].addEventListener("click", function (e) {
  e.target.checked
    ? allChars.push(uppercaseChars)
    : (allChars = allChars.filter((char) => char !== uppercaseChars));
  console.log(allChars);
});

inputs[4].addEventListener("click", function (e) {
  e.target.checked
    ? allChars.push(numberChars)
    : (allChars = allChars.filter((char) => char !== numberChars));
  console.log(allChars);
});
inputs[5].addEventListener("click", function (e) {
  e.target.checked
    ? allChars.push(specialChars)
    : (allChars = allChars.filter((char) => char !== specialChars));
  console.log(allChars);
});

function getRandomInt(max) {
  const array = new Uint32Array(1);
  window.crypto.getRandomValues(array);
  return array[0] % max;
}

inputs[1].addEventListener("input", function (e) {
  passwordLength = e.target.value;
});

button.addEventListener("click", function () {
  console.log(passwordLength);
  generatePassword(passwordLength);
});

function generatePassword(maxLength) {
  let charsConcats = [];
  allChars.forEach((char) => {
    let splittedChar = char.split("");

    charsConcats = charsConcats.concat(splittedChar);
  });
  getRandomInt(charsConcats.length);
  let finalPassword = [];

  if (!charsConcats.length) {
    charsConcats = [
      ...lowercaseChars.split(""),
      ...uppercaseChars.split(""),
      ...numberChars.split(""),
      ...specialChars.split(""),
    ];
  }
  for (let i = 0; i < maxLength; i++) {
    let randomIndex = getRandomInt(charsConcats.length);
    // console.log(randomIndex);
    finalPassword.push(charsConcats[randomIndex]);
  }
  console.log(finalPassword);
  inputs[0].value = finalPassword.join("");
}


function showTextBoxNextToButton(e) {
    const textBox = document.createElement("div");
    textBox.style.position = "absolute";
    console.log(e.target.offsetLeft + copyButton.getBoundingClientRect().width);
    textBox.style.left = `${e.target.offsetLeft + copyButton.getBoundingClientRect().width}px`;
    textBox.style.top = `${e.target.offsetTop + copyButton.getBoundingClientRect().height}px`;
    textBox.style.backgroundColor = "lightyellow";
    textBox.style.border = "1px solid black";
    textBox.style.padding = "5px";
    textBox.innerText = "Texte copié!";
    document.body.appendChild(textBox);
    setTimeout(() => {
      textBox.remove();
    }, 1000);
}

async function copyToClipboard(textToCopy){
    try {
        await navigator.clipboard.writeText(textToCopy);
        console.log("texte copié");
        let copiedText = await navigator.clipboard.readText();
        console.log(copiedText);
    

    }catch(error){
        console.error("erreur lors de la copie du texte", error);
    }   

}

copyButton.addEventListener("click", (e)=> {
    copyToClipboard(inputs[0].value);
    showTextBoxNextToButton(e);
    
});
