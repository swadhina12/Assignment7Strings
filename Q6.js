//Given two strings s and goal, return true *if and only if* s *can become* goal *after some number of **shifts** on* s.

function rotateString(s, goal) {
    if (s.length !== goal.length) {
      return false;
    }
  
    const concatenated = s + s;
  
    return concatenated.includes(goal);
  }
  