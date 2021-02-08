module.exports = function check(str, bracketsConfig) {
  let brackets = bracketsConfig.map(item => item.join(''))
  
  for(let i = 0; i < brackets.length; i++){
    if(str.includes(brackets[i])){
      str = str.replace(brackets[i], '');
      i -= 3;
    }
  }
  
  return str.length == 0;
}  
