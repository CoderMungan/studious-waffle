// factorial
function factorial(n) {
  if (n <= 0) {
    return 1;
  }

  return n * factorial(n - 1);
}

console.log("Sonuc:", factorial(5));

// fibonacci
function fibonacci(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];

  let sequence = [0, 1];

  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }

  return sequence;
}

console.log("Sonuc:", fibonacci(50));

// array sum
function arraySum(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    console.log("Gelen Deger:", arr[i]);
    sum += arr[i];
  }
  console.log("Toplam:", sum);
}

arraySum([3, 4, 5, 6]);

// isPrime
function isPrime(n) {
  if (n <= 1) return false;

  for (let i = 2; i < n; i++) {
    console.log("Gelen Deger:", i);
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

console.log("Sonuc:", isPrime(5));
console.log("Sonuc:", isPrime(6));
