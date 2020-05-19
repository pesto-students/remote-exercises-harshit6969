function validateSides(side1, side2, side3){
  return side1 + side2 > side3;
}

function isTriangle(a, b, c) {
  return(validateSides(a, b, c) && validateSides(b, c, a) && validateSides(a, c, b));
}

export {
  isTriangle,
};
