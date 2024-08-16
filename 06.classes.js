// ES6

class User {
    constructor (username, email, passward){
        this.username = username;
        this.email = email;
        this.passward= passward;

    }

    encryptPassward (){
        return `${this.passward}abc`
    }

     changeUsername (){
        return `${this.changeUsername.uppercase()}abc`
    }

}

const chai = new User ("chai", "chai@gmail.com","123")

console.log(chai.encryptPassward())

// behind the scene 

function User(username, email, passward){
    this.username = username;
    this.email = email;
    this.passward= passward;
}

user.prototype.encryptPassward = function(){
    return `${this.passward}abc`
}

const chai = new User ("chai", "chai@gmail.com","123")

console.log(chai.encryptPassward());
console.log(chai.changeUsername());