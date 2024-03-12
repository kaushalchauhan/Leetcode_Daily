// Problem - 1171. Remove Zero Sum Consecutive Nodes from Linked List
const removeZeroSumSublists = function(head) {
    // convert linklist to an array
    const array = [];
    let current  = head;
    while(current){
        array.push(current.val);
        current = current.next;
    }
    for(let i=0; i<array.length;i++){
        sum = 0;
        for(let j=i;j<array.length;j++){
            sum+=array[j];
            if(sum===0){
                array.splice(i,j-i+1);
                i--;
                break;
            }
        }
    }
     // Convert array back to linked list
    let dummy = new ListNode(0);
    let currentResult = dummy;
    for (let value of array) {
        currentResult.next = new ListNode(value);
        currentResult = currentResult.next;
    }
    return dummy.next;
};