const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
  '**********': ' ',
};

function decode(expr) {
  let arr = expr.match(/.{1,10}/g);
  let result = [];
  let character = '';

  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    while (element.startsWith('0')) {
      element = element.slice(1);
    }
    codeToMorse(element);
    morseToWord(morseWord, character, result);
  }
  return result.join('');
}

function codeToMorse(element) {
  let codeToMorse = element.match(/.{1,2}/g);
  let morseWordArr = [];
  for (let i = 0; i < codeToMorse.length; i++) {
    let morseCharacter = codeToMorse[i];
    if (morseCharacter === '10') {
      morseCharacter = '.';
      morseWordArr.push(morseCharacter);
    } else if (morseCharacter === '11') {
      morseCharacter = '-';
      morseWordArr.push(morseCharacter);
    } else {
      morseWordArr.push('**');
    }
  }
  morseWord = morseWordArr.join('');
}

function morseToWord(morse, character, result) {
  for (key in MORSE_TABLE) {
    if (key === morse) {
      character = MORSE_TABLE[key];
      result.push(character);
    }
  }
}

module.exports = {
  decode,
};
