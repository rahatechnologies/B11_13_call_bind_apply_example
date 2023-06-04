// Example 1: bind
let nameObj = {
  name: 'Koushik',
};

let nameObj2 = {
  name: 'Anay',
};

let PrintName = {
  name: 'Sanjib',
  sayHi: function () {
    // Here "this" points to nameObj
    console.log(this.name);
  },
};

PrintName.sayHi(); //Sanjib

let HiFun = PrintName.sayHi.bind(nameObj2);
HiFun(); //Koushik
