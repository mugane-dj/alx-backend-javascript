export default function appendToEachArrayValue(array, appendString) {
  let newArray = [];

  for (const item of array) {
    newArray.push(appendString + item);
  }

  return newArray;
}
