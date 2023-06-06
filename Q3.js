//Given two non-negative integers, num1 and num2 represented as string, return *the sum of* num1 *and* num2 *as a string*.

function addStrings(num1, num2) {
    let i = num1.length - 1;
    let j = num2.length - 1;
    let carry = 0;
    let result = "";
  
    while (i >= 0 || j >= 0) {
      const digit1 = i >= 0 ? parseInt(num1[i]) : 0;
      const digit2 = j >= 0 ? parseInt(num2[j]) : 0;
      const sum = digit1 + digit2 + carry;
      carry = Math.floor(sum / 10);
      const digitSum = sum % 10;
      result += digitSum;
      i--;
      j--;
    }
  
    if (carry > 0) {
      result += carry;
    }
  
    return result.split("").reverse().join("");
  }
  