// promise is in 3 states
// pending, fulfilled, rejected.

// promise is ntg but "container for future values"
                   // or //
// promise is an object representing the eventual 
 // complition of an asynchronous operation.

const card = ["pants", "t-shirts",'kurthas']

// const promise = createOrder(card);

// promise.then(function(orderId){
    // proceedToPayment(orderId);
// });

createOrder(card,function(orderId){
    proceedToPayment(orderId,function(paymentInfp){
        showOrderSummary(paymentInfp,function (){
            updateWalletBalance();
     });
   });
});
  

createOrder(card)
.then((orderId) =>  proceedToPayment(orderId))
.then((paymentInfp) =>   showOrderSummary(paymentInfp))
.then((paymentInfp) =>  updateWalletBalance(paymentInfp));