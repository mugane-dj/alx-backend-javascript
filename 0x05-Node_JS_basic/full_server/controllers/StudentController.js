// Student controller
import readDatabase from "../utils.js";

class StudentsController {

    static getAllStudents(request, response) {
        const path = process.argv[2];
        readDatabase(path)
        .then((studentDict) => {
            let data = 'This is the list of our students\n';
            const keys = Object.keys(studentDict);
            for (let i = 0; i < keys.length; i += 1) {
              const key = keys[i];
              const studentsList = studentDict[key].students.join(', ');
              data += `Number of students in ${key}: ${studentDict[key].count}. List: ${studentsList}`;
              if (i < keys.length - 1) {
                data += '\n';
              }
            }
            response.status(200).send(data);
        })
        .catch((error) => {
            response.status(500).send(error.message)
        })
    }

    static getAllStudentsByMajor(request, response) {
        if (request.params.major !== 'CS' || request.params.major !== 'SWE') {
            response.status(500).send('Major parameter must be CS or SWE');
        }
        const path = process.argv[2];
        readDatabase(path)
        .then((studentDict) => {
            let data = 'This is the list of our students\n';
            const keys = Object.keys(studentDict);
            for (let i = 0; i < keys.length; i += 1) {
              const key = keys[i];
              const studentsList = studentDict[key].students.join(', ');
              data += `List: ${studentsList}`;
              if (i < keys.length - 1) {
                data += '\n';
              }
            }
            response.status(200).send(data);
        })
        .catch((error) => {
            response.status(500).send(error.message)
        })
    }
}

export default StudentsController;