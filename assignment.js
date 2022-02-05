// Problem 1 anaToVori
// Algorithm
// declear a function named anaToVori with a param named ana
// calculate ana to vori // 16 ana = 1 vori
// return the vori value
function anaToVori(ana) {
  // checking for input validation
  if (typeof ana != "number" || ana <= 0)
    throw new Error("Please input a positive number");

  return ana / 16;
}

// console.log(anaToVori(0));

// Problem 2 pandaCost
// get singara samucha and jilapi quantity an input
// calculate multiply quantity with each food price;
// add them and return them

function pandaCost(
  singaraQuantity = 0,
  samuchaQuantity = 0,
  jilapiQuantity = 0
) {
  // checking for valid input
  if (
    typeof singaraQuantity != "number" ||
    typeof samuchaQuantity != "number" ||
    typeof jilapiQuantity != "number"
  )
    throw new Error("Please input a valid number");

  const singaraCostEach = 7;
  const samuchaCostEach = 10;
  const jilapiCostEach = 15;

  const totalSingaraCost = singaraQuantity * singaraCostEach;
  const totalSamuchaCost = samuchaQuantity * samuchaCostEach;
  const totalJilapiCost = jilapiQuantity * jilapiCostEach;

  return totalSingaraCost + totalSamuchaCost + totalJilapiCost;
}

// console.log(pandaCost(2, undefined, 2));

/////////// Problem 3 //////////////
// declear a function named picnicBudget which takes a param of numOfPeople
// declear a var totalCost
// if people 0 - 100, per head cost is 5000 and
//// multiply numOfPeople * 5000 and add it to totalcost

// if people 101 - 200, per head cost is 4000 and
//// multiply 0 - 100 people --> numOfPeople * 5000 and add it to totalcost
//// multiply numOfPeople * 4000 and add it to totalcost

// if people 201 - infinity, per head cost is 3000 and
//// multiply 0 - 100 people --> numOfPeople * 5000 and add it to totalcost
//// multiply 101 - 200 people --> numOfPeople * 4000 and add it to totalcost
//// multiply numOfPeople * 3000 and add it to totalcost

function picnicBudget(numOfPeople) {
  // checking for input validation
  if (typeof numOfPeople != "number" || numOfPeople <= 0)
    throw new Error("Please input a positive number");

  let totalCost = 0;
  const costPerHead0To100 = 5000;
  const costPerHead101To200 = 4000;
  const costPerHeadAbove200 = 3000;

  if (numOfPeople <= 100) {
    totalCost += numOfPeople * costPerHead0To100;
    return totalCost;
  }

  if (numOfPeople <= 200) {
    let restOfThePeople = 0;
    // calculation of 0 - 100 people
    totalCost += 100 * costPerHead0To100;
    restOfThePeople = numOfPeople - 100;
    // calculation of 101 - 200 people
    totalCost += restOfThePeople * costPerHead101To200;
    return totalCost;
  }

  if (numOfPeople > 200) {
    let restOfThePeople = 0;
    // calculation of 0 - 100 people
    totalCost += 100 * costPerHead0To100;
    // calculation of 101 - 200 people
    let next100People = 100;
    totalCost += next100People * costPerHead101To200;
    // calculation of above 200 people
    restOfThePeople = numOfPeople - 200;
    totalCost += restOfThePeople * costPerHeadAbove200;
    return totalCost;
  }

  throw new Error("Something went wrong :(");
}

// console.log(picnicBudget(1));

///////////////////// Problem 4 //////////////
// a function -> odd friend (an array)
// loop over the array and check if any name length of the array is odd
// then immedietely return that name;

function oddFriend(friends) {
  // checking for input validation
  if (!Array.isArray(friends))
    throw new Error("Please pass a valid array of friends");

  for (const friend of friends) {
    if (friend.length % 2 != 0) return friend;
  }
}

console.log(oddFriend("['rafiq', 'imran', 'tariqa', 'laily']"))
