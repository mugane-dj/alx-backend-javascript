import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const promise = signUpUser(firstName, lastName);
  const promise1 = uploadPhoto(fileName);

  return Promise.allSettled([promise, promise1])
    .then((results) => {
      const output = [];
      results.forEach((result) => {
        output.push({
          status: result.status,
          value: result.value,
        });
      });
      return output;
    });
}
