// -------------LECTURE 4 HOISTING----------
// getName();
// console.log(x);

// console.log(getName);
// var x = 7;

// function getName(){
//     console.log("Hello");
// }


// console.log(getName);

// -------------LECTURE 5 function Invocation and Variable Environment----------



// var x = 1;
// a();
// b();
// console.log(x);

// function a(){
//     var x = 10;
//     console.log(x);
// }

// function b(){
//     var x = 100;
//     console.log(x);
// }



// -------------LECTURE 6 SHORTEST JS PROGREAM----------

//-------------NOT DEFINED VS UNDEFINED----------

// console.log(a);

// var a;

// if(a === undefined){
//     console.log("a is undefined");
// }
// else{
//     console.log("a is Not defined");
// }


// -------------LECTURE 7 SCOPE CHAIN AND LEXICAL ENVIRONMENT----------

// function a(){
//     c();
//     function c(){
//         console.log(b);
//     }
// //  var b = 20; can access b  inside function c
// }
// var b = 20;
// a();


// -------------LECTURE 8 TEMPORAL ZONE-------------

// console.log(a);
// let a = 20;            --------->  ReferenceError: Cannot access 'a' before initialization
// how to know above is hoisted or not then ? (let is hoisted but in temporal zone)

// var b = 30;

// console.log(x); // not defined error  ------> different from temporal Zone error

// let a = 10;
// let a = 100; // In case of let --------> SyntaxError: Identifier 'a' has already been declared


// const b; // ---------> SyntaxError: Missing initializer in const declaration 
// b = 20000; 


// const b = 3000;
// b = 4000; // ---------> TypeError: Assignment to constant variable.


// -------------LECTURE 9 BLOCK SCOPE  & shadowing in JS----------



// {
//     var a = 10; 
//     let b = 20;
//     const c = 30; 
//     console.log(a);
//      console.log(b);
//      console.log(c);
// }

//     console.log(a); --- work fine because define in global scope with var
//      console.log(b); ---> will caught reference error here and stops
//      console.log(c);





//---------shadowing---------
// var a = 100;
// let b = 200;
// const c = 300;

// {
//     var a = 10; --- shadow the var a of global scope and modified also
//     console.log(a);
//    let b = 20;  --- shadow the b value outside this block 
//    console.log(b);    
//  const c = 30;  --- shadow the c value outside this block
//    console.log(c); 
// }
// console.log(a); ---- will print modified value 10. ----- because both are pointing in the same memory space 
// console.log(b); ---- will print 200 because both are in different memory space one in block and other is in script 
// console.log(c); -----  will print 300 because bot are in different memory space 



// IMPORTANT : shadow behave same in case of funciton scope

//----------------ILLEGAL SHADOWING IN JS WITH VAR & LET/CONST----------
// let a = 10;
// {
//     var a = 20;  -------> SyntaxError: Identifier 'a' has already been declared
// }


// var a = 10;
// { 
//   let a = 20;  // no error because block scope follows lexxical scope concept
//     console.log(a);
// }


// let a = 10;
// function x (){
//     var a = 20;  // no error because function scope follows lexxical scope concept
//     console.log(a);
// }



// --------------- lecture 10 Closures in JS----------

// function x (){
//     var a = 30;
//     function y (){
//         console.log(a);   // closure that binds together with it's lexical environment
//    }
//    y();
// }
// x();



// function x (){
//     var b = 30;
//     function y (){
//         console.log(b);
//     }
//     //return y;  return y function whole with it's lexical env. also the value of b will not be overwritten
//     b = 100;
//    return y; // return y function whole with it's lexical env. also the value of b will be overwritten
// }
// var z = x();  // z now stores the function y with closure property
// console.log(z);
// // .../ 
// z();  // it will print 30 because of closure property of JS



// function z (){
//     var a = 300;
//     function x (){
//         var b = 400;
//         function y (){
//             console.log(a,b);
//         }
//         y();
//     }
//     x();
// }
// z();



//------------------- lecture 11 Settimeout and closures in JS----------

// function x (){
//     var i = 1;
//     setTimeout( function (){
//         console.log(i);
//     } , 4000);
//     console.log("hello js");
// }
// x();


// function x (){
//     for(var i = 1; i <= 5; i++){
//         setTimeout(function(){
//             console.log(i); // it will print 6 five times after 1 sec because of closure property of JS (remember reference to i not it's value)
//         }, i * 1000);
//         console.log(i);   // it will print 1 to 5 immediately
//     }

//     console.log("Namaste JavaScript");
// }

// x();


//  //------------------------------     FIX THE ABOVE  PROBLEM --------------
// function x (){
//     for(let i = 1; i <= 5; i++){
//        setTimeout(function(){
//             console.log(i); // it will print 1 to 5 after 1 sec because of closure property of JS (let create a block scope for each iteration)
//         }, i * 1000);
//     }

//     console.log("Namaste JavaScript");
// }

// x();



// function x (){
//     for(var i = 1; i <=5; i++){
//         function close (x){ 
//             setTimeout(function(){
//                 console.log(x);
//             }, x * 1000);
//         }
//         close(i); // for every iteration a new copy of i is passed to close function
//     }
// }
// x();


// // ----------Example of closure in js------------( ADVANTAGES )-------------------
// function outest() {
//     var c = 20
//     function outer(b) {

//         function inner() {
//             console.log(a, b, c);
//         } 
//         let a = 22;
//         return inner;
//     }
//     return outer;
// }
// // outer()(); 
// let a = 30;
// var innerFunc = outest()("hello");
// innerFunc();



//------------- data hiding and privacy in js using closures-----------

// // Any body can access and modify the counter variable directly
// var counter = 0 ;
// function incrementCounter(){
//     counter++;
// }

// console.log(counter);
// incrementCounter();
// console.log(counter);
// incrementCounter();
// console.log(counter);

//-----------   but using closures we can make counter variable private --------------

// function counter(){

//     var count = 0;

//     return function incCount(){
//         count++;
//         console.log(count);
//     }
// }

// // console.log(count); // error because count is not defined in this scope
// // // we cannot access count variable directly now

// var counter1 = counter();
// counter1();
// counter1();
// console.log ("new counter instance ");
// var counter2 = counter();
// counter2();


// // ------------------ Improving counter example-------------

// function C ounter(){
//     var count = 0;

//     this.incrementCounter = function (){
//         count++;
//         console.log(count);
//     }

//     this.decrementCounter = function (){
//         count--;
//         console.log(count);
//     }
// }

// var counter1 = new Counter();
// counter1.incrementCounter();
// counter1.decrementCounter();




//----------------------- DISADVANTAGES OF CLOSURES ) ------------------------------
// --- OVERCONSUMPTION OF MEMORY 
// THOSE CLOSED VARIABLE ARE NOT GARBAGE COLLECTED UNTIL THE CLOSURE IS ALIVE ACCUMULIATING ALOT OF MEMORY
// MEMORY LEAKS CAN OCCUR IF CLOSURES ARE NOT MANAGED PROPERLY


//------------------ Closure and garbage collection in js ------------------

// function a (){
//     var x = 40;
//     return function b (){
//         console.log(x);
//     }
// }

// var y = a();
// y();

// here after execution of function a() the variable x should be garbage collected but because of closure property of JS
// the variable x is not garbage collected because function b() is still referencing it
// so as long as function b() is alive the variable x will not be garbage collected




// smartly garbage collection with closures in js

// function a (){
//     var x = 40 , z = 230;
//     return function b (){
//         console.log(x);
//     }
// }

// var y = a();
// y();


// here after execution of function a() the variable z will be garbage collected because function b() is not referencing it
// so as long as function b() is alive the variable x will not be garbage collected but z will be garbage collected





//------------------------ lecture 12 DEEP DIVE IN FUNCTIONS IN JS------------------------

// a(); // function hoisted here
// b(); // throws error because function expression is not hoisted (remains undefined untill it hits the actual line of code of function expression)

// // Function Statement aka Function Declaration
// function a (){
//     console.log("a is Called"); 
// }


// // Function Expression 
// var b = function (){
//     console.log("b is called");
// } 

// // Difference between function statement and function expression is hoisting 




// Anonymous Function 
// Anonymous function are used in a place where functions are used as a values 
// function (){

// } // -------> SyntaxError: Function statements require a function name


// Named Function Expression
// var c = function weeho(){
//     console.log(weeho); //---------> works fine because weeho is referencing the function itself
// }


// Weeho(); // -------> ReferenceError: Weeho is not defined   
// c(); // works fine because c is referencing the function


//-------------------------- First Class functions (first class citizens) in js --------------------------

 // The ability to use functions as values is known as first-class functions. 
// In JS functions are first class citizens means 
// 1. Functions can be stored in variables 
// 2. Functions can be passed as arguments to other functions
// 3. Functions can be returned from other functions
// 4. Functions can be stored in data structures like array , objects etc.


// function greet(param1){
//     console.log(param1);
// }

// greet(function (){
//     console.log("hi");
// })



// function greet(param1){
//     console.log(param1);
// }
// function xyz (){
//     console.log("hi");
// }
// greet(xyz);



// function greet(){
//     return function (){
//         console.log("hi");
//     }
// }
// console.log(greet());


// NOTE: In case of let and const they behave in the same way as let and const variable hoisting


//---------------------------- letcture 13 CALL BACK FUNCTION IN JS -----------------------------


