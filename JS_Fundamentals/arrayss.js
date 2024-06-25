// function check_even_or_not (num) {
//     if(num % 2 ==0)
//         return true;
//     else
//        return false;
// }

Array.prototype.check_even_or_not = function () {
    for(let i=0;i<this.length;i++){
        if(this[i] % 2 ==0){
            console.log("Even")
        }
        else{
            console.log("Not even")
        }
    }
};


let num = [1,2,3,4,5];

// num.check_even_or_not();

num.func();

// let arr = [
//     {
//         "name" : "kahih",
//         id : 1,
//         roll : 456,
//         collegename : "LPU"
//     },
//     {
//         "name" : "kahih bansal",
//         id : 2,
//         roll : 1456,
//         collegename : "LPU-2"
//     }
// ]

// // arr[1]["roll"]
// // arr[1].roll
// console.log(arr[1].roll)