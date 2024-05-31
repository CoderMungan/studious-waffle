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
