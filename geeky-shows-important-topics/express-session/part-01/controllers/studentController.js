class StudentController {
  static async get_session_info(req, res) {
    console.log(req.session);
    console.log(req.session.id);
    console.log(req.session.cookie);
    console.log(req.session.cookie.originalMaxAge);

    // remaining age
    console.log(req.session.cookie.maxAge);

    console.log(req.sessionID);

    res.send("Session info");
  }
}

export default StudentController;
