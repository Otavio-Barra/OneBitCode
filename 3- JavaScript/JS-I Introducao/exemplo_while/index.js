let velocity = 80;

while (velocity > 0) {
  console.log("Current speed is " + velocity);
  velocity -= 20;
  console.log("decrement -20 in speed");

  if (velocity === 40) {
    break;
  }
}

console.log("parou");
