const name= "Ritik";
const repoCount=50;
// console.log(name + repoCount+ " Value");

//it is known as string Interpollation
console.log(`hello my name is ${name} and my repo is:${repoCount}`);

const gameName= new String('ritik-hhc-com');
// console.log(gameName[3]);
// console.log(gameName.__proto__);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

// const newString= gameName.substring(0,4);
// console.log(newString);

// const anotherString= gameName.slice(-8,5);
// console.log(anotherString);

const newStringOne ="     ritik     ";
console.log(newStringOne);
console.log(newStringOne.trim());


const url= "https://ritik.com/ritik%20dubey";
console.log(url.replace('%20', '-'));
console.log(url.includes('ritik'));

console.log(gameName.bold('ritik'));






