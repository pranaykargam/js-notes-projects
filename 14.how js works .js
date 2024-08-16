// example 

let val1 = 10
let val2 = 5
function addNum (num1,num2)  {
    let total = num1 + num2
    return total
}
let result1 = addNum(val1,val2)
let result2 = addNum(10,2)
                            ++++++++++++++++

                            1.global execution (this)

                            2.Memory phase
                            val1 = undefined
                            val2 = undefined
                            addNum = defination
                            result1= undefine
                            result2= undefine

                            3.execution phase
                            val1= 10
                            val2= 5
                            addNum --------->//new variable environment + execution thread
                                                  // {delete}
                            result1= 15

                            +++++++++
                          **  call stack **

                          //  global execution ------->one(),two(),three()

                         // hint:last in first outerHeight
                                                     


