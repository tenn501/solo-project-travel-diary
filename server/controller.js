const fs = require('fs');
const path = require('path');

const Controller = {};

Controller.createEntry = (req, res, next) => {
  // console.log("1");
  const {title, description} = req.body;
  const entry = {title: title, description: description};
  // console.log(entry);
  fs.appendFileSync(path.join(__dirname, './mockDB/data.json'), JSON.stringify(entry));
  const data = fs.readFileSync(path.join(__dirname, './mockDB/data.json'), "utf-8");
  console.log('5');
  console.log(typeof(data));
  console.log('6');
  res.locals.data = data;
  console.log(res.locals);
  return next();
};
// JSON.stringify(logData) + "\n"
module.exports = Controller;