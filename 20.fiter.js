// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter((num) =>{return num>4} )   // {} when we use this brackets we have 
//                                                  // we have to add "return" before the condition
// console.log(newNums);

// const newNums= myNums.map( (num) =>{ return num + 10})
// console.log(newNums);


// const newNums = myNums
//                 .map((num) => num *10)
//                 .map ((num) => num+1)
//                 .filter((num) => num >=40) //filter is nothing but jo true hai hoi pass hoga
// console.log(newNums);




// const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(fuction (acc,currval) {
//     console.log(`acc:${acc} and currval: ${currval}`);
//     return acc + currval
// }, 5)
// console.log(myTotal);

//             or //


// const myTotal = myNums.reduce((acc,curr)=>acc+curr,0)
// console.log(myTotal);


const shoppingCart = [
    {
        itemName: "HTML course",
        price:499
    },

{
    itemName: "CSS course",
    price :999
},

{
    itemName: "js course",
    price:2999
},

{
    itemName: "REACT course",
    price:3999
},
]

 const priceTopay = shoppingCart.reduce((acc,item) =>acc + item.price,0)
 console.log(priceTopay);




 











