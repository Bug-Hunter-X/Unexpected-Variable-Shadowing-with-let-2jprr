function myFunction() {
  let outerX = 10;
  if (true) {
    let innerX = 20; // Use a different variable name to avoid shadowing
    console.log(innerX); // Output: 20
  }
  console.log(outerX); // Output: 10
}