// Problem - 2485. Find the Pivot Integer

// Example 1:
// Input: n = 8
// Output: 6
// Explanation: 6 is the pivot integer since: 1 + 2 + 3 + 4 + 5 + 6 = 6 + 7 + 8 = 21.


const pivotInteger = function(n) {
    let totalSum = n * (n + 1 ) / 2;
    let leftSum = 0;

    for(let x = 1; x <= n; x++){
        let rightSum = totalSum - (leftSum + x)
        if(leftSum === rightSum){
            return x; // found pivot
        }
        leftSum += x;
    }
    return -1; // no such pivot integer exists
}
const res = pivotInteger(1)
console.log(res);