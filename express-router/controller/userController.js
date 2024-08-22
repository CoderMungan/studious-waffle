const forUser = (req, res) => {
  res.render("user", { title: "Users" });
};

export default {
  forUser,
};
