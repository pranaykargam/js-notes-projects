// const arr = [1, 2, 3, 4, 5]
// for(const num of arr){
//     console.log(num);
// }

// const greetings = "Hellow world!"
// for (const greet of greetings){
//  console.log(`Each char is ${greet}`)
// }

// // maps

// const maps = new Map ()
// map.set('IN', "india")
// map.set('USA', "united states of india")
// map.set('FR', "France")

// console.log(map);

// for(const [key,value ]of map){
//     console.log(key,':-',value);
// }
// // const myObject = {
// //     'game1': 'NFS',
// //     'game2': 'spiderman',

// // }



// const myObject = {
//     js : 'javascript',
//     cpp : 'c++',
//     rb : 'ruby',
// }

const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach ( fuction (val) {
//   console.log(val);
     
// } )

coding.forEach( (item) =>{
    console.log(item);
} )

function printMe (item){
    console.log(item);
}

coding.forEach(printMe)

coding.forEach ( (item,index,arr) =>{
    console.log(item,index, arr);
} )

const myCoding = [
    {
    languageName: "Javascript",
    languageFileName : "js"
    },

    {
        languageName: "Java",
        languageFileName : "java"
        },

        {
            languageName: "python",
            languageFileName : "python"
            },
       
]







