// create a folder name data, inside that create a folder with data.name and inside that add a text file with data.text, don't use recursive true.

const data = [
  {
    name: "Pranjal Gogoi",
    text: "Hey, I am Pranjal Gogoi",
  },
  {
    name: "Sharshti",
    text: "Hey, I am Sharshti",
  },
  {
    name: "Akshay",
    text: "Hey, I am Akshay",
  },
  {
    name: "Krishna",
    text: "Hey, I am Krishna",
  },
  {
    name: "Yashi",
    text: "Hey, I am Yashi",
  },
  {
    name: "Ashish",
    text: "Hey, I am Ashish",
  },
  {
    name: "Rizwan",
    text: "Hey, I am Rizwan",
  },
  {
    name: "Kishan",
    text: "Hey, I am Kishan",
  },
  {
    name: "Varun",
    text: "Hey, I am Varun",
  },
  {
    name: "Amrutha",
    text: "Hey, I am Amrutha",
  },
  {
    name: "Nilam",
    text: "Hey, I am Nilam",
  },
];

import * as fs from "fs";

const createFolder = (oldDataLength) => {
  if (error && oldDataLength === data.length) {
    console.log("data file already exists or you have all folders");
  } else {
    data.forEach((item, idx) => {
      fs.mkdir(`data/${item.name}`, (error) => {
        if (error) {
          console.log(`${item.name}file already exists`);
        } else {
          fs.writeFile(`data/${item.name}/index.txt`, item.text, (error) => {
            if (error) {
              console.log(
                `${item.text} is present inside ${item.name} file already exists`
              );
            } else {
              console.log("file created");
            }
          });
        }
      });
    });
  }
};

fs.exists("data", (exists, error) => {
  if (error) throw error;

  if (exists) {
    fs.readdir("data", (error, files) => {
      if (error) {
        console.log(error);
      } else {
        const oldDataLength = files.length;
        createFolder(oldDataLength);
      }
    });
  } else {
    fs.mkdir("data", (error) => {
      if (error) throw error;
      createFolder();
    });
  }
});

// shorter version from chat gpt
/* import * as fs from "fs";

const data = [
  { name: "Pranjal Gogoi", text: "Hey, I am Pranjal Gogoi" },
  { name: "Sharshti", text: "Hey, I am Sharshti" },
  { name: "Akshay", text: "Hey, I am Akshay" },
  { name: "Krishna", text: "Hey, I am Krishna" },
  { name: "Yashi", text: "Hey, I am Yashi" },
  { name: "Ashish", text: "Hey, I am Ashish" },
  { name: "Rizwan", text: "Hey, I am Rizwan" },
  { name: "Kishan", text: "Hey, I am Kishan" },
  { name: "Varun", text: "Hey, I am Varun" },
  { name: "Amrutha", text: "Hey, I am Amrutha" },
  { name: "Nilam", text: "Hey, I am Nilam" },
];

fs.exists("data", (exists) => {
  if (!exists) {
    fs.mkdir("data", (err) => {
      if (err) return console.error("Error creating 'data' folder:", err);
      processData();
    });
  } else {
    processData();
  }
});

function processData() {
  fs.readdir("data", (err, existingFolders) => {
    if (err) return console.error("Error reading 'data' folder:", err);

    const existingSet = new Set(existingFolders);

    data.forEach(({ name, text }) => {
      if (existingSet.has(name)) return console.log(`${name} already exists.`);

      fs.mkdir(`data/${name}`, (err) => {
        if (err) return console.error(`Error creating folder for ${name}:`, err);

        fs.writeFile(`data/${name}/index.txt`, text, (err) => {
          if (err) return console.error(`Error creating file for ${name}:`, err);

          console.log(`Folder and file created for ${name}`);
        });
      });
    });
  });
} */
