let array = [1, 4, 6];
let fruits_array = [
  "mango",
  "banana",
  "apple",
  "pineapple",
  "pomegranate",
  "orange",
];

function specificValue(value) {
    for (let i = 0; i < fruits_array.length; i++) {
      if (value === fruits_array[i]) {
        return `${value} is in the array at index ${i}`;
      }
    }
    return `${value} is not in the array..`;
  }
  
  console.log(specificValue("apple")); // apple is in the array at index 2
  console.log(specificValue("grape")); // grape is not in the array..

// using "includes()" inbuilt method
// console.log(array.includes(value));
