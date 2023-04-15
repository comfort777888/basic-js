//chainmaker
//Recursive depth calculator
//Extended repeater
//Vigenere cipher

class DepthCalculator {
  calculateDepth(arr) {
    //   const res = {};
    //   if (!arr) {
    //     return 1;
    //   }
    //   if (!Array.isArray(arr)) {
    //     return res;
    //   }
    //   for (let i = 0; i < arr.length; i++) {
    //     let count = 0;
    //     if (Array.isArray(arr[i])) {
    //       res = { count: count++ };
    //       return this.calculateDepth(arr[i]);
    //     }
    //   }
    //   return res;
    // }

    let count = 1;
    for (let i = 0; i < arr.length; i++) {
      let currentDepth;
      if (Array.isArray(arr[i])) {
        currentDepth = 1 + this.calculateDepth(arr[i]);
      } else {
        currentDepth = 1;
      }
      if (currentDepth > count) {
        count = currentDepth;
      }
    }
    return count;
  }
}

const depthCalc = new DepthCalculator();

console.log(
  depthCalc.calculateDepth([
    1,
    2,
    3,
    [4, 5, [6, 7, [8, 9], 10, 11], 12],
    13,
    14,
  ])
);
