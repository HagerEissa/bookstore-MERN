
const readBody = (req) => {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", chunk => body += chunk); //bodyالداتا مش بتتبعت مره واحده بتتبعت علي اجزاء //فبجمع الداتا اللي جايه فمتغير اسمع (req)
    req.on("end", () => {
      try {
        newBook = JSON.parse(body);
        resolve(newBook);
      } catch (err) {
        reject("Failed to parse body: " + err);
      }
    });
  })
}

const createResponse = (res, statusCode, respBody) => {
    res.writeHead(statusCode);
    res.write(JSON.stringify(respBody));
    res.end();
}

module.exports = {
  readBody,
  createResponse
}