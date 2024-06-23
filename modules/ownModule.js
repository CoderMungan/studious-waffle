const customModule = {
  add(n1, n2) {
    return n1 + n2;
  },
  setLog(text) {
    console.log(text + " Iyisin ha Moruk");
  },
};

const name = "CoderMungan";

const getData = () => {
  return Date.now();
};

module.exports = { customModule, name, getData };
