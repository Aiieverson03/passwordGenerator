// selectors
const inputs = Array.from(document.querySelectorAll('input'));
console.log(inputs);
const button = document.querySelector('button');
const checkboxes = [...document.querySelectorAll('input[type="checkbox"]')];
console.log(checkboxes)
let passwordLength = inputs[1].value;



//tableau de caractères pour mdp 

const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numberChars = '0123456789';
const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';
let allChars = [];

inputs[1].addEventListener('input', function(e) {
    passwordLength = e.target.value;
});
    
inputs[2].addEventListener('click', function(e) {
    e.target.checked ? allChars.push(lowercaseChars):  allChars = allChars.filter(char => char !== lowercaseChars);
    console.log(allChars);
});

inputs[3].addEventListener('click', function(e) {
    e.target.checked ? allChars.push(uppercaseChars):  allChars = allChars.filter(char => char !== uppercaseChars);
    console.log(allChars);
});

inputs[4].addEventListener('click', function(e) {
    e.target.checked ? allChars.push(numberChars):  allChars = allChars.filter(char => char !== numberChars);
    console.log(allChars);
})
inputs[5].addEventListener('click', function(e) {
    e.target.checked ? allChars.push(specialChars):  allChars = allChars.filter(char => char !== specialChars);
    console.log(allChars);
})




function getRandomInt(max) {
    const array = new Uint32Array(1);
    window.crypto.getRandomValues(array);
    return array[0] % max;
  }

  const randomIndex = getRandomInt(allChars.length);
  console.log(allChars.length)
//   console.log(randomIndex);


    inputs[1].addEventListener('input', function(e) {
        // console.log(e.target.value);
        passwordLength = e.target.value;
    });

    button.addEventListener('click', function() {
        console.log(passwordLength);
    });
        
        function generatePassword(length) {
            let charsConcats = [];
            allChars.forEach(char => {
                allChars.forEach(string => {
                    let test = string.split('');
                    charsConcats.push(...test);
                })
            })
            
}