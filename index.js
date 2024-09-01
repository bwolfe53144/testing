function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
}

function reverseString(str) {
    let newString = [];
    for (let i = str.length; i > 0; i--) {
        newString = newString + str[i-1];
    };
    return newString;
}

const calculator = (function () {
    const add = (a, b) => a + b;
    const sub = (a, b) => a - b;
    const mul = (a, b) => a * b;
    const div = (a, b) => a / b;
    return { add, sub, mul, div };
})();

let caesarString = [];
function caesarCipher(str, key) {
    for (let i = 0; i < str.length;  i++) {
        if( str[i].toUpperCase() !== str[i].toLowerCase() ) {
            letterConvert(str[i],key);
        } else {
            caesarString = caesarString + str[i];
        }
    };
    return caesarString;
  }

function letterConvert(a, b) {
    let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    for (let j = 0; j < alphabet.length;  j++) {
        if (a.toLowerCase() == alphabet[j]) {
            if (a == a.toLowerCase()) {
                caesarString = caesarString + alphabet[(j+b)%26]; 
            } else {
                caesarString = caesarString + alphabet[(j+b)%26].toLocaleUpperCase(); 
            }
        }
    }
}

function analyzeArray(arr) {
    let object = {};
    const average = arr.reduce((total, currentItem) => {
        return total + (currentItem/arr.length);
      }, 0);
    object.average = average;

    let smallNum = arr[0];
    let bigNum = arr[0];
    for (let i = 0; i < arr.length;  i++) {
        if (arr[i] < smallNum) {
            smallNum = arr[i];
        } else if (arr[i] > bigNum) {
            bigNum = arr[i];
        }
    }
    object.max = bigNum;
    object.min = smallNum;
    object.length = arr.length;

    return object

}

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };