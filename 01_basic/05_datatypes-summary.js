// primitive datatypes

// 7 types: String, Number, Boolean, null, undefined, symbol, BigInt..

const score=100;
const scoreValue=100.3;

const isLoggedIn=false;
const outsideTemp=null;
let userEmail;


const id = Symbol('123');
const anotherId=Symbol('123');

console.log(id === anotherId );


// const bigNumber =23436465757546467n


//Non premitive datatypes (Reference datatypes)

// reference datatypes o hai mermory me inka reference directly allocate kiya jaa sakta hai..
// 3 types:Array, Objects, Functions


const heros= ["saktiman", "nagraj", "doga"];
let myObj = {
    name:"Ritik Dubey",
    age:21,
}

  const myFunction=function (){
    console.log("hello world");
    
  }

//   console.log(typeof bigNumber);
//   console.log(typeof outsideTemp);
//   console.log(typeof number);
//   console.log(typeof myFunction);

console.log(typeof anotherId);

