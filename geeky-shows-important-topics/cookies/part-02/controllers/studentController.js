class StudentController {
  static async set_cookie(req, res) {
    res.cookie("username", "pranjalgogoi", { maxAge: 10000 });
    res.cookie("cart", { items: [1, 2, 3] });
    res.send("Cookie is set");
  }

  static async get_cookie(req, res) {
    console.log(req.cookies);

    res.send("Cookie is get");
  }

  static async delete_cookie(req, res) {
    res.clearCookie("cart");
    res.send("Cookie is deleted");
  }
}

export default StudentController;
