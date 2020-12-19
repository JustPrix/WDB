const figlet = require('figlet');
// import figlet from 'figlet'; //ES6
const colors = require('colors');

figlet('Hello World!!', function (err, data) {
  if (err) {
    console.log('Something went wrong ...');
    console.dir(err);
    return;
  }
  console.log(data.cyan);
});
