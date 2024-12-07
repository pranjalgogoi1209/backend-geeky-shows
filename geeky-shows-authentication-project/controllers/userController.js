import bcrypt from "bcrypt";

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

  /* 
  // create user doc without hash
  static async createUserDoc(req, res) {
    try {
      const { name, email, password } = req.body;

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
  } */

  /* // varify login without hash
  static async verifyLogin(req, res) {
    try {
      const { email, password } = req.body;
      const result = await userModel.findOne({ email: email });
      console.log(result);

      if (!result) {
        res.send("<h2>Incorrect email</h2>");
        return;
      }

      if (result.password === password) {
        res.send("<h2>You are successfully loggedin</h2>");
      } else {
        res.send("<h2>Incorrect password</h2>");
      }
    } catch (err) {
      console.log(err);
    }
  } */

  // create user doc with hash
  static async createUserDoc(req, res) {
    try {
      const { name, email, password } = req.body;

      const saltRounds = 10;

      const hashPassword = await bcrypt.hash(password, saltRounds);

      // creating new document
      const userDoc = new userModel({
        name: name,
        email: email,
        password: hashPassword,
        join: Date.now(),
      });

      const result = await userDoc.save();
      console.log(result, "user doc created successfully");
      res.redirect("/login");
    } catch (err) {
      console.log(err);
    }
  }

  // varify login with hash
  static async verifyLogin(req, res) {
    try {
      const { email, password } = req.body;

      const result = await userModel.findOne({ email: email });
      console.log(result);

      if (!result) {
        res.send("<h2>Incorrect email</h2>");
        return;
      }

      const isMatch = await bcrypt.compare(password, result.password);

      if (isMatch) {
        res.send("<h2>You are successfully loggedin</h2>");
      } else {
        res.send("<h2>Incorrect password</h2>");
      }
    } catch (err) {
      console.log(err);
    }
  }
}

export default UserController;
