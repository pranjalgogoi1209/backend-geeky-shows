import userModel from "../models/User.js";

class UserController {
  static async home(req, res) {
    res.render("index");
  }

  static async login(req, res) {
    res.render("login");
  }

  static async registration(req, res) {
    res.render("registration");
  }

  // create user doc
  static async createUserDoc(req, res) {
    const { name, email, password } = req.body;
    try {
      // creating new document
      const userDoc = new userModel({
        name: name,
        email: email,
        password: password,
        join: Date.now(),
      });

      const result = await userDoc.save();
      console.log(result, "user doc created successfully");
      res.redirect("/login");
    } catch (err) {
      console.log(err);
    }
  }
}

export default UserController;
