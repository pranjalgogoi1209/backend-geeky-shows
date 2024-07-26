const allStudent = (req, res) => {
  res.send("All students");
};

const deleteStudent = (req, res) => {
  const { id } = req.params;
  console.log(id);
  if (id === "10") {
    res.send("Ye mera id hai so ye delete nahi hoga");
  } else {
    res.send(`delte => id-${id}`);
  }
};

export { allStudent, deleteStudent };
