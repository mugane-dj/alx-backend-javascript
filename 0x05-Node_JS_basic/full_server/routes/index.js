// Routes config
import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentController';

const routes = (app) => {
    app.get('/', AppController);
    app.get('/students', StudentsController.getAllStudents);
    app.get('/students/:major', StudentsController.getAllStudentsByMajor);
}

export default routes;