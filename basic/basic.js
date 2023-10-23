//intro of array
// // collection of same data type elements or order collection of items its a refrence type isme hm object store kr sakte hain 
// // let fruits = ['apple','mango','orange'];
// console.log(fruits[0]);//indexin]
// console.log(typeof fruits);

// //array are mutable
// let fruts = ['apple','banana'];
// // console.log(fruts[1]);
// // fruts[1]='penut';
// // console.log(fruts[1]); 
// // console.log(fruts);

// // check type of array
// console.log(typeof fruts);

// let obj = {};
// console.log(typeof obj);// its a litrals objects

// console.log(fruits);



//  =======================array push pop>>>>>> its can change original array 
// let fruits = ['apple','mango','orange'];
// console.log(fruits);
// fruits.push("mango");
// console.log(fruits);


// =============pop   its remove last element of array by default
let fruits = ['apple','mango','orange'];
console.log(fruits);
fruits.pop();
console.log(fruits);

// starting me add krne ke liye ----unshift ka use 
fruits.unshift("kivi");
console.log(fruits)


//  shift -- ye start ke element ko remove krta hai 
fruits.shift();
console.log(fruits);

// shift unshift se fast hai push pop 

// --------primitive vs reference data types
// primitive type  -- its stored in stack 
let num1 = 3;
let num2 = 4;
console.log("value of num1 ",num1);
console.log("value of num2 ",num2);
num1++;
console.log("after increement num1");
console.log(num1);


// Referencetype   array -- its stored in 
// let arra1 = ["item 2 ","item3"];
// let array2 = arra1;
// console.log("array1 ",arra1);
// console.log("array2",array2); 
// arra1.push("item3");
// console.log("after pushing the element in the array");
// console.log("array 1 ",arra1);
// console.log("array 1=2 ",array2);



//  =================>>array cloning 
// let arra1 = ["item 2 ","item3"];
// let array2 = arra1;
// arra1.push("item 3 ")
// console.log(arra1===array2);
// console.log(arra1);
// console.log(array2);
// but is not good method so we can use slice method 

// let arra1 = ["item 2 ","item3"];
// // let array2 = arra1;
// let array2= arra1.slice(0);
// arra1.push("item 3 ")
// console.log(arra1===array2);
// console.log(arra1);
// console.log(array2); 

//  also we can use sperd operator and concate method for cloining araay 

// 1.Spered operator

// let arra1 = ["item 2 ","item3"];
// let arra2 = [...arra1];

// arra1.push("item 3");
// console.log(arra1===arra2);
// console.log(arra1);
// console.log(arra2); 

// //2.concate 
// let arra1 = ["item 2 ","item3"];
// let array2 = "arra1";
// let array= [].concat(arra1);
// arra1.push("item 3 ")
// console.log(arra1===array2);
// console.log(arra1);
// console.log(array); 


// //  FOR LOOOP IN ARRAY 
// let frunsh = [ "apple","banana","penut"];
// frunsh.length();
// console.log(frunsh); 
// for( let i =0; i<frunsh.length; i++){
  
// }
// console.log(frunsh);



// array destructuring 
const myArray =[ "value1","value2"];
let myVar1 = myArray[0];
let myVar2 = myArray[1];
console.log("Value of myvar1",myVar1);
console.log("value of myvar2",myVar2);