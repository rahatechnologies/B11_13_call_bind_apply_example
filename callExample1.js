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
  sayHi: function () {
    // Here "this" points to nameObj
    console.log(this.name);
  },

  expert: function (skill) {
    // Here "this" points to nameObj
    console.log(this.name + ' is expert in ' + skill);
  },
};

// using JavaScript call method
PrintName.sayHi.call(nameObj2, 'Data Science');

// using custom polyfill call method

Object.prototype.MyCall = function (objInstance, ...skill) {
  objInstance.myMethod = this;
  objInstance.myMethod(...skill);
};

// PrintName.expert.MyCall(nameObj, ('Data Science', ' HTML5', 'css3'));

PrintName.expert.apply(nameObj, ['Data Science']);

// using custom polyfill call method

Object.prototype.MyApply = function (objInstance, ...skill) {
  objInstance.myMethod = this;
  objInstance.myMethod(...skill);
};

PrintName.expert.MyApply(nameObj3, ['Data Science']);
