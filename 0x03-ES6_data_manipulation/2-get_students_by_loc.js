export default function getStudentsByLocation(arr, city) {
  return arr.filter((element) => element.location === city);
}
