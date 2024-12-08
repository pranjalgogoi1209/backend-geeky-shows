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

  // Verify login with hash and handle old users without hashed passwords
  static async verifyLogin(req, res) {
    try {
      const { email, password } = req.body;

      // Find the user by email
      const result = await userModel.findOne({ email: email });

      if (!result) {
        return res.status(404).json({ message: "Incorrect email" });
      }

      // Check if the stored password is hashed or plain
      const isPasswordHashed = result.password.startsWith("$2b$");

      if (isPasswordHashed) {
        // Compare hashed passwords
        const isMatch = await bcrypt.compare(password, result.password);

        if (isMatch) {
          return res
            .status(200)
            .json({ message: "You are successfully logged in" });
        } else {
          return res.status(401).json({ message: "Incorrect password" });
        }
      } else {
        // Handle old accounts with unhashed passwords
        if (password === result.password) {
          // Hash the plain password and update the database
          const saltRounds = 10;
          const hashPassword = await bcrypt.hash(password, saltRounds);

          await userModel.findOneAndUpdate(
            { email: email },
            { password: hashPassword }
          );

          return res.status(200).json({
            message:
              "Your account was updated for security. You are successfully logged in.",
          });
        } else {
          return res.status(401).json({ message: "Incorrect password" });
        }
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "An error occurred" });
    }
  }
}

export default UserController;
