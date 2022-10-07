// Objects
// property = key + value, username: "Helena"

const numbers = {
  100: "one hundred",
  15: "fifteen",
  "55 hej": "hej",
};

//console.log(numbers.100)

console.log(numbers[100]);

//let 55hej = fjwirhe;

console.log(numbers["55 hej"]);

const palette = {
  pink: "#FF76C0",
  blue: "#76DEFF",
  purple: "#AA76FF",
};

const paletteTwo = palette;

//console.log(paletteTwo, palette);

paletteTwo.green = "#84F07B";
//console.log(paletteTwo, palette);

let nums = [1, 2, 3];
let mysteryNum = [1, 2, 3];

console.log(nums === mysteryNum);
console.log(nums == mysteryNum);

let moreNums = nums;
console.log(nums === moreNums);

const user = {
  username: "Helena",
  email: "helena@klarr.se",
  notifications: [],
};

//if (user.notifications === [])
//console.log([] === []);

if (user.notifications.length === 0) {
  console.log("No new notifocations");
}

if (!user.notifications.length) {
  console.log("No new notifocations");
}
