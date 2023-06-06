//Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.
function reverseWords(s) {
    const words = s.split(" ");
    
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      const reversedWord = word.split("").reverse().join("");
      words[i] = reversedWord;
    }
    
    return words.join(" ");
  }
  
