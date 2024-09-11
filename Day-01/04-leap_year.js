function leapYear(year) {
    let leap = (year % 4 === 0) || (year % 400 === 0) || (year % 100 === 0)  ? "Leap year" : "Not a leap year";
    console.log(leap);
    
}

leapYear(1994);
leapYear(2023);
leapYear(2018);
leapYear(2020);
leapYear(2027);
leapYear(2024);