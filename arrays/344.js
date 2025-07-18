/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  let c = s.length - 1;
  for (let i = 0; i < s.length; i++) {
    s[i] = s[c];
    c--;
  }

  return s;
};

console.log(reverseString(["h", "e", "l", "l", "o"]));
