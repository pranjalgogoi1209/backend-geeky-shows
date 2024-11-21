const allStudent = (req, res) => {
  const { id } = req.params;
  if (id === "555") {
    res.send("All student => id-555");
  } else {
    res.send("All student => id-not-555");
  }
};

export { allStudent };
