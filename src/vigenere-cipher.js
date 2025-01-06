const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');
    return this.processText(message, key, true);
  }

  decrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');
    return this.processText(message, key, false);
  }

  processText(message, key, isEncrypt) {
    message = message.toUpperCase();
    key = key.toUpperCase();

    let result = '';
    let keyIndex = 0;

    for (let i = 0; i < message.length; i++) {
      const char = message[i];

      if (/[A-Z]/.test(char)) {
        const messageCode = char.charCodeAt(0) - 65;
        const keyCode = key[keyIndex % key.length].charCodeAt(0) - 65;

        let resultCode;
        if (isEncrypt) {
          resultCode = (messageCode + keyCode) % 26;
        } else {
          resultCode = (messageCode - keyCode + 26) % 26;
        }

        result += String.fromCharCode(resultCode + 65);
        keyIndex++;
      } else {
        result += char;
      }
    }

    return this.isDirect ? result : result.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine,
};
