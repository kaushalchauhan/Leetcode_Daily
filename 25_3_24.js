// Problem - 442. Find All Duplicates in an Array
const findDuplicates = function (nums) {
  let set = new Set();
  let res = [];
  nums.forEach((item) => {
    if (!set.has(item)) {
      set.add(item);
    } else {
      res.push(item);
    }
  });
  return res;
};
console.log(findDuplicates([2, 3, 4, 2, 3]));
