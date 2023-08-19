function regularOddEven(a) {
    if (a % 2 === 0) {
      console.log("par");
    } else {
      console.log("impar");
    }
  }
  
  const arrowOddEven = (a) => {
    if (a % 2 === 0) {
      console.log("par");
    } else {
      console.log("impar");
    }
  };
  
  console.log(regularOddEven(2));
  console.log(regularOddEven(5));
  console.log(arrowOddEven(4));
  console.log(arrowOddEven(7));
  