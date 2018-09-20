
// var str : string = "Sample string";
// str = 100;

//ES6+ features

//Destructuring : Arrays | Objects

// var arr = ["foo","bar","bas"];
// var [arr1, , arr3] = arr;
// console.log(arr3);      //bas

// var drawing = {
//     drawText : function(text){console.log("Drawing "+  text)},
//     drawCircle : function(r){console.log(Math.PI * r * r)}
// }

// var {drawCircle, drawText} = drawing;

// // drawing.drawText("Sample Text");

// drawText("Sample Test");


//Template String Syntax :
    // - multiline string
    // - include variables inside string

// var fname = "Foo";
// console.log(`Hello ${fname}!`);

//Block scope variable
    // - let
    // - const
// function demo(arr){
//     // var flash = undefined;
//     if(arr.length > 2){
//         var flash = "FLASHING..";
//         console.log(load);          //?
//     }else{
//         let load = "LOADING...";
//         console.log(flash);
//     }
// }
// demo([1,2,3,4]);        //FLASHING...

//Class

//Module System

import { Student, MAGIC_NUMBER } from './student';
import { Person } from './model/person';

let obj : Person = {
    firstName : "Foo",
    lastName : "Bar",
    age : 35
}

let foo = new Student(obj);
console.log(foo.getFullName());

console.log(MAGIC_NUMBER);