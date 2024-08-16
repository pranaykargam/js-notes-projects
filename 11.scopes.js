//scope is nothing but yaah se yaha thak "having some scope"

let a = 300 //if else ka bahar ko 'global scope' jaanta hai

 if (true){
    let a = 10
    const b = 20
    var c = 30   // in this var value only replecate ,other two are shown as errors 
    console.log("INNER:",a); // then it shows "INNER value is 10"and also 300 {block scope bolte}
}




console.log(a); //in this conditions a=300 only
// console.log(b);
// console.log(c);



function One(){
    const username = "pranay"
     function two(){
        const Website = "Youtube"
        console.log(username);
     }
     console.log(Website);

     two()
}

//one()

if(true) {
    const username = "pranay"
    if(username === "pranay") {
        const Website = "youtube"
        console.log(username + Website)

    }
   // console.log(Website); 
}

//console.log(username); 


// ++++++++++++++ intresting ++++++++++

addone(5)
function addone(num){
    return num + 1
}


const addTwo = function(num){
    return num + 2
}