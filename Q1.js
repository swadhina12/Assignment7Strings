//Given two strings s and t, determine if they are isomorphic.
function isomorphicStrings(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const sToT = new Map();
  const tToS = new Map();

  for (let i = 0; i < s.length; i++) {
    const charS = s[i];
    const charT = t[i];

    if (!sToT.has(charS) && !tToS.has(charT)) {
      sToT.set(charS, charT);
      tToS.set(charT, charS);
    } else if (sToT.get(charS) !== charT || tToS.get(charT) !== charS) {
      return false;
    }
  }

  return true;
}
