// Approximate Pi using the Leibniz formula
function calculatePi(iterations) {
    let pi = 0;
    let divisor = 1;
  
    for (let i = 0; i < iterations; i++) {
      if (i % 2 === 0) {
        pi += 4 / divisor;
      } else {
        pi -= 4 / divisor;
      }
      divisor += 2;
    }
  
    return pi;
  }
  
  const iterations = 1000000; // the more iterations, the more accurate
  console.log("Approximated value of π:", calculatePi(iterations));
  