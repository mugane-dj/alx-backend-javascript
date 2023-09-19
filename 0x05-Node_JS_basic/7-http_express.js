// Read the database file asynchronously and return response data using express server
const fs = require('fs');
const express = require('express');

const app = express();

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

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const path = process.argv[2];
  countStudents(path)
    .then((response) => {
      res.status(200).send(`This is the list of our students\n${response}`);
    })
    .catch((error) => {
      res.status(500).send(`This is the list of our students\n${error.message}`);
    });
});

app.listen(1245);

module.exports = app;
