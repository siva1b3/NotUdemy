// console.log("siva");

// powershell -ExecutionPolicy Bypass -Command "node index2.js"

const { exec } = require("child_process");

const folderPath =
  "C:\\Users\\siva.nagababu\\Pictures\\Screenshots\\AWEBDEV\\simple-js-projects\\006GPT";

// const folderPath =
//   "C:\\Users\\siva.nagababu\\Pictures\\Screenshots\\AWEBDEV\\react";

exec("npm install", { cwd: folderPath }, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }

  console.log("stdout:", stdout);
  console.error("stderr:", stderr);
});

// Run npm start
// exec("npm start", { cwd: folderPath }, (error, stdout, stderr) => {
//   if (error) {
//     console.error(`Error: ${error.message}`);
//     return;
//   }

//   console.log("npm start stdout:", stdout);
//   console.error("npm start stderr:", stderr);
// });
