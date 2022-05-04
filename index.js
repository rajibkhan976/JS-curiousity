var length = 4;

var object = {
    name: 'Rajib',
    getName() {
        console.log(myName())
        // console.log(this.length);
        // console.log(this.name);
        //console.log('object this', this);
        //console.log('object self', self);
    },
    log: function() {
        console.log(myName())
    }
}

// object.getName();

function myName() {
    // console.log('myName this', this);
    // console.log('myName self', self);
    return 'Rajib';
}

object.log();

//console.log('global this', this);
//console.log('global self', self);

//myName();

//let i;
for (i = 0; i < 3; i++) {
    console.log(i);
    setTimeout(function() {
        console.log(i);
    }, 100);
}

console.log(0.1 + 0.2 === 0.3);
console.log(0.3 === 0.3);

(function out(a) {
    return function inside(b) {
        console.log(a);
    }
}(5))(1)

function callback() {
    console.log('callback');
}

var myObj = {
    length: 5,
    log() {
        return arguments[0]();
    }
}

console.log(myObj.log(callback, 1, 2))

var myObject = { 
    foo: "bar",    
    func: function() {    
        var self = this;    
        console.log("outer func:  this.foo = " + this.foo);    
        console.log("outer func:  self.foo = " + self.foo);    
        (function() {    
            console.log("inner func:  this.foo = " + this.foo);   
            console.log("inner func:  self.foo = " + self.foo); 
        }());    
    }    
};    
myObject.func();

function myPet(name) {
    this.name = name;
}

var pet = new myPet('Fluffy');

console.log(pet.name);

const getName = () => {
    console.log('arrow this', this);
}

getName();

const myParents = function() {
    console.log('anonymous this', this);
};

myParents();

(function() {    
    console.log(length);
    console.log("called");  
}());   
