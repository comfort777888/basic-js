//chainmaker
//Recursive depth calculator
//Extended repeater
//Vigenere cipher

const chainMaker = {
  chains: [],
  getLength() {
    return this.chains.length;
  },
  addLink(value) {
    if (value === undefined) return this.chains.push("(  )~~");
    this.chains.push(`( ${String(value)} )~~`);
    return this;
  },
  removeLink(position) {
    if (
      !Number.isInteger(position) ||
      typeof position !== "number" ||
      position <= 0 ||
      position >= this.chains.length
    ) {
      this.chains = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.chains.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chains.reverse();
    return this;
  },
  finishChain() {
    let chainString = this.chains.join("");
    this.chains = [];
    return chainString.slice(0, chainString.length - 2);
  },
};

console.log(chainMaker.addLink(1).addLink(2).addLink(3).removeLink(4));
console.log(chainMaker);
