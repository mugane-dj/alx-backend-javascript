export default function guardrail(MathFunction) {
  const queue = [];
  const msg = 'Guardrail was processed';

  try {
    const result = MathFunction();
    queue.push(result);
    queue.push(msg);
    return queue;
  } catch (error) {
    queue.push(error);
    queue.push(msg);
    return queue;
  }
}
