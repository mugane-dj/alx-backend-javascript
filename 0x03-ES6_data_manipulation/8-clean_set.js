export default function cleanSet(set, startString) {
  let outputString = '';
  if (startString) {
    for (const item of set) {
      if (item.startsWith(startString)) {
        const newItem = item.replace(new RegExp(startString, 'g'), '');
        outputString = `${outputString + newItem}-`;
      }
    }
    outputString = outputString.slice(0, -1);
  }
  return outputString;
}
