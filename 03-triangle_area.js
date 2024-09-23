// Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.

function triangleArea(side1, side2, side3) {
  let perimeter = (side1 + side2 + side3) / 2;
  let area = Math.sqrt(
    perimeter *
      ((perimeter - side1) * (perimeter - side2) * (perimeter - side3))
  ).toFixed(2);

  console.log("Area of triangle - ", area);
}

triangleArea(5, 6, 7);
