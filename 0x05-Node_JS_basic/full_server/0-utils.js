import readDatabase from "./utils.js";

readDatabase("database.csv")
.then((response) => {
    console.log(response);
})
.catch((error) => {
    console.error(error);
});
