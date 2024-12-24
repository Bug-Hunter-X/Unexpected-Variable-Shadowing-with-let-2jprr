function myFunction() {
  let x = 10;
  if (true) {
    let x = 20; // This 'x' is a new variable, not the one in the outer scope
    console.log(x); // Output: 20
  }
  console.log(x); // Output: 10
}