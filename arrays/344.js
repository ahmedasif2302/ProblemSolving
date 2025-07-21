/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
 let length = s.length -1
  let halfLen = Math.floor(s.length/2)
  for(let i =0; i < halfLen;i++){
    let temp = s[i];
    s[i] = s[length -i];
    s[length -i] = temp
  }
    return s
};

console.log(reverseString(["h", "e", "l", "l", "o"]));
