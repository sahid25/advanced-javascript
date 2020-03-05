function add(num, num2) {
  console.log(...arguments);
  return num + num2 + arguments[2];
}
const result = add(2, 3, 5);
console.log(result);