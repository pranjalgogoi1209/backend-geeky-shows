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

  // delete session
  static async delete_session(req, res) {
    req.session.destroy(() => {
      if (req?.session?.id) {
        console.log("session is not deleted");
      } else {
        console.log("session is deleted");
      }
    });

    res.send("Session is deleted");
  }

  // regenerate session
  static async regenerate_session(req, res) {
    req.session.regenerate(() => {
      if (req?.session?.id) {
        console.log("session is regenerated");
        console.log(`new session id ${req.session.id}`);
      } else {
        console.log("session is not regenerated");
      }

      res.send("Session is regenerated");
    });
  }

  static async session_example(req, res) {
    req.session.device = "mobile";
    if (req.session.count) {
      req.session.count++;
    } else {
      req.session.count = 1;
    }

    res.send(`You visited this page ${req.session.count} times`);
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
