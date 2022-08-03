module.exports = function check(str, bracketsConfig) {
let storage = [];
let storage1 = [];
const OPEN_BRACKETS = ['(','{','[','|','1','3','5','7','8'];
const BRACKET_PAIRS = {
  ')': '(',
  '}': '{',
  ']': '[',
  '|': '|',
  '2': '1',
  '4': '3',
  '6': '5',
  '7': '7',
  '8': '8',
};

for (let i=0; i<str.length; i++) {
  let currentSymbol = str[i];
  if(OPEN_BRACKETS.includes(currentSymbol)) {
    storage.push(currentSymbol);
    if((currentSymbol === '|') || (currentSymbol === '7') || (currentSymbol === '8')) storage1.push(currentSymbol);
  } else {
    if(storage.length === 0) {
      return false;
    } else {
    let g = storage.length-1;
    let j = g;
    let topElements = storage[j];    
    while((topElements === '|') || (topElements === '7') || (topElements === '8')) {
      j--;
      topElements = storage[j]
    } if((g-j) % 2) {
      return false }
      { if(topElements === BRACKET_PAIRS[currentSymbol]) {storage.splice(j, 1)} else {return false}
    }
  }}
  }
  let filteredStorage = storage.filter(element => element !== '|').filter(element => element !== '7').filter(element => element !== '8');
return  `storage=${storage}=storage1=${storage1}=filteredStorage=${filteredStorage}=`/* (filteredStorage.length === 0) && (storage1.length % 2 === 0); */
}