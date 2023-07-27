import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const array = [19, 20, 34];
  const result = [];
  array.forEach((element) => {
    result.push(new ClassRoom(element));
  });
  return result;
}
