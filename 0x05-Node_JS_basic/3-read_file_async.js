// Read the database file asynchronously and return a promise
const fs = require('fs');
const { promisify } = require('util');

const readFileAsync = promisify(fs.readFile);

function countStudents(path) {
  return readFileAsync(path, 'utf-8')
    .then((data) => {
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

      for (const key of Object.keys(studentDict)) {
        const studentsList = studentDict[key].students.join(', ');
        process.stdout.write(`Number of students in ${key}: ${studentDict[key].count}. List: ${studentsList}\n`);
      }
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
}

module.exports = countStudents;
