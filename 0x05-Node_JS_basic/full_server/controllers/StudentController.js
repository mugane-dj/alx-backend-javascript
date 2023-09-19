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
        const VALID_MAJORS = ['CS', 'SWE']
        const { major } = request.params;

        if (!VALID_MAJORS.includes(major)) {
            response.status(500).send('Major parameter must be CS or SWE');
            return;
        }
        const path = process.argv[2];
        readDatabase(path)
        .then((studentDict) => {
            let data = '';
            const keys = Object.keys(studentDict);
            if (keys.includes(major)) {
                data += `List: ${studentDict[major].students.join(', ')}`;
            }
            response.status(200).send(data);
        })
        .catch((error) => {
            response.status(500).send(error.message)
        })
    }
}

export default StudentsController;