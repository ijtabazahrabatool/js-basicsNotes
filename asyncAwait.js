/*
what is async?
what is await?
how async await work behind the scenes?
Examples of using async/await?
Error Handling
Interviews
Async await vs Promise.then / .catch 
*/


// // NON promise example ,return as a promise always
// // always return a promise
// async function getData(){
//     return "hello";
// }

// const dataPromise = getData();

// dataPromise.then((res)=> console.log(res));


// // return promise async always
// const p = new Promise((resolve , reject) =>{
//     resolve("Promise resolved Value");
// }); 
// const dataPromise2 = getData2();

// function getData2(){
//     return p;
// }

// dataPromise2.then((res)=> console.log(res));


//------------------------------------------ USING ASYNC WITH AWAIT --------------------------------------------
// async and await combo is used to handle promises
 

// const p = new Promise((resolve , reject) =>{
//     resolve("Promise resolved Value");
// }); 

// function getData(){
//     p.then((res) => console.log(res));
// }

// getData(); 


// Now use async await to handle the above 
// use await infront of the pormise
//Insted of writing like above getData write like below

// await can only be used inside a async function
// async function handlePromise(){
//    const val =  await p; 
//    console.log(val);

// }
// handlePromise();  

// NOTE: await is a keyword that can only be used inside a async function 
  

//------------------------------------------DIVING DEEP INSIDE AYSNC / AWAIT --------------------------------------

// const p1 = new Promise((resolve , reject) =>{
//     setTimeout(() =>{
//         resolve("Promise resolved Value");

//     }, 10000 )
// }); 


// const p2 = new Promise((resolve , reject) =>{
//     setTimeout(() =>{
//         resolve("Promise resolved Value");

//     }, 20000  )
// }); 


// //older way
// function getData(){
//     // JS engine will not wait for promise to be resolved
//     p.then((res) => console.log(res));
//     console.log("Hello");
// }

// getData();

//Note: if the second promise of 5 sec and first one is 10 sec then it will wait only for 10 sec then all the promise will be printed
//NOte: if the second promise is 10 sec and first is 5 sec , it will print first promise after 5 sec and then the second promise when it's time 10 sec completed 

// async function handlePromise(){
//     console.log("hoho")
//     // JS engine waiting for promise to be resolved (appears to be waiting (time , tide and js wait for none ;)   ))
//    const val =  await p1; 
//    console.log("Hello");
//    console.log(val);
//     const val2 =  await p2; 
//    console.log("Hello2");
//    console.log(val2);

// }
// handlePromise();

// when handlePromise goes inside call Stack it will be start executing line by line (awk js is a single sync thread language)
// as soon as it reaches await the handlePromise execution   SUSPENDED for the time being (doesn't block main thread)
// handlePromise wait for p1  to be resolved then  it will move again into callStack  (start from where it left )
// for p2 again suspend the execution and come back when p2 resolved (only happends in cases of async )
////IN short JS engine is not waiting for promise to be resolved 



//---------------------------------- Using fetch with promise ------------------------------------------------
// const API_URL = "https://api.github.com/users/akshaymarch7";
// const API_URL = "https://api.gitdfajdajflda";


// function start form here


// async function handlePromise() {
// fetch is a promise when resolved gives response
// fetch() => Response.json() => jsonValue (json is also a promise)

//   const data =  await fetch(API_URL);
//   const jsonValue = await data.json();
//    console.log(jsonValue); 

// written like below can also write like above 
// handling error also
// try{
//     fetch(API_URL).then((res) => res.json()).then((res) => console.log(res));
// }
// catch(err){
//     console.log(err);
// }
// } 

// handlePromise();
   

// can also do in traditional way(then no need to write try and catch)
// handlePromise().catch(err => console.log(err)); 

//----------------------------------------------------PROMISE API -----------------------------
const p1 = new Promise((resolve , reject) =>{
    //etTimeout(()=>resolve("p1 successful"), 3000);
    setTimeout(()=>reject("p1 fail"), 5000);

})

const p2 = new Promise((resolve , reject) =>{ 
   // setTimeout(()=>resolve("p2 successful"), 1000);
    setTimeout(()=>reject("p2 fail"), 1000);

})

const p3 = new Promise((resolve , reject) =>{
    //setTimeout(()=>resolve("p3 successful"), 2000);
    setTimeout(()=>reject("p3 fail"), 3000);

})

// Promise.all([p1,p2, p3])
// .then((res) => console.log(res))
// .catch((err) => console.error(err));

// Promise.allSettled([p1,p2, p3])
// .then((res) => console.log(res))
// .catch((err) => console.error(err));

// Promise.race([p1,p2, p3])
// .then((res) => console.log(res)) 
// .catch((err) => console.error(err));

Promise.any([p1,p2, p3])
.then((res) => console.log(res))
.catch((err) => {
    console.error(err);
    console.log(err.errors); // to show on browser console 
});