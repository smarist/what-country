export function objectToArray(val) {
  const obj = val;
  return Object.entries(obj);
}

let timeoutId;

export function debounceHandler(func, delay) {
  if (timeoutId) clearTimeout(timeoutId);
  timeoutId = setTimeout(func, delay);
}
