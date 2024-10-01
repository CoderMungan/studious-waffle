let secAar = ["halil", "mungan", "melih", 5, 6, 7, 8, 9, true, false];
let thirArr = ["Naber", "nasilsin", "nasil gidiyor", 1231, 231, true, false];
let forSlice = [1, 2, "halil", "Mungan"];
let forSplice = [1, 2, "Melih", "Ciray", 25, 35, true, false];
let forJoin = ["Halo", "Melo", "Mungo", "Ciro"];
let numArr = [1, 2, 3, 4, 5, 6];
let emptyArr = [];
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
let moreCombineArr = secAar.concat(thirArr, forSlice);
console.log("combined array :", combineArr);
console.log("birden fazla birlestirme :", moreCombineArr);

// Dizinin belli bir kismini kopyalayarak yeni bir dizi dondurur. slice turkcede "kesmek" demektir.
// Aralik verilince son index numarasini dahil etmez!
let sliced = forSlice.slice(0, 3);
console.log("sliced :", sliced);

// Diziden eleman ekler veya siler. Orjinal diziyi degistirir.
// Copy veride ekleme gozukmuyor. Ayrica cikarma yaptiktan sonra , ile eklenecek elemani koyabilirsin.
// .splice("cikarilacak baslangic index","son index araligi","eklenecek eleman")
let spliced = forSplice.splice(3, 3, "Halil");
console.log("spliced :", spliced);

// Dizinin elemanlarini birlestirip, tek bir string dondurur.
console.log("join icin :", forJoin.join(" "));

// Dizinin elemanlarini ters cevirir.
console.log("reverse icin :", forJoin.reverse());

// Diziyi siralar.
console.log("Siralama :", forJoin.sort());

// forEach() Dizinin elemanlarini donguye alir ve islem yapar.
numArr.forEach((num) => {
  emptyArr.push(num * 2);
  console.log("bos array :", emptyArr);
  console.log("forEachsonuc :", num * 2);
});

let forEachNewArr = numArr.forEach((num) => {
  return num * 2;
});
console.log("foreachnewArr :", forEachNewArr); //undefined doner cunku bir diziye cevirmez!

// map() Dizinin elemanlarini yeni bir diziye donusturur. Dizinin elemanlarini dondurur.
let newArrMap = numArr.map((num) => num * 2);
console.log("map :", newArrMap);

// filter() Dizinin elemanlarini filtreler. Bir dizi dondurur
let filter = numArr.filter((filt) => filt > 3);
console.log("filter :", filter);

// reduce() dizi elemanlarini bir degere indirger.
// reduce() iki tane parametre alir.
// 1.Parametre: acc yani Accumulator, biriktirici!
// 2.Parametre: el yani Element, eleman!
// 1. Parametre islem sonrasi biriktirme yapan yerdir.
let sumReduce = numArr.reduce((acc, el) => acc + el, 0);
console.log("sumReduce :", sumReduce);

// find() kosulu saglayan ilk elemani doner. Orjinal dizi de degistirilmez.
let firstEven = numArr.find((a) => a % 2 === 0);
console.log("find:", firstEven);

// sort() arrayi siralar
let sortbyArr = [1, 4, 5, 6, 3, 2];
let sortbyChar = ["Halil", "Mungan", "Fatmanur", "Cebi"];
let sortArr = sortbyArr.sort((a, b) => a - b);
let sortforChar = sortbyChar.sort((a, b) => a.localeCompare(b));

console.log("sort:", sortArr);
console.log("char sort :", sortforChar); // ["Cebi", "Fatmanur", "Halil", "Mungan]

// every() tum elemanlarin belli kosulu saglanip, saglanmadigini dondurur. True ya da false dondurur.
// orginal arrayi degistirmez.
let everyArr = [1, 2, 3, 4, 5];
let everyTrueArray = [2, 4, 6];
let allEven = everyArr.every((a) => a % 2 === 0); // False
let allTrueEven = everyTrueArray.every((a) => a % 2 === 0); // True
console.log("evet:", allEven);
console.log("evet:", allTrueEven);

// Algoritma reduce olayi.
function sumArrayAlgo(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log("sonuc", sumArrayAlgo([1, 2, 3, 4]));
