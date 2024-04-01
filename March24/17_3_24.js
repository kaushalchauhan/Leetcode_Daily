// Problem - 57. Insert Interval
const insert = function (intervals, newInterval) {
  let result = [];
  let i = 0;

  // Add all intervals before newInterval
  while (i < intervals.length && intervals[i][1] < newInterval[0]) {
    result.push(intervals[i]);
    i++;
  }

  // Merge overlapping intervals
  while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
    newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
    newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
    i++;
  }

  // Add merged newInterval
  result.push(newInterval);

  // Add remaining intervals after newInterval
  while (i < intervals.length) {
    result.push(intervals[i]);
    i++;
  }

  return result;
};
