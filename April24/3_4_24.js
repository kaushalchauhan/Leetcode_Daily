// Problem - 79. Word Search
const exist = function (board, word) {
  let m = board.length;
  let n = board[0].length;
  const dfs = function (i, j, len) {
    if (len === word.length) return true;
    if (i < 0 || i >= m || j < 0 || j >= n || board[i][j] !== word[len])
      return false;
    board[i][j] = "*"; // mark visited
    let res =
      dfs(i + 1, j, len + 1) ||
      dfs(i - 1, j, len + 1) ||
      dfs(i, j + 1, len + 1) ||
      dfs(i, j - 1, len + 1);
    board[i][j] = word[len]; // restore the original value
    return res;
  };
  let result = false;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      result = dfs(i, j, 0);
      if (result) return true;
    }
  }
  return false;
};
