// Problem - 2073. Time Needed to Buy Tickets
const timeRequiredToBuy = function (tickets, k) {
  let count = 0;
  for (let i = 0; i < tickets.length; i++) {
    if (i <= k) {
      count += Math.min(tickets[i], tickets[k]);
    } else {
      count += Math.min(tickets[k] - 1, tickets[i]);
    }
  }
  return count;
};
