let arrayNo = [1,8,3,-5,3,4]
let arrayString = ["python", "js", 'html', 'css', 'aws', 'typescript']

function arrayPrograms() {
    // Get the First and Last Item (number) in an Array
    let firstItem = arrayNo[0];
    let lastItem = arrayNo[arrayNo.length - 1];
    console.log("First Item: " + firstItem);
    console.log("last Item: " + lastItem);


    // Get the First and Last Item using shift and pop in an Array
    let f = arrayNo.shift(0)
    let l = arrayNo.pop()
    console.log("First Item: " + f);
    console.log("last Item: " + l);


    // Get the First and Last Item (string) in an Array
    let first = arrayString[0];
    let last = arrayString[arrayString.length - 1];
    console.log("First Item: " + first);
    console.log("last Item: " + last);
    
}
arrayPrograms()