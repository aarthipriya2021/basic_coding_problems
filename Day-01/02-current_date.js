// Write a JavaScript program to get the current date.
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

function currentDate() {
  let today = new Date();

  let date = today.getDate();
  let month = today.getMonth() + 1;
  let year = today.getFullYear();

  // Add leading zero if the day is less than 10
  date = date < 10 ? "0" + date : date;

  // Add leading zero if the month is less than 10
  month = month < 10 ? "0" + month : month;

  let mm_dd_yyyy__dash = `${month}-${date}-${year} `;
  let mm_dd_yyyy__slash = `${month}/${date}/${year} `;
  let dd_mm_yyyy__dash = `${date}-${month}-${year} `;
  let dd_mm_yyyy__slash = `${date}/${month}/${year} `;

  console.log("mm-dd-yyyy:", mm_dd_yyyy__dash);
  console.log("mm/dd/yyyy:", mm_dd_yyyy__slash);
  console.log("dd-mm-yyyy:", dd_mm_yyyy__dash);
  console.log("dd/mm/yyyy:", dd_mm_yyyy__slash);
}
currentDate();
