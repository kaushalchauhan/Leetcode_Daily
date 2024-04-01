// Problem - 791. Custom Sort String
const  customSortString = function(order, s) {
    function customSort(char1,char2){
        const order1 = order.indexOf(char1);
        const order2 = order.indexOf(char2);
        return order1 - order2;
    }
    const res = s.split("").sort(customSort).join("")
    return res;
}
console.log(customSortString("cba","abcd"));
