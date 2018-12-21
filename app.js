const a = +prompt("ENTER YOUR AMOUNT ");
const amount = [1000, 2000, 3000, 4000, 5000];
const error = [];
for (i = 0; i < amount.length; i++) {
  if (a === amount[i]) {
    document.write("<h2>Transaction successfull<h2>");
    break;
  } else {
    error.push("Sorry invalid transaction");
  }
}
if (error.length > 0) {
  document.write("<h2>Sorry invalid transaction<h2>");
}

// let numberArray = [12, 21, 32, 23, 43, 34];
// let a = numberArray;
// numberArray.push(34);
// numberArray.unshift(12);
// numberArray.shift();
// numberArray.pop();
// numberArray.reverse();
// numberArray.sort();
// numberArray.splice(0, 4);
// numberArray.slice(2, 4);

// console.log(a);

// ARRAY METHOD

const bioData = {
  firstName: "Mueen",
  lastName: "Ullah",
  shortName: "P-kohli",
  age: 23,
  hobbies: ["Reading", "Drinking tea", "P-polo"],
  address: [
    {
      country: "Pakistan",
      province: "Gilgit-Baltistan"
    },
    {
      city: "Gilgit"
    },
    {
      muhallah: "Kashroot"
    }
  ]
};
// let numberArray = [12, 21, 32, 23, 43, 34];
// let a = numberArray;
// numberArray.push(34);
// numberArray.unshift(12);
// numberArray.shift();
// numberArray.pop();
// numberArray.reverse();
// numberArray.sort();
// numberArray.splice(0, 4);
// numberArray.slice(2, 4);

console.log(bioData.address);
