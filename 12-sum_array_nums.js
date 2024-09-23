// Calculate the sum of numbers in an array of numbers
// Calculate the average of the numbers in an array of numbers


let arr = [1, 2, 3, 4, 1, 1, 2];

function sumOfArrayNos(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}


console.log("sum of numbers in an array:", sumOfArrayNos(arr));

function averageofArray(arr){
    let summation = 0;
    let n = arr.length;
    for(let j = 0; j < n; j++){
        summation += arr[j]
    }
    return summation / n;
}

console.log(" average of the numbers in an array:", averageofArray(arr));