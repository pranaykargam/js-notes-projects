const user = {
    username: "pranay",
    price : 999,

    welcomeMessage :function() {
       console.log (`${this.username},welcome to website`);  //"this" means current constant between the brackets 
       console.log(this);
    }
}

user.welcomeMessage()
user.username = "dhoni"
user.welcomeMessage()

console.log(this);

function chai (){
    let username = "pranayyy"
    console.log(this.username);  // under fuctions "this" will not use 
}


const chai = function () {
    let username = "pranayy"
    console.log(this);
}




const addTwo = (num1,num2) =>{
    return num1 + num2
}

(addTwo(3,4))

//  {}=> curley used then "return key word likh nah padega"
//  ()=> parenthises used then "return key word nah use karna"



