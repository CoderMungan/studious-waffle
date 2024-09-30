let secAar = ["halil", "mungan", "melih", 5, 6, 7, 8, 9, true, false];
let thirArr = ["Naber", "nasilsin", "nasil gidiyor", 1231, 231, true, false];
let forSlice = [1, 2, "halil", "Mungan"];
// Array'e yeni eleman eklemek icin push metodu kullanilir.

secAar.push("10", 10, true);
console.log(secAar);

// Bir dizinin son elemanini silmek icin pop metodu kullanilir.
secAar.pop();
console.log(secAar);

// Bir dizinin ilk elemanini silmek icin shift metodu kullanilir.
secAar.shift();
console.log(secAar);

// Dizinin basina bir veya daha fazla eleman eklemek icin unshift metodu kullanilir.
secAar.unshift("10", 10, true);
console.log(secAar);

// iki veya daha fazla diziyi birlestirmek icin concat metodu kullanilir. concat turkcede "birlestirmek" demektir.
let combineArr = secAar.concat(thirArr);
console.log(arr);

// Dizinin belli bir kismini kopyalayarak yeni bir dizi dondurur. slice turkcede "kesmek" demektir.
let sliced = forSlice.slice(1, 3);
console.log("sliced: ", sliced);
