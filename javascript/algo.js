// Palindrome algoritm
function isPalindrome(str) {
  let reversed = str.split("").reverse().join("");
  return str == reversed;
}
// Fibonacci
function fibonacci(n) {
  let fib = [0, 1];
  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

// Factorial
function factorial(n) {
  if (n <= 0) {
    return 1;
  } else if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

// Anagram
function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  return str1.split("").sort().join("") === str2.split("").sort().join("");
}

// PositiveNumberSum
function positiveNumberSum(arr) {
  return arr.filter((x) => x > 0).reduce((a, b) => a + b, 0);
}

// isPrime
function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i < Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

console.log("is Prime ?", isPrime(6));
