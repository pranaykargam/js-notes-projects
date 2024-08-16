const month = 3

switch (month){
    case 1:
        console.log("january");
        break;

        case 2:
            console.log("feb");
            break;                  // //if we dont put break in the cases then it execute 
                                     // no of cases 
                                            // break is most imp 

            case 3:
                console.log("march");    
                break;  

                case 4:
                    console.log("april");
                    break;

        default:
            console.log ("default case match");
            break;  
        }  


                           // +++++++++++++++++++++ //

    // falsy values 

   //(false,0,-0, BigInt, 0n, "",null,undefined,NaN)               ||(imp for interview)||
    //    {above all are shows falsy values , it shows dont have user name}
    // except above all shows user


    // truthy values 
     
    // "0" , 'false' , " " , {}, [], fuction(){}

 
  const userEmail =   "sunnykargam7781"
    
   if (userEmail) {
    console.log ("yeah!found it");
   } else{
    console.log("dont have user name")
   }

   const emptyObj = {}
   if (Object.keys(emptyObj).length ===0){
      console.log ("object is empty");
   }


        // Nullish Coalescing Operator (??): null, undefined

        let val1;
        val1 = 5 ??10
        val1 = null?? 10
        val1 = undefined ?? 15
        val1 = null ?? 12 ?? 15

        console.log(val1);

        // Terniary Operator

        // condition ? true : false

        const iceTeaPrice = 100
        iceTeaPrice >= 80 ? console.log("less than 80") : console.log ("more than 80")

   