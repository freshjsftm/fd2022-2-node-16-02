"use strict";

const fs = require("fs");
//const fs = require("fs/promises"); //readFile

fs.readFile('./test.txt', {encoding:'utf-8'}, (err, data) => {
  if (err) throw err;
  console.log(data);
});