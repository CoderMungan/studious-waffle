function doSomeThing(number, funcName) {
  return funcName(number);
}

function sum(n) {
  return n + n;
}

function square(n) {
  return n * n;
}

function split(n) {
  return n / 2;
}

console.log(doSomeThing(5, sum)); // 10
console.log(doSomeThing(5, square)); // 25
console.log(doSomeThing(5, split)); // 2.5
