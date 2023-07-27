import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const result = [];
  const init = new ClassRoom(19);
  result.push(init);
  const init1 = new ClassRoom(20);
  result.push(init1);
  const init2 = new ClassRoom(34);
  result.push(init2);
  return result;
}
