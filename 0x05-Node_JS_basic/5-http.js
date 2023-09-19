// Create a small HTTP server using the http module
const http = require('http');
const fs = require('fs');

const PORT = 1245;
const HOST = 'localhost';

const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf-8', (err, data) => {
    if (err) reject(new Error('Cannot load the database'));
    if (data) {
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
      resolve(response);
    }
  });
});

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  } else if (req.url === '/students') {
    const path = process.argv[2];
    countStudents(path)
      .then((response) => {
        res.write('This is the list of our students\n');
        res.write(response);
        res.end();
      })
      .catch((error) => {
        console.log(error);
        res.end();
      });
  }
});

app.listen(HOST, PORT, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
});

module.exports = app;
