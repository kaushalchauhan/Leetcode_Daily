// Problem - 930. Binary Subarrays With Sum

// Example 1:

// Input: nums = [1,0,1,0,1], goal = 2
// Output: 4
// Explanation: The 4 subarrays are bolded and underlined below:
// [1,0,1,0,1]
// [1,0,1,0,1]
// [1,0,1,0,1]
// [1,0,1,0,1]
const numSubarraysWithSum = function(nums, goal) {
    let count = 0;
    for(let i = 0; i < nums.length; i++){
        let sum = 0;
        for(let j = i; j< nums.length; j++){
            sum += nums[j];
            if(sum === goal){
                count ++;
            }
        }
    }
    return count;
}
console.log(numSubarraysWithSum([1, 0, 1, 0, 1], 2)); // Output: 4
console.log(numSubarraysWithSum([0, 0, 0, 0, 0], 0)); // Output: 15