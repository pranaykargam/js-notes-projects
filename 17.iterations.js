for (let index = 0; index <10; index++){
    const element = index;
    console.log(element);
}

// for (let i=0; i<=10; i++){
// console.log (`Outer loop value: ${i});
//     for(letj=0; j<=10; j++){

//     }

let myArray = ["cool", "king", "hitman"]
console.log(myArray.length);

for (let index= 0; index< myArray.length; index++){
    const element = myArray[index];
    console.log(element);
}

// break  and continue 

for (let index = 1; index<=20; index++){
    if(index ==5){
        console.log('detected 5')
        break
    }
    console.log('value of i is ${index}');
}