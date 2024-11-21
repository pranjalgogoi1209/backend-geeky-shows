import * as fs from "fs";
import path from "path";

const templatesController = (req, res) => {
  fs.readdir(path.join(process.cwd(), "public/templates"), (err, files) => {
    const templatesArr = [];
    if (err) throw err;

    files.forEach((file, idx) => {
      templatesArr.push({
        id: idx + 1,
        url: `http://localhost:3001/templates/${file}`,
      });
    });
    res.json(templatesArr);
  });
};

export { templatesController };
