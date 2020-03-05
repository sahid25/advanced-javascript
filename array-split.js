const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const part = numbers.slice(2, 6);
const removePart = numbers.splice(2, 6, 20);
// console.log(removePart);
// console.log(numbers);
const together = numbers.join("  ");
console.log(together);