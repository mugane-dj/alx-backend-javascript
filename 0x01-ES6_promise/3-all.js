import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const promise = uploadPhoto();
  const promise1 = createUser();
  return Promise.all([promise, promise1])
    .then((result) => {
      console.log(result[0].body, result[1].firstName, result[1].lastName);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
