// WHILE LOOP

/*for (let i = 0; i <= 5; i++) {
  console.log(i);
}

let w = 0;
while (w <= 5) {
  console.log(w);
  w++;
}*/

const target = Math.floor(Math.random() * 10);
console.log(target);

let guess = Math.floor(Math.random() * 10);
console.log(guess);

while (guess !== target) {
  // se till att villkoret kan bli false annars kommer vi ha
  // en infinite loop
  console.log("Guess: " + guess);
  guess = Math.floor(Math.random() * 10);
}
console.log(`Target: ${target}, Guess: ${guess}`);
