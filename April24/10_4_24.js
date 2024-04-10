// Problem - 950. Reveal Cards In Increasing Order
const deckRevealedIncreasing = function (deck) {
  // Sort the deck in non-increasing order to get the largest card first
  deck.sort((a, b) => b - a);

  // Initialize a deque structure to simulate the process
  const deque = [];

  // Iterate over the sorted deck
  for (const card of deck) {
    // If the deque is not empty, simulate the revealing process:
    // Move the last element to the front to mimic the card placement in the final deck
    if (deque.length > 0) {
      const lastCard = deque.pop();
      if (lastCard !== undefined) {
        deque.unshift(lastCard);
      }
    }
    // Place the current largest card in the front
    deque.unshift(card);
  }

  // Return the deque which now represents the final deck order
  return deque;
};
