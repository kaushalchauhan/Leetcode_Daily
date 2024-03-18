// Problem - 452. Minimum Number of Arrows to Burst Balloons
const findMinArrowShots = function (points) {
  if (points.length === 0) return 0;

  // Sort the balloons by their ending points
  points.sort((a, b) => a[1] - b[1]);

  let arrows = 1;
  let end = points[0][1];

  // Iterate through the sorted balloons
  for (let i = 1; i < points.length; i++) {
    const [start, pointEnd] = points[i];

    // If the starting point is greater than or equal to the ending point of the previous balloon, increment the arrow count and update the end point
    if (start > end) {
      arrows++;
      end = pointEnd;
    }
  }

  return arrows;
};
