// NOTE: dummy example only to understand Promise

//createOrder, proceedToPayment, showOrderSummary,updateWallet

const shoppingCart = ["stilletos" , "bags" , "pants", "kurtas"];

createOrder(shoppingCart)
  .then((orderId) =>{
    console.log(orderId);
    return orderId;
  })
  .then((orderId) => proceedToPayment(orderId))
  .then((paymentInfo) => {
    console.log(paymentInfo);
    return showOrderSummary(paymentInfo)
   })
  .then((summary)=> {
    console.log(summary);
    return updateWallet(summary);
   })
   .then((walletStatus) => console.log(walletStatus))
  .catch((err)=> console.log(err.message))

function createOrder(shoppingCart){
    //create order
    //validate cart
    //orderId
    return new Promise((resolve , reject)=>{
        if(!validateCart(shoppingCart)){
            const err = new Error("Cart is not valid");
            reject(err);
        }
        // create random orderId (logic for create order)
        const orderId = Math.floor(Math.random() * 1000) + 1; 
        if(orderId){
            setTimeout(()=>{
                resolve(orderId);
            },2000)
        }

    });
}

function proceedToPayment(orderId){
    // check orderId valid or not
    //payment status 
    return new Promise((resolve , reject) =>{
    // orderId validation
    if(orderId < 1 || orderId > 1000){
        const err = new Error("Order not found!");
        reject(err);
        return;
    }
    // 2. Payment processing simulation
    setTimeout(()=>{
            resolve("Payment successful");
        }, 2000)
    });
}

function showOrderSummary(paymentInfo){
    return new Promise((resolve , reject) =>{
        if(paymentInfo !== "Payment successful"){
            reject(new Error("No Order Found"));
            return;
        }
        resolve("found");
        
    })
}

function updateWallet(summary){
    return new Promise((resolve , reject) =>{
        if(summary !== "found"){
            reject(new Error("wallet not updated"));
            return;
        }
        resolve("wallet update Successfully");
    })
}

function validateCart(shoppingCart){
    return Array.isArray(shoppingCart) && shoppingCart.length > 0;
}