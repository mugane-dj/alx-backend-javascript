// Read the database file synchronously
const fs = require('fs');

const countStudents = (path) => {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    const studentList = data.split('\n');
    console.log(`Number of students: ${studentList.length - 1}`);
    const studentDict = {};
    for (let i = 1; i < studentList.length; i += 1) {
      const values = studentList[i].split(',');
      const field = values[3];
      const firstName = values[0];

      if (field === 'SWE' || field === 'CS') {
        if (!studentDict[field]) {
          studentDict[field] = {
            students: [],
            count: 0,
          };
        }

        studentDict[field].students.push(firstName);
        studentDict[field].count += 1;
      }
    }
    let output = '';
    const keys = Object.keys(studentDict);
    for (let i = 0; i < keys.length; i += 1) {
      const key = keys[i];
      const studentsList = studentDict[key].students.join(', ');
      output += `Number of students in ${key}: ${studentDict[key].count}. List: ${studentsList}`;
      if (i < keys.length - 1) {
        output += '\n';
      }
    }
    console.log(output);
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};
module.exports = countStudents;
