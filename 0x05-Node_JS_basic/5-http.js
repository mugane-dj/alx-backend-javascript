// Create a small HTTP server using the http module
// Create a small HTTP server using the http module
const http = require('http');
const fs = require('fs');

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  } else if (req.url === '/students') {
    const path = process.argv[2];
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) throw new Error('Cannot load the database');
      const studentList = data.split('\n');
      res.write('This is the list of our students\n');
      res.write(`Number of students: ${studentList.length - 1}\n`);
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
      let response = '';
      const keys = Object.keys(studentDict);
      for (let i = 0; i < keys.length; i += 1) {
        const key = keys[i];
        const studentsList = studentDict[key].students.join(', ');
        response += `Number of students in ${key}: ${studentDict[key].count}. List: ${studentsList}`;
        if (i < keys.length - 1) {
          response += '\n';
        }
      }
      res.end(response);
    });
  }
}).listen(1245);

module.exports = app;
