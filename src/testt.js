function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError("'arr' parameter must be an instance of the Array!");
  }
  let arr2 = Object.values(arr);

  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] === "--discard-next") {
      delete arr2[i + 1];
      arr2.splice(i, 1);
    }
    if (arr2[i] === "--discard-prev" && arr2[i - 1]) {
      delete arr2[i - 1];
      arr2.splice(i, 1);
    } else if (arr2[i] === "--discard-prev" && !arr2[i - 1]) {
      arr2.splice(i, 1);
    }
    if (arr2[i] === "--double-next" && arr2[i + 1]) {
      arr2.splice(i, 1, arr2[i + 1]);
    } else if (arr2[i] === "--double-next" && !arr2[i + 1]) {
      arr2.splice(i, 1);
    }
    if (arr2[i] === "--double-prev" && arr2[i - 1]) {
      arr2.splice(i, 1, arr2[i - 1]);
    } else if (arr2[i] === "--double-prev" && !arr2[i - 1]) {
      arr2.splice(i, 1);
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] === undefined) {
      arr2.splice(i, 1);
    }
  }
  return arr2;
}

console.log(
  transform([1, 2, 3, "--double-next", 1337, "--discard-prev", 4, 5])
);
