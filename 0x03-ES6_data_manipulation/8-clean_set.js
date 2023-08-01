export default function cleanSet(set, startString) {
  let outputString = '';
  if (startString.length > 1) {
    for (const item of set) {
      if (item.startsWith(startString)) {
        const newItem = item.replace(new RegExp(startString, 'g'), '');
        outputString = `${outputString + newItem}-`;
      }
    }
  }
  return outputString.slice(0, -1);
}
