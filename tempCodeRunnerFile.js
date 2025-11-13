function greet(){
    return function xyx(){
        console.log("hello");
    }
}
console.log(greet());