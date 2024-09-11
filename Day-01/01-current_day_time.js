// Write a JavaScript program to display the current day and time in the following format.
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function dayTime(params) {
  let date = new Date();

  // getting today
  let day = weekdays[date.getDay()];
  console.log("Today is:", day);

  // getting time

  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  let ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12 || 12;

  console.log(`${hours} ${ampm}: ${minutes}: ${seconds}`);
}
dayTime();
