//Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.

function reverseString(s, k) {
    const chars = s.split("");
  
    for (let i = 0; i < chars.length; i += 2 * k) {
      const start = i;
      const end = Math.min(i + k - 1, chars.length - 1);
  
      while (start < end) {
        const temp = chars[start];
        chars[start] = chars[end];
        chars[end] = temp;
        start++;
        end--;
      }
    }
  
    return chars.join("");
  }
  