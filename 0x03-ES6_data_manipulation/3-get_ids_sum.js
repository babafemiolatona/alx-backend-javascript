const getStudentsByIdSum = (students) => {
  if (!Array.isArray(students)) {
    return 0;
  }

  return students.reduce((accumulator, student) => accumulator + student.id, 0);
};

module.exports = getStudentsByIdSum;
