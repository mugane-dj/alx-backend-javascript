export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;

      if (success) {
        resolve({ message: 'Success!' });
      } else {
        reject(new Error('Failure!'));
      }
    }, 1000);
  });
}
