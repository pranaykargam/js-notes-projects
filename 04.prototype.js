function multiplyBy5(num){
    return num*5
}

multiplyBy5.power = 2

console.log ( multiplyBy5(5));
console.log ( multiplyBy5.power);
console.log ( multiplyBy5.prototype);
  

   //notes                   // function=========>

                            // array ===========>     object =======>   null

                              // string ==========>

     function createUser  (username,score) {
        this.username = username
        this.score = score
     }    
     
     createUser.prototype.increment = function(){
         this.score++                                  // this means (jis ne bulaya uska)
     }
                  
     createUser.prototype.printMe = function(){
        console.log(`price is ${this.score}`);         
    }

     const chai = new createUser("chai",25) // (new) new key word is vimp 
     const tea = createUser("tea",250)

     chai .printMe()


     // inheritance

     const User = {
        name: "chai",
        email: "chai@google.com"
     }

     const Teacher = {
        makeVideo:true
     }

     const TeachingSupport = {
        isAvailable:false 
     }

     const TASupport = {
        makeAssignment: 'JS Assighnment',
     __proto__:TeachingSupport
     }

     Teacher.__proto__= User


     // modren syntax

     Object.setPrototypeOf(TeachingSupport,Teacher)

     let anotherUsername = "ChaiAurCode    "
     String.prototype.trueLength = function(){
        console.log(`${this}`);
        console.log(`True lenghth is : ${this.trim().length}`);
     }

     anotherUsername.trueLength()
     "hitesh".trueLength()
     "iceTea".trueLength()





