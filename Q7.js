//Given two strings s and t, return true *if they are equal when both are typed into empty text editors*. '#' means a backspace character.
function processString(str) {
    const stack = [];
  
    for (const char of str) {
      if (char !== '#') {
        stack.push(char);
      } else {
        if (stack.length > 0) {
          stack.pop();
        }
      }
    }
  
    return stack.join('');
  }
  
  function backspaceCompare(s, t) {
    const processedS = processString(s);
    const processedT = processString(t);
  
    return processedS === processedT;
  }
  