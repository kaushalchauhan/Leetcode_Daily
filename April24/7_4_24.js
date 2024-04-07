// Problem - 678. Valid Parenthesis String
const checkValidString = function (s) {
  let minOpen = 0; // Minimum possible count of open parentheses
  let maxOpen = 0; // Maximum possible count of open parentheses

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      minOpen++;
      maxOpen++;
    } else if (s[i] === ")") {
      minOpen = Math.max(minOpen - 1, 0); // Decrease minOpen if ')' encountered
      maxOpen--; // Decrease maxOpen for ')' encountered
      if (maxOpen < 0) return false; // More ')' than '(' and '*' combined
    } else if (s[i] === "*") {
      minOpen = Math.max(minOpen - 1, 0); // Treat '*' as empty string or '('
      maxOpen++; // Treat '*' as empty string or ')'
    }
  }

  return minOpen === 0; // If minOpen is 0, all '(' are matched by either ')' or '*'
};
