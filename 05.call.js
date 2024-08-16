function setUsername(setUsername){
    // complex DB calls 
    this.setUsername= Username
    console.log("called");
}

function createUser  (Username,email, passward){
    setUsername.call( this,Username)

    this.email = email
    this.passward = passward
}

const chai = new createUser("chai", "cahi@fb.com", "123")
console.log(chai);