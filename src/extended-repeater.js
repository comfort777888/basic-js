const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (typeof str !== "string") {
    str = String(str);
  }
  let separator = options.separator || "+";
  let repeatTimes = options.repeatTimes || 1;
  let addition = options.addition !== undefined ? String(options.addition) : "";
  let additionRepeatTimes = options.additionRepeatTimes || 1;
  let additionSeparator = options.additionSeparator || "|";
  let res = "";
  if (addition !== "") {
    res =
      (addition + additionSeparator).repeat(additionRepeatTimes - 1) + addition;
  }
  return (str + res + separator).repeat(repeatTimes - 1) + (str + res);
}

module.exports = {
  repeater,
};
