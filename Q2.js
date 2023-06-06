//Given a string num which represents an integer, return true *if* num *is a **strobogrammatic number***.
function isStrobogrammaticNumber(num) {
    const digitMap = {
      '0': '0',
      '1': '1',
      '6': '9',
      '8': '8',
      '9': '6',
    };
  
    let left = 0;
    let right = num.length - 1;
  
    while (left <= right) {
      const digitLeft = num[left];
      const digitRight = num[right];
  
      if (!digitMap.hasOwnProperty(digitLeft) || !digitMap.hasOwnProperty(digitRight)) {
        return false;
      }
  
      if (digitMap[digitLeft] !== digitRight || digitMap[digitRight] !== digitLeft) {
        return false;
      }
  
      left++;
      right--;
    }
  
    return true;
  }
  


