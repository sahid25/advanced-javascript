function stopWatch() {
  let count = 0;
  return function () {
    count++;
    return count;
  }
}

const click1 = stopWatch();
console.log(click1());
console.log(click1());
console.log(click1());
console.log(click1());
const click2 = stopWatch();
console.log(click2());
console.log(click2());
console.log(click2());
console.log(click2());
console.log(click1());