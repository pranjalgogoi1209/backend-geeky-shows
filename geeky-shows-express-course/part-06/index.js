import express from "express";

const app = express();
const port = process.env.PORT || 3000;

// Routes
app.get("/", (req, res) => {
  res.send("GET REQUEST");
});

// String path
app.get("/about", (req, res) => {
  res.send("ABOUT PAGE");
});

// String pattern path
app.get("/ab?cd", (req, res) => {
  res.send("This route path will match acd and abcd");
});

// Regular expression path
/* app.get(/a/, (req, res) => {
  res.send("This is a path which contains a");
}); */

/* app.all("*", (req, res) => {
  res.send("ALL REQUEST");
}); */

// one callback
app.get("/cbexample1", (req, res) => {
  res.send("This is one callback example 1");
});

// more than one callback
app.get(
  "/cbexample2",
  (req, res, next) => {
    console.log("1st callback");
    next();
  },
  (req, res) => {
    console.log("2nd callback");
    res.send("This is more than one callback example 2");
  }
);

// An array of callback
const cb1 = (req, res, next) => {
  console.log("first callback");
  next();
};

const cb2 = (req, res, next) => {
  console.log("Second callback");
  next();
};

const cb3 = (req, res) => {
  console.log("Third callback");
  res.send("An array of callback example 3");
};

app.get("/cbexample3", [cb1, cb2, cb3]);

// combination of independent function and array of functions
app.get(
  "/cbexample4",
  [cb1, cb2],
  (req, res, next) => {
    console.log("Third callback");
    next();
  },
  (req, res) => {
    console.log("Fourth callback");
    res.end(
      "combination of independent function and array of functions example 4"
    );
  }
);

// chained route callback
app
  .route("/student")
  .all((req, res, next) => {
    console.log("First run this for all http methods");
    next();
  })
  .get((req, res) => {
    console.log("GET METHOD");
    res.send("All students => get request");
  })
  .post((req, res) => {
    console.log("POST METHOD");
    res.send("Add new student => post request");
  })
  .put((req, res) => {
    console.log("PUT METHOD");
    res.send("Complete update => put request");
  });

// MESSY CODE
// ALL STUDENTS ROUTES
/* app.get("/student/all", (req, res) => {
  res.send("All students");
});
app.post("/student/create", (req, res) => {
  res.send("New student created");
});
app.put("/student/update", (req, res) => {
  res.send("Student updated");
});
// ALL TEACHERS ROUTES
app.get("/teacher/all", (req, res) => {
  res.send("All teachers");
});
app.post("/teacher/create", (req, res) => {
  res.send("New teacher created");
});
app.put("/teacher/update", (req, res) => {
  res.send("Teacher updated");
}); */

// Catch-all route handler for any request that doesn't match the above routes
/* app.use((req, res) => {
  res.status(404).send("page not found !!!");
}); */

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
