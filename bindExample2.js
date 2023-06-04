// Example 2: bind
let nameObj = {
  name: 'Koushik',
};

let nameObj2 = {
  name: 'Anay',
};

let nameObj3 = {
  name: 'Soumitra',
};

let PrintName = {
  name: 'Sanjib',
  sayHi: function (skill) {
    // Here "this" points to nameObj
    console.log(this.name + ' is expert in ' + skill);
  },
};

// polyfill
// Here "bindObj" will be nameObj
Object.prototype.MyBind = function (bindObj, ...args) {
  // Here "this" will be sayHi function
  bindObj.myMethod = this;
  console.log('bindObj => ', bindObj);
  return function () {
    bindObj.myMethod(...args);
  };
};

PrintName.sayHi('Signaling');
let HiFun = PrintName.sayHi.MyBind(nameObj3, 'HTML5');
HiFun();
