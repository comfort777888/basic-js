const { NotImplementedError } = require("../extensions/index.js");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (typeof sampleActivity !== "string" || sampleActivity === "") {
    return false;
  }
  sampleActivity_num = Number(sampleActivity);
  // if (isNaN(sampleActivity_num)) {
  //   return false;
  // }
  if (isFinite(sampleActivity_num)) {
    if (sampleActivity_num > 15 || sampleActivity_num <= 0) {
      return false;
    }
    let ages = Math.ceil(
      Math.log(MODERN_ACTIVITY / sampleActivity_num) /
        (0.693 / HALF_LIFE_PERIOD)
    );
    return ages;
  } else {
    return false;
  }
}

module.exports = {
  dateSample,
};
