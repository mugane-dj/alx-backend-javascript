export default function handleResponseFromAPI(promise) {
  promise.then(() => {
    return { status: 200, body: 'Success' };
  });
  promise.catch(() => {
    return new Error();
  });
  promise.finally(() => {
    console.log('Got a response from the API');
  });
}
