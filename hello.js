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

// // setTimeout takes the callback function and timer and store it in a seperate space
// // it doesn't not wait and this gives the power of asynchronous in js
// setTimeout( function (){
//     console.log("timer");
// }, 6000);

// function x(y){
//     console.log("x");
//     y(); 
// }
// x(function y(){
//     console.log("y");
// })

// // every thing executed through call stack 
// // if any operation block the call stack that is known as blocking the main thread
// // if a program x takes 20 to 30 sec to execute at that time call stack won't be able to execute any other function thati is known as blocking
// // to avoid blocking we use asynchronous programming in js like setTimeout 



// //------------------- DEEP ABOUT EVENT LISTENER
// document.getElementById("clickMe").addEventListener("click", function xyz(){
//     console.log("Button Clicked");
// });


//-----------CLOSURE DEMO WITH EVENT LISTENER IN JS
// function enclose(){
// let count = 0;
// document.getElementById("clickMe")
// .addEventListener("click", function xyz(){
//     console.log("Button Clicked", ++count);
// })
// }
// enclose();



//--------------------GARBAGE COLLECTION AND REMOVE EVENT LISTENER IN JS

//event listener takes alot of memory space it forms closure even when the call stack is empty it doesn't free up the memory space
// that's the main reason to remove event listener when not needed



//--------------------------LECTURE 14 setTimeout Trust issues --------------------------
// console.log("Start");

// setTimeout(function cb(){
//     console.log("callback");
// }, 5000);
// console.log("End");

// let start = new Date().getTime();
// let end = start;
// while(end < start + 10000){
//     end = new Date().getTime();
// }

// console.log("While loop expires");




//example of setTimeout with 0 ms
// console.log("Start");

// setTimeout(function cb(){
//     console.log("callback");
// }, 0);
// console.log("End");

//even if the timer is 0 ms the callback function still need to go through the call back queue
// and wait for the call stack to be empty that's why callback will be executed after "End" is printed



//----------------------------------- Lecture 15 Higher Order Functions in JS -----------------------------

// function x (){
//     console.log("x is callback function");

// }
// function y(x){
//     x();
//     console.log("y is higher order function");
// }


//---------------------- Below example has a problem of repetition of code ----------------------


// const radius = [3, 4, 6, 2];

// const calculateArea = function (radius){
//     const output = [];
//     for(let i = 0; i < radius.length; i++){
//         output.push(Math.PI * radius[i]* radius[i]);
//     }
//     return output;
// };
// console.log(calculateArea(radius));

// const calculateCircumference = function (radius){
//     const output = [];
//     for(let i = 0; i < radius.length; i++){
//         output.push(2 * Math.PI * radius[i]);
//     }
//     return output;
// }
// console.log(calculateCircumference(radius));


// const calculateDiameter = function (radius){
//     const output = [];
//     for(let i = 0; i < radius.length; i++){
//         output.push(2 * radius[i]);
//     }
//     return output; 
// }
// console.log(calculateDiameter(radius));




// //-------------------- problem solution ----------------------------

// radius = [3 ,4 ,5 ,7];

// const area = function (radius){
//     return Math.PI * radius * radius;
// }

// const circumference =  function (radius){
//     return 2 * Math.PI * radius;
// }

// const diameter = function (radius){
//     return 2 * radius;
// }
// // Array.prototype.calculate function will be in a shared memory box where all the arrays can access it 

// Array.prototype.calculate = function (logic){
//     const output = [];
//     for(let i = 0; i < this.length; i++){
//         output.push(logic(this[i]));
//     }
//     return output;
// }

// console.log(radius.calculate(area));
// console.log(radius.calculate(circumference));
// console.log(radius.calculate(diameter));



//--------------------- lecture 16 Map , filter , reduce function in JS -----------------------------

// //--------------------- MAP FUNCTION IN JS
// const arr = [ 5 , 1 , 3 , 2, 6];

// // Transformation 
// // Double - [10 , 2, 6, 4, 12]
// //Triple - [15 , 3, 9, 6, 18]
// //Binary - ["101" , "1" , "11", "10", "110"]
// // map function helps to transform an array 
// const double = function (x){
//     return x * 2;
// }
// const binary = (x) =>{
//     return x.toString(2);
// }
// const output = arr.map(double);
// console.log(output);

// const output2 = arr.map((x) => x * 3);
// console.log(output2);

// console.log(arr.map(binary)); 



// //------------------------------ FILTER FUNCTION IN JS
// const arr = [5 , 2, 4, 1, 56, 41, 23 , 12];


// const oddFilter = arr.filter( (x) => x % 2);
// console.log(oddFilter);

// const evenFilter = arr.filter((x) => x % 2 ===  0);
// console.log(evenFilter);


//-------------------------------- Reduce Function in JS

// const arr = [5 , 1, 3, 2, 6];

// sum or arr

// finding sum using non functional programming

// function findSum (arr){
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++){
//         sum = sum + arr[i];
//     }

//     return sum;
// }
// console.log(findSum(arr));


// //finding sum using reduce functional programming

// const sumOutput = arr.reduce (function (accumulator , currentValue){
//     accumulator = accumulator + currentValue;
//     return accumulator;
// }, 0)

// console.log(sumOutput); 

//-----------------------------------------------------------------

// function findMax (arr){
//     let max = arr[0];
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i]> max) max = arr[i];
//     }
//     return max;
// }
// console.log(findMax(arr));

// // finding max using reduce
// const maxOutput = arr.reduce (function (accMax , currentValue){
//     if(accMax < currentValue) {
//         accMax = currentValue;
//     }
//     return accMax;
// }, arr[0]);

// console.log(maxOutput);


//--------------------Complex examples of map , reduce , filter

// const users = [
//     {firstName : "akshay", lastName : "saini" , age : 26},
//     {firstName : "arnav", lastName : "raizada" , age : 40},
//     {firstName : "virat", lastName : "chuvan" , age : 35},
//     {firstName : "ishan", lastName : "bhooslay" , age : 26}
// ];  

// const output = users.map(x => x.firstName + " " + x.lastName)
// console.log(output);

//-------------Reduce example
//----------- Question how many user have a particular age 

//{26: 2 , 40 : 1, 35 : 1 }

//---------- In simple way

// const countAge = {};

// for(let i = 0; i < users.length; i++){
//     const age = users[i].age;

//     if(countAge[age]) countAge[age] = countAge[age] + 1;
//     else countAge[age] = 1;
    
// }
// console.log(countAge);


// //------------ now using reduce
// const countAge = {};
// const output = users.reduce(function (acc , curr){
//     if(acc[curr.age]) acc[curr.age] = acc[curr.age] + 1;
//     else acc[curr.age] = 1;
//     return acc;
// }, {})

// console.log(output);


//------------------------- Filter Example
//------------------------------First name of all people whose age is less then thirty
// ----------------- in simple 
// let lessAge = (users) => {
//     const ageList = [];
//     for(let i = 0; i < users.length; i++){
//         if(users[i].age < 30) ageList.push (users[i].firstName);
//     }
//     return ageList;
// }

// console.log(lessAge(users));

// //---------------- using filter and map
// const ageList = users.filter((x) => x.age < 30).map((x) => x.firstName); 
// console.log(ageList);

// //---------------- can achieve with reduce
//  const output = users.reduce(function (acc , curr){
//     if(curr.age < 30) acc.push (curr.firstName);
//     return acc;
//  }, [])
// console.log(output);


//---------------------------------------------SEASON 2 ---------------------------------------------------------------

// ----------------------------------lecture 1  callBack (good part , bad part of callback) -----------------------------

// console.log("Aoa");
// setTimeout(() => console.log("Java Script") , 5000);
// console.log("Season2")

// this below is the example of call back hell (unmaintainable and unreadable ) , grows horizontally  Also known as "PYRAMID OF DOOM"
// const cart =  ["heels" , "baggy pants" , "kameez"];
 
// api.createOrder(cart ,  function (){ 

//     api.proceedToPayment(function (){

//         api.showOrderSummary(function (){

//             api.updateWallet()
//         })

//     })
// })

 
// //------------------------------------ Inversion of control(loose controll over callback functions)----------------------
// const cart =  ["heels" , "baggy pants" , "kameez"];
 
// api.createOrder(cart ,  function (){ 

//     api.proceedToPayment()
// })

// see paper notes for more   


//--------------------------------------------LECTURE 2 PROMISES --------------------------------------
//--------before promises how things works

// const cart =  ["heels" , "baggy pants" , "kameez"];

 // both below api are asyncronous and dependend on each other 
// 1) createOrder(cart); // orderId return
// 2) proceedToPayment(orderId); 

//Not good
// createOrder(cart , function (){
//     proceedToPayment(orderId);
// })


//------------ problem solution for IOC------
// assume promise is nothing but a data value 
// create order will return object with data (some undefined property )
//{data: undefined} //------this is promise
// after some time the pass(few seconds let's say ) the promise data will fill automatically
// {data: orderDetails } 
// after data the promise object will attach with the callback function automatically

// // below code is better then above
// const promise = createOrder(cart); 

// promise.then(function (orderId){
//     proceedToPayment(orderId);
// });


// // reason : In previous we were blindly trusting  create order api (we were passing callback function to another funciton)
// //and in the second case we are attaching call back function to a promise object (it gives guarantee that whenever there data inside promise object then it will call  callback funciton )
// promise call callback function only once , it can  either be succes or failure
// only three states in promise(pending ,  fullfilled , rejected)
//promise objects are immutable 
//---------------------------------------- DEEP Dive in PROMISES -------------------------------
// fetch an api given by browser to make external calls

// const GITHUB_API = "https://api.github.com/users/akshaymarch7"
// const user = fetch(GITHUB_API);
// console.log(user);

// user.then(function (data){
//     console.log(data);
// })

//-------------------------------------- PROMISE also helps in solving pyramid of doom -----------------------------
// promise resolve issure of callback hell using promise chaning
// callback hell below

// const cart = ["shoes" , "pants" , "kurta"];

// createOrder(cart , function (orderId){
//     proceedToPayment(orderId , function(paymentInfo){
//         showOrderSummary(paymentInfo , function(){
//             updateWalletBalance();
//         });
//     });
// });

// promise chaining  (when we are chaning always return prmomise)
// createOrder(cart).then(function (orderId){
//     return proceedToPayment(orderId);
// })
// .then(function (paymentInfo){
//     return showOrderSummary(paymentInfo);
// })
// .then(function(paymentInfo){
//     return updateWalletBalance();
// })


// // above can also written as
// createOrder(cart).then(orderIdv => proceedToPayment(orderId))
// .then(paymentInfo => showOrderSummary(paymentInfo))
// .then(paymentInfo => updateWalletBalance());

//------------------------------ Lecture 3 CREATING PROMISES -----------------------------------------------

// const cart = ["shoes" , "pants" , "kurtas"];
const cart1 = [];

createOrder(cart)
    .then(function(orderId){
        console.log(orderId);
        return orderId; 
    })
    .then(function (orderId ){  
        return proceedToPayment(orderId);
    })
    .then(function(paymentInfo){
        console.log(paymentInfo);
    })
    .catch(function (err){
        console.log(err.message);
    });

// above is the consumer part below is the producer part
// resolve and reject are functions given by js to built promise 
function createOrder(cart){
    const pr  = new Promise(function (resolve , reject){
        //create order
        //validate cart
        //order Id
        if(!validateCart(cart)){
            const err = new Error("cart is not valid");
            reject(err);
        }
        // logic for createOrder
         const orderId = "12345";
         if(orderId){
            setTimeout(function(){
                resolve(orderId);
            } , 5000) 
         }
 
    })

    return pr;
}

function proceedToPayment(orderId){
    ///
    return new Promise(function (resolve , reject){
        resolve("Payment successfull"); 
    })
}
function validateCart(cart){
    return Array.isArray(cart) && cart.length > 0;
}

// in the scenerio we want to proceed to payment even if the cart is failed (a case where there is promise chaining of 20 and we still want to move on so we put the catch () below the one we only want to check )
// if we put in the end then it's will catch and print error if any one of the promise failed
// below is the example

createOrder(cart1)
    .then(function(orderId){
        console.log(orderId);
        return orderId; 
    })    .catch(function (err){
        console.log(err.message);
    })
    .then(function (orderId ){  
        return proceedToPayment(orderId);
    })
    .then(function(paymentInfo){
        console.log(paymentInfo);
    });