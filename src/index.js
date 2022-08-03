module.exports = function check(str, bracketsConfig) {
let stack = [];
let openBr = [];
let pairsBr = {};

for (let i = 0; i < bracketsConfig.length; i++) {
  openBr[i] = bracketsConfig[i][0];
  pairsBr[bracketsConfig[i][1]] = openBr[i];
}

for (let i=0; i<str.length; i++) {
  let currentSymbol = str[i];
  let topElement = stack[stack.length - 1];
  if((stack.length === 0) || (topElement !== pairsBr[currentSymbol])) {
    stack.push(currentSymbol);
  } else { 
    stack.pop();
  }
}
return stack.length === 0;
}