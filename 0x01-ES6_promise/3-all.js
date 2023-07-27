import * as utilFunctions from './utils';

function handleProfileSignup() {
  const promise = utilFunctions.uploadPhoto();
  const promise1 = utilFunctions.createUser();
  return Promise.all([promise, promise1])
    .then((result) => {
      console.log(result[0].body, result[1].firstName, result[1].lastName);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}

export default handleProfileSignup;
