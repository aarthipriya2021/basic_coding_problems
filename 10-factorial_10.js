// Calculate 10!

function factorial(){
    let prod = 1;
    for(let i = 1; i <= 10; i++){
        prod *= i;
    }
    console.log("factorial of 10: ", prod);
    
}

factorial();