// Problem - 349. Intersection of Two Arrays

const intersection = function (nums1, nums2) {
  nums1 = new Set(nums1);
  return nums2.filter((num) => nums1.delete(num));
};
