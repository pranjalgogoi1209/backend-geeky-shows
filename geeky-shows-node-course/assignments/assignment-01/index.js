// Questions => Without using recursive true, create a directory named "child" only if the parent directory named "parent" does exist.

// fs module callback =>
/* import * as fs from "fs";

const createFolder = (path) => {
  fs.mkdir(path, (error) => {
    if (error) throw error;
  });
};

fs.exists("parent", (exists) => {
  console.log(exists);

  if (!exists) {
    createFolder("parent");
  }

  createFolder("parent/child");
});
 */

// fs module promises =>

/*     import * as fs from "fs/promises";

const checkExistence = async () => {
  try {
    const check = await fs.access("parent");
    return true;
  } catch (error) {
    return false;
  }
};
let result = await checkExistence();
if (!result) {
  await fs.mkdir("parent");
  console.log("Parent is created");
  result = true;
}

if (result) {
  await fs.mkdir("parent/child");
  console.log("Child is created");
}

import * as fs from "fs/promises";

const ensureDirectoryExists = async () => {
  for (const dir of ["parent", "parent/child"]) {
    try {
      await fs.access(dir);
    } catch {
      await fs.mkdir(dir);
      console.log(`${dir} is created`);
    }
  }
};

await ensureDirectoryExists(); */
