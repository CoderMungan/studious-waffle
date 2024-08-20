const paramsQuery = (req, res) => {
  const firstParam = req.params.first;
  const secondParam = req.params.second;
  const query = req.query;

  console.log(query);

  res.json({
    first: firstParam,
    second: secondParam,
    gelenFirstquery: query.max,
    gelenSecondquery: query.min,
    message: "basarili",
  });
};

const forDelete = (req, res) => {
  res.json({ message: "basarili bir sekilde silindi" });
};

const forPut = (req, res) => {
  res.json({ message: "basarili bir sekilde guncellendi" }).status(200);
};

const forPost = (req, res) => {
  res.json({ message: "basarili bir sekilde olusturuldu" }).status(201);
};

const forMain = (req, res) => {
  res.render("index", { title: "Anasayfa" });
};

const forParams = (req, res) => {
  const arr = ["Fatmanur", "Halil", "Mungan"];
  const obj = [
    { id: 1, name: "Halil" },
    { id: 2, name: "Mungan" },
  ];
  const number = 5000;

  res.render("parametr", {
    title: "Parametre",
    array: arr,
    object: obj,
    num: number,
  });
};

module.exports = {
  paramsQuery,
  forDelete,
  forPut,
  forPost,
  forMain,
  forParams,
};
