// Reverse an Array

let arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

function reverseArray(arr){
    let reverse = [];
    for(let i = arr.length - 1; i >= 0; i--){
        reverse.push(arr[i])
    }
    console.log(reverse);
    
}
reverseArray(arr);

// reduce method
let reverseArr = []

reverseArr = arr.reduce((acc, item) => [item].concat(acc));
console.log(reverseArr);
