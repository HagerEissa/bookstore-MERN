const fs = require("fs");

const writeJson = (filePath, obj) =>{
  const contentString = JSON.stringify(obj);
  fs.writeFileSync(filePath, contentString);
}

const readJson = (filePath) => {
  const content = fs.readFileSync(filePath).toString();
  return JSON.parse(content);
}

module.exports = {
  writeJson,
  readJson
};