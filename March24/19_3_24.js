// Problem - 621. Task Scheduler
const leastInterval = function (tasks, n) {
  // Create a map to store the frequency of each task
  const taskFreq = new Map();
  for (const task of tasks) {
    taskFreq.set(task, (taskFreq.get(task) || 0) + 1);
  }

  // Sort tasks by frequency in descending order
  const sortedTasks = [...taskFreq.values()].sort((a, b) => b - a);

  // Get the maximum frequency (most frequent task)
  const maxFreq = sortedTasks[0];

  // Count the number of tasks that have the same maximum frequency
  let sameFreqCount = 1;
  for (let i = 1; i < sortedTasks.length; i++) {
    if (sortedTasks[i] === maxFreq) {
      sameFreqCount++;
    } else {
      break;
    }
  }

  // Calculate the minimum number of intervals required
  const minIntervals = (maxFreq - 1) * (n + 1) + sameFreqCount;

  // Return the greater of the minimum intervals and the total number of tasks
  return Math.max(minIntervals, tasks.length);
};
