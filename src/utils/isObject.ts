export function isObject(obj) {
  return obj !== null && typeof obj === 'object' && Object.prototype.toString.call(obj) === '[object Object]';
}
