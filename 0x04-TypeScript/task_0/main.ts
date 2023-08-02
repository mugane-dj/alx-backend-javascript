const { JSDOM  }= require('jsdom');

interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const studentsList: Array<Student> = [
    {
        firstName: "Derrick",
        lastName: "Roy",
        age: 24,
        location: "California"
    },
    {
        firstName: "Deven",
        lastName: "O'neil",
        age: 24,
        location: "Quebec"
    }

];

function renderTable() {
    const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>');
    const document = dom.window.document;

    const table = document.createElement("table");
    const tableBody = document.createElement("tbody");

    for (const student of studentsList) {
        const row = document.createElement("tr");
        const firstName = document.createElement("td");
        const location = document.createElement("td");

        firstName.textContent = student.firstName;
        location.textContent = student.location;

        row.appendChild(firstName);
        row.appendChild(location);
        tableBody.appendChild(row);
    }
    table.appendChild(tableBody);
    document.body.appendChild(table);

    console.log(document.body.innerHTML);
}

renderTable();