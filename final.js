////////////// Problem 01 ////////////////
function anaToVori(ana) {
  // checking for input validation
  if (typeof ana != "number" || ana <= 0)
    throw new Error("Please input a positive number");

  return ana / 16;
}

////////////// Problem 02 ////////////////
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

////////////// Problem 03 ////////////////
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


////////////// Problem 04 ////////////////
function oddFriend(friends) {
  // checking for input validation
  if (!Array.isArray(friends))
    throw new Error("Please pass a valid array of friends");

  for (const friend of friends) {
    if (friend.length % 2 != 0) return friend;
  }

  throw new Error('No odd friend found')
}
