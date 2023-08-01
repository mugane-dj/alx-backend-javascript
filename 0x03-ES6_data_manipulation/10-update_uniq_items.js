export default function updateUniqueItems(map) {
  for (const [item, quantity] of map) {
    if (quantity === 1) {
      try {
        map.set(item, 100);
      } catch (error) {
        throw new Error('Cannot process');
      }
    }
  }
  return map;
}
