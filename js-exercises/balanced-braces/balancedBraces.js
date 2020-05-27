class Stack {
  constructor() {
    this.stack = []
  }

  // Inserts the element into the top of the stack
  push(element) {
    this.stack.push(element)
  }

  // Removes the element from the top of the stack and return that element
  pop() {
    if (this.isEmpty()) throw 'Stack is empty!'
    return this.stack.pop()
  }

  // Return which element is on top of the stack
  peek() {
    if (this.isEmpty()) throw 'Stack is empty'
    return this.stack[this.stack.length - 1]
  }

  // helper method
  isEmpty() {
    return !this.stack.length
  }
}

const BracketPairs = new Map();
BracketPairs.set(")", "(");
BracketPairs.set("}", "{");
BracketPairs.set("]", "[");

function balancedBraces(expression) {
  let BracesStack = new Stack();
  let OpeningBraces = [...BracketPairs.values()];
  try {
    for (let character of expression) {
      if (OpeningBraces.includes(character)) {
        BracesStack.push(character);
      }
      if (BracketPairs.has(character)) {
        if (BracesStack.peek() == BracketPairs.get(character)) {
          BracesStack.pop(character);
        } else {
          return false;
        }
      }
    }
    return BracesStack.isEmpty();
  } catch (error) {
    return false;
  }
}

export {
  balancedBraces,
};
