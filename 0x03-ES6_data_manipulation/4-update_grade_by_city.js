export default function updateStudentGradeByCity(studentsList, city, newGrades) {
  return studentsList
    .filter((student) => student.location === city)
    .map((student) => {
      const newGrade = newGrades.filter((studentGrade) => studentGrade.studentId === student.id)[0];
      return { ...student, grade: (newGrade ? newGrade.grade : 'N/A') };
    });
}
