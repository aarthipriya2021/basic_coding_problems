// Create a function that receives an array of numbers and returns an array containing only the positive numbers


let arr = [-4, 0, -6, 3, 6, -1]

function positiveNums(arr) {
    let positive = [];
    for (let i = 0; i < arr.length; i++) {
       let el = arr[i];
       if(el >= 0){
        positive.push(el)
       }
        
    }
    return positive;
}

// positiveNums();
console.log("positive numbers:", positiveNums(arr))


// another method

// function positiveNums(arr) {
//     return arr.filter(el => el >= 0)
// }

// console.log("positive numbers:", positiveNums(arr))