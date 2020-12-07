// const myMath = {
//   PI: 3.14159,
//   square: function (num) {
//     return num * num;
//   },
//   cube(num) {
//     return num ** 3;
//   },
// };

const cat = {
  name: 'Blue Steele',
  color: 'grey',
  breed: 'Scottish Fold',
  meow() {
    console.log(`${this.name} says MEOW, MEOW, MEOW`);
  },
};

const meow2 = cat.meow;
