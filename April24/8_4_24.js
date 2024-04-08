// Problem - 1700. Number of Students Unable to Eat Lunch
const countStudents = function (students, sandwiches) {
  let unableToEat = 0;

  while (students.length > 0 && unableToEat < students.length) {
    if (sandwiches[0] === students[0]) {
      sandwiches.shift();
      students.shift();
      unableToEat = 0;
    } else {
      let shiftStudent = students.shift();
      students.push(shiftStudent);
      unableToEat++;
    }
  }

  return unableToEat;
};
