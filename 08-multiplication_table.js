// Print the multiplication table with 7
// Print all the multiplication tables with numbers from 1 to 10


function multiplicationTable() {
  // multiplication table for 7
  let n = 7;
  for (let i = 1; i <= 10; i++) {
    console.log(`${i} X ${n} = ${i * n}`);
  }

  // multiplication table from 1 to 10

  for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
      console.log(`${j} X ${i} = ${i * j}`);
    }
    console.log("--------------------")
  }
}
multiplicationTable();
