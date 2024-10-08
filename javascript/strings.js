const name = "Melih";
const surname = "Ciray";
const longName = "Melih Ciray";
const spaceFullname = " Melih Ciray ";

/*
 * GENEL NOTLAR:
 * - Buyuk kucuk harf hassasiyetini her zaman goz onunde bulundur!
 * -
 *
 *
 *
 */

// charAt index numarasina gore harfi sana dondururur.
console.log(name.charAt(2));

// concat `birlestirme` string elemanlari birlestirir.
console.log(name.concat(" ", surname));

// includes belirtilen stringin icinde olup olmadigini kontrol eder ve boolean dondurur.
console.log(longName.includes("Melih")); // True
// yalniz buyuk kucuktur duyarliligi bulunmaktadir o sebepten soturu oncesinde bir logic yapilmalidir!
console.log(longName.toLowerCase().includes("melih")); //True

// Belirtilen başlangıç ve bitiş indeksleri arasındaki bölümü döndürür.
// Dipnot = almak istedigin yerin son karakterine + 1 koy!
console.log(longName.slice(0, 5));

//! Bu onemli !//
console.log(longName.split(" ")); // array olarak ["Melih","Ciray"] dondurdu.

// trim `traslamak` string icerisindeki belirlenen bosluklari siler.
console.log(spaceFullname.trim());

// replace iki tane parametre alir. Birinci parametre degistirilecek string ikinci parametre ise ne ile degistirecegi.
console.log(longName.replace("Melih", "Seda"));

// Stringin ne ile basladigini kontrol etmek icin startsWith("aranilacak string");
console.log(longName.startsWith("Melih"));

// Stringin ne ile bitisini kontrol etmek icin endsWith("aranilacak string");
console.log(longName.endsWith("Ciray"));

function stringReverse(str) {
  str.split("");
  console.log(str.split("").reverse().join("").replace(" ", ""));
}

stringReverse(longName);

let arr = ["banana", "apple", "cherry"];
for (let i = 0; i < arr.length; i++) {
  if (arr[i].includes("a")) {
    arr[i] = "kiwi";
  }
}
console.log(arr);

/*
 Algoritmalardan bazi ornekler
 1. Ornek icinde "a" harfi gecen kelimeleri kiwi ye cevir
 2. Ornek icinde i harfi gecen kelimeleri e ye cevir eger 2 den fazla ise a ya cevir!
 */

let arr2 = ["banana", "apple", "cherry"];
arr2.forEach((x, i) => {
  if (x.includes("a")) {
    arr2[i] = "kiwi";
  }
});
console.log(arr2);

function looktheString(str) {
  let x = str.split("");

  x.forEach((y, i) => {
    if (y === "i") {
      x[i] = "e";
    }
  });
  let count = x.filter((e) => e.includes("e"));
  if (count.length > 2) {
    x.forEach((j, i) => {
      if (j == "e") {
        x[i] = "a";
      }
    });
  }
  return x.join("");
}

console.log(looktheString(longName));

// Melih Ciray icerisindeki i harflerini e ye dondur.
// Eger ki 2 den fazla e var ise e leri a ya cevir.
