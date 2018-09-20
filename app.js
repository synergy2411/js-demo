// var x = 20;

// console.log(typeof x);
// var y = "10";
// var z = "20";

// if(x===z){
//     console.log("EQUALS");
// }else{
//     console.log("NOT EQUALS");
// }


// console.log(x+y);       //2010
// console.log(x-y);       //?



// var addition = function (num1, num2){
//     return num1 + num2;
// }
// console.log(addition(2,5));

// //IIFE
// (function(){
//     console.log("IIFE Called!");
// })();

//Function as a constructor
// function Person(fname, lname){
//     this.fname = fname;
//     this.lname = lname;
//     this.getFullName = function(){
//         return this.fname + " " + this.lname;
//     }
// }

// var foo = new Person("Foo", "Bar");
// console.log(foo.getFullName());


//Function Hoisting

// function mystry(){
//     var chooseNumber = function  (){
//         return 5;
//     }
//     return chooseNumber();
//     var chooseNumber = function  (){
//         return 7;
//     }
// }

// console.log(mystry());      //?

// var str = "Sample String";
// // var str = new String("Sample String");
// console.log(str.charAt(3));


// var user = {
//     firstName  : "Foo",
//     lastName :"Bar",
//     getName : function () {
//         var nestedFunc = () => this.firstName+ " " + this.lastName
//         return nestedFunc();       
//     }
// }

// console.log(user.getName());// Foo Bar
// console.log(user.getName);  //


// console.log(user.firstName);

