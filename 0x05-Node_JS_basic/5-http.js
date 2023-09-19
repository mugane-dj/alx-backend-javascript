// Create a small HTTP server using the http module
// Create a small HTTP server using the http module
const http = require('http');
const fs = require('fs');
const { promisify } = require('util');

const readFileAsync = promisify(fs.readFile);

function countStudents(path) {
  return readFileAsync(path, 'utf-8')
    .then((data) => {
      let response = '';
      const studentList = data.split('\n');
      response += `Number of students: ${studentList.length - 1}\n`;
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

      const keys = Object.keys(studentDict);
      for (let i = 0; i < keys.length; i += 1) {
        const key = keys[i];
        const studentsList = studentDict[key].students.join(', ');
        response += `Number of students in ${key}: ${studentDict[key].count}. List: ${studentsList}`;
        if (i < keys.length - 1) {
          response += '\n';
        }
      }
      return response;
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
}

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  } else if (req.url === '/students') {
    const path = process.argv[2];
    countStudents(path)
      .then((response) => {
        res.write('This is the list of our students\n');
        res.end(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }
}).listen(1245);

module.exports = app;
