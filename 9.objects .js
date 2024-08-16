// object literals

const MySym = Symbol("key1")
const JsUser = {
    name:"pranay",
    "full name":"pranay kargam",
    MySym:"mykey1",
    age:18, 
    location:"nirmal",
    email:"pranaykargam@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["monday","saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser.["full name"])
console.log(JsUser.[MySym])

JsUser.email = "pranay@gtpppp"
Object.freeze(JsUser)
JsUser.email = "pranay@gmail...com"
console.log(JsUser);

JsUser.greetingTwo= function(){
    console.log("Hello Js user ${this.name}")
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());



//objects part2

//const tinderUser=new object()
const tinderUser= {}

tinderUser.id="123abc"
tinderUser.name="dhoni"
tinderUser.isLoggedIn=false
// console.log(tinderUser);

const regularUser={
    email:"pranaykargam@gmail.com",
    fullname:{
        userfullname:{

        }
    }
}

//console.log(regualrUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1,obj2}
const obj3 = Object.assign({}, obj1,obj2,obj4)

const obj3 = {...obj1, ...obj2}
console.log(obj3);

const users = [
    {
        id:1,
        email:"pranay123@gmail.com"
    }
]

//most importent in projects 

users[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));  //less used in the projects
console.log(tinderUser.hasOwnproperty('isLogged'))



const course = {
    coursename:"js in hindi",
    price:"999",
    courseInstractor:"pranay"
}

//course.courseInstractor

const{courseInstractor} = course

//console.log(courseInstractor);
console.log(instractor)


//{
  //  "name":"pranay",
   // "coursename":"js in hindi",
  //  "price":"free"
//}














