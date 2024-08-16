// Immediately Invoked Fuction Expressions (IIFE)


(function chai (){
    console.log (`DB CONNCTED`);
    
})() ;                // by using () parenthis ,we can do immediate insted of using chai


// ()()    // jo fuction execute immediatly 
             //   (or)
       // global scope ke variables or declaration ko remove karne ka {interview purpose ans}


( (name) =>{
    console.log(`DB CONNCTED TWO $ {name}`)
}) ('prany')


// 7th line => (;) is most important to execute 15th code

