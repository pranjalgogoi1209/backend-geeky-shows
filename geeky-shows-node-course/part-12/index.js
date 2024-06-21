// File system => PROMISE API

import { stat } from "fs";
import * as fs from "fs/promises";

// creating directory - path sould be there

/* try {
  await fs.mkdir(
    "D:\\courses\\backend-courses\\backend-geeky-shows\\geeky-shows-node-course\\part-12\\test"
  );
  console.log("directory created");
} catch (error) {
  console.log(error);
} */

// creating directory - if path is not there it will create one

/* try {
  await fs.mkdir(
    "D:\\courses\\backend-courses\\backend-geeky-shows\\geeky-shows-node-course\\part-12\\test1\\directory",
    { recursive: true }
  );
} catch (error) {
  console.log(error);
} */

// READ CONTENT OF DIRECTORY
/* try {
  const files = await fs.readdir(
    "D:\\courses\\backend-courses\\backend-geeky-shows\\geeky-shows-node-course"
  );
  for (const file of files) {
    console.log(file);
  }
} catch (error) {
  console.log(error);
} */

// REMOVE DIRECTORY => DIRECTORY SHOULD BE EMPTY
/* try {
  await fs.rmdir(
    "D:\\courses\\backend-courses\\backend-geeky-shows\\geeky-shows-node-course\\part-12\\test1\\directory"
  );
} catch (error) {
  console.log(error);
} */

// CREATE AND WRITE FILE
/* try {
  await fs.writeFile("test1\\test.txt", "Hellow Pranjal Gogoi");
} catch (error) {
  console.log(error);
} */

// READ FILE => it is returning buffer
/* try {
  const data = await fs.readFile("test1\\test.txt");
  console.log(data);
} catch (error) {
  console.log(error);
} */

// READ FILE => it is not returning buffer
/* try {
  const data = await fs.readFile("test1\\test.txt", "utf-8");
  console.log(data);
} catch (error) {
  console.log(error);
} */

// APPEND DATA INTO FILE
/* try {
  await fs.appendFile("test1\\test.txt", "Hellow Geeky shows");
} catch (error) {
  console.log(error);
} */

// COPY FILE
/* try {
  await fs.copyFile("test1\\test.txt", "test1\\readme.txt");
} catch (error) {
  console.log(error);
} */

// CREATE AND COPY FILE
/* try {
  await fs.copyFile("test1\\test.txt", "test1\\info.txt");
} catch (error) {
  console.log(error);
} */

// GET FILE INFORMATION

/* try {
  const stats = await fs.stat("test1\\test.txt");
  console.log(stats);
  console.log(stats.isDirectory());
  console.log(stats.isFile());
} catch (error) {
  console.log(error);
} */

// File system => CALLBACK API
import * as fs1 from "fs";

// creating directory => path should be there
/* fs1.mkdir(
  "D:\\courses\\backend-courses\\backend-geeky-shows\\geeky-shows-node-course\\part-12\\test2",
  (error) => {
    if (error) throw error;
    console.log("directory created using callback api");
  }
); */

// creating directory => path is not required to be there
/* fs1.mkdir(
  "D:\\courses\\backend-courses\\backend-geeky-shows\\geeky-shows-node-course\\part-12\\test3\\demo",
  { recursive: true },
  (error) => {
    if (error) throw error;
    console.log("directory created using callback api");
  }
); */

// READ CONTENT OF DIRECTORY
/* fs1.readdir(
  "D:\\courses\\backend-courses\\backend-geeky-shows\\geeky-shows-node-course\\part-12\\test1",
  (error, files) => {
    if (error) throw error;
    console.log(files);
    for (const file of files) {
      console.log(file);
    }
  }
); */

// REMOVE DIRECTORY => DIRECTORY SHOULD BE EMPTY
/* fs1.rmdir(
  "D:\\courses\\backend-courses\\backend-geeky-shows\\geeky-shows-node-course\\part-12\\test3",
  (error) => {
    if (error) throw error;
    console.log("Directory removed...");
  }
); */

// CREATE AND WRITE FILE
/* fs1.writeFile("test2\\new.txt", "Hellow pranjal gogoi", (error) => {
  if (error) throw error;
  console.log("file created using callback api");
}); */

// READ FILE => buffer data
/* fs1.readFile("test1\\readme.txt", (error, data) => {
  if (error) throw error;
  console.log(data);
}); */

// READ FILE => original data
/* fs1.readFile("test1\\readme.txt", "utf-8", (error, data) => {
  if (error) throw error;
  console.log(data);
}); */

// APPEND DATA INTO FILE
/* fs1.appendFile("test1\\readme.txt", "new update", (error) => {
  if (error) throw error;
  console.log("data appended");
}); */

// COPY FILE
/* fs1.copyFile("test1\\readme.txt", "test1\\readme2.txt", (error) => {
  if (error) throw error;
  console.log("data copied");
}); */

// GET FILE INFORMATION
/* fs1.stat("test1\\readme.txt", "test1\\readme2.txt", (error, stats) => {
  if (error) throw error;
  console.log(stats);
  console.log(stats.isDirectory());
  console.log(stats.isFile());
}); */

// File system => synchronous API
import * as fs3 from "fs";

// CREATING DIRECTORY : PATH SHOULD NOT BE REQUIRED HERE
/* fs3.mkdirSync(
  "D:\\courses\\backend-courses\\backend-geeky-shows\\geeky-shows-node-course\\part-12\\test5\\test5Child",
  { recursive: true }
); */

// READ CONTENT OF DIRECTORY
const files = fs3.readdirSync(
  "D:\\courses\\backend-courses\\backend-geeky-shows\\geeky-shows-node-course\\part-12\\test1"
);

console.log(files);
for (const file of files) {
  console.log(file);
}
