const userList = (req, res) => {
  res.status(200).json("Hello World");
};

const userCreate = (req, res) => {
  const body = req.body;
  console.log(body);
  res.status(201).json({ data: body, message: "Basariyla Olustu!" });
};

const userDelete = (req, res) => {
  const userID = req.params.userID;
  console.log(userID);
  res.status(200).json(userID);
};

const userUpdate = (req, res) => {
  const userID = req.params.userID;
  console.log(userID);
};

module.exports = { userList, userCreate, userDelete, userUpdate };
