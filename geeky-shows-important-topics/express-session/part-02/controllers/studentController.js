class StudentController {
  static async session_example(req, res) {
    req.session.device = "mobile";
    if (req.session.count) {
      req.session.count++;
    } else {
      req.session.count = 1;
    }
    res.send(`Count: ${req.session.count}`);
  }

  static async get_session_data(req, res) {
    if (req.session.device) {
      res.send(`Device: ${req.session.device} , Count: ${req.session.count}`);
    } else {
      res.send("No session data and Device");
    }
  }
}

export default StudentController;
