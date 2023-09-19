// Read from database file
import fs from 'fs'

const readDatabase = (path) => new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
        if (err) reject(new Error('Cannot load the database'));
        if (data) {
            const studentList = data.split('\n');
            const studentDict = {};
            for (let i = 1; i < studentList.length; i += 1) {
              const values = studentList[i].split(',');
              const field = values[3];
              const firstName = values[0];
      
              if (field === 'SWE' || field === 'CS') {
                if (!studentDict[field]) {
                  studentDict[field] = {
                    students: [],
                    count: 0
                  };
                }
      
                studentDict[field].students.push(firstName);
                studentDict[field].count += 1;
              }
            }
            resolve(studentDict);        
        }
    });    
});

export default readDatabase;