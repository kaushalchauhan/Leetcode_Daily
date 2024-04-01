// Problem - 58. Length of Last Word
const lengthOfLastWord = function (s) {
  const wordArray = s.trim().split(" ");
  return wordArray[wordArray.length - 1].length;
};

console.log(lengthOfLastWord("   fly me   to   the moon  ")); // 4
