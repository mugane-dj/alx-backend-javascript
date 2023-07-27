export class HolbertonClass {
  constructor(year, location) {
    this._year = year;
    this._location = location;
  }

  get year() {
    return this._year;
  }

  get location() {
    return this._location;
  }
}

export class StudentHolberton {
  constructor(firstName, lastName, holbertonClass) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._holbertonClass = holbertonClass;
  }

  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  get holbertonClass() {
    return this._holbertonClass;
  }

  get fullStudentDescription() {
    return `${this._firstName} ${this._lastName} - ${this._holbertonClass._year} - ${this._holbertonClass._location}`;
  }
}

const class2019 = new HolbertonClass(2019, 'San Francisco');
const class2020 = new HolbertonClass(2020, 'San Francisco');

const listOfStudents = [];

const student1 = new StudentHolberton('Guillaume', 'Salva', class2020);
listOfStudents.push(student1);
const student2 = new StudentHolberton('John', 'Doe', class2020);
listOfStudents.push(student2);
const student3 = new StudentHolberton('Albert', 'Clinton', class2019);
listOfStudents.push(student3);
const student4 = new StudentHolberton('Donald', 'Bush', class2019);
listOfStudents.push(student4);
const student5 = new StudentHolberton('Jason', 'Sandler', class2019);
listOfStudents.push(student5);

export default listOfStudents;
