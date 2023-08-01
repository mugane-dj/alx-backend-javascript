export default function updateUniqueItems(map) {
  if (map instanceof Map) {
    for (const [item, quantity] of map) {
      if (quantity === 1) {
        map.set(item, 100);
      }
    }
  } else {
    throw new Error('Cannot process');
  }
  return map;
}
