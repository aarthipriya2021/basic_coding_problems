// Calculate the sum of odd numbers greater than 10 and less than 30

function sumOfOddNumbers(){

    let sum = 0;
    for(let i = 11; i < 30; i += 2){
        console.log(i);
        
        sum = sum + i;
    }
    console.log("sum of odd numbers: ", sum);
    
}
sumOfOddNumbers()