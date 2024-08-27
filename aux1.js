// const arrayOfObjects = [   
//   {
//       name: 'Diana',
//       born: 1373925600000, // Mon, Jul 15 2013
//       num: 4,
//       sex: 'female'
//   },
//   {

//       name: 'Beyonce',
//       born: 1366832953000, // Wed, Apr 24 2013
//       num: 2,
//       sex: 'female'
//   },
//   {            
//       name: 'Albert',
//       born: 1370288700000, // Mon, Jun 3 2013
//       num: 3,
//       sex: 'male'
//   },    
//   {
//       name: 'Doris',
//       born: 1354412087000, // Sat, Dec 1 2012
//       num: 1,
//       sex: 'female'
//   }
// ];

// // var byDate = arrayOfObjects.slice(0);
// // byDate.sort(function(a,b) {
// //     return a.born - b.born;
// // });
// // console.log('by date:');
// // console.log(byDate);

// // console.log("arrayOfObjects::: ", arrayOfObjects)
// // var byName = arrayOfObjects.slice(0);
// // console.log("byName - ", byName)
// // byName.sort(function(a,b) {
// arrayOfObjects.sort(function(a,b) {
//     var x = a.name.toLowerCase();
//     var y = b.name.toLowerCase();
//     return x < y ? -1 : x > y ? 1 : 0;
// });

// console.log('by name:');
// console.log(arrayOfObjects);



const arrayOfObjectsSorted =  [
  // OKAY
  // { number: '4', frequency: 3 },
  // { number: '6', frequency: 4 },
  // { number: '7', frequency: 2 },
  // { number: '10', frequency: 2 },
  // { number: '11', frequency: 2 },
  // { number: '3', frequency: 2 },
  // { number: '2', frequency: 2 },
  // { number: '5', frequency: 2 },
  // { number: '8', frequency: 2 },
  // { number: '55', frequency: 2 },
  // { number: '9', frequency: 1 },
  // { number: '15', frequency: 1 },

  // OKAY
  { number: '4', frequency: 3 },
  { number: '6', frequency: 4 },
  { number: '7', frequency: 2 },
  { number: '10', frequency: 2 },
  { number: '11', frequency: 2 },
  { number: '3', frequency: 2 },
  { number: '2', frequency: 2 },
  { number: '5', frequency: 2 },
  { number: '8', frequency: 2 },
  { number: '55', frequency: 2 }

  // OKAY
  // { number: '7', frequency: 2 },
  // { number: '10', frequency: 2 },
  // { number: '11', frequency: 2 },
  // { number: '3', frequency: 2 },
  // { number: '2', frequency: 2 },
  // { number: '5', frequency: 2 },
  // { number: '8', frequency: 2 },
  // { number: '55', frequency: 2 },
  // { number: '9', frequency: 1 },
  // { number: '15', frequency: 1 },

  // OKAY
  // { number: '7', frequency: 8 },
  // { number: '10', frequency: 7 },
  // { number: '11', frequency: 6 },
  // { number: '3', frequency: 5 },
  // { number: '2', frequency: 4 },
  // { number: '5', frequency: 3 },
  // { number: '8', frequency: 2 },
  // { number: '55', frequency: 1 },

  // { number: '7', frequency: 8 },
  // { number: '10', frequency: 7 },
  // { number: '11', frequency: 6 },
  // { number: '3', frequency: 5 },
  // { number: '2', frequency: 4 },
  // { number: '5', frequency: 4 },
  // { number: '8', frequency: 2 },
  // { number: '55', frequency: 1 },

  // { number: '7', frequency: 8 },
  // { number: '44', frequency: 8 },
  // { number: '10', frequency: 7 },
  // { number: '11', frequency: 6 },
  // { number: '3', frequency: 5 },
  // { number: '2', frequency: 4 },
  // { number: '8', frequency: 2 },
  // { number: '55', frequency: 1 },

  // OKAY
  // { number: '7', frequency: 2 },
  // { number: '10', frequency: 2 },
  // { number: '11', frequency: 2 },
  // { number: '3', frequency: 2 },
  // { number: '2', frequency: 2 },
  // { number: '5', frequency: 2 },
  // { number: '8', frequency: 2 },
  // { number: '55', frequency: 2 },
]

const pickASetOfNumbers = (tempArray, numberOfItemsToBePicked) => {
  console.log("received2222: ", tempArray, numberOfItemsToBePicked);
  let frequentNumbers = [...tempArray];
  const totalNumbers = frequentNumbers.length;
  let n;
  let tempResult = [];
  
  for (let c = 0; c < numberOfItemsToBePicked; c++) {
    n = Math.floor(Math.random() * (totalNumbers - c));
    tempResult = [...tempResult, frequentNumbers[n]];
    frequentNumbers.splice(n, 1);
  }

  return tempResult;
}


const arrangeFinalNumbers = (arr, numberOfItems) => {
  // console.log("received:::: ", arr, numberOfItems);

  const formatToBeReturned = arr => arr.sort((a, b) => a - b);
  let numbersToBeReturned = [];
  let mainCounter = 0;

  for (let c = 0; c < arr.length; c++) {
    
    if (numbersToBeReturned.length === numberOfItems) {
      console.log("flagggggg 1111");
      return formatToBeReturned(numbersToBeReturned);
    }

    let tempCounter = 0;
    let tempArray = [];
    for (let t = c + 1; t < arr.length; t++) {
      console.log("ttt: ", t, tempArray, "tempCounter: ", tempCounter)

      if (arr[t].frequency !== arr[c].frequency) {
      console.log("NOOOOOOOOW    ttt: ", t, tempArray, "tempCounter: ", tempCounter, "mainCounter::: ", mainCounter, "numberOfItems::: ", numberOfItems)

        // if (tempCounter + mainCounter <= numberOfItems) {
        if (mainCounter <= numberOfItems) {
          console.log("flaggg22222211111XXXXXXXXXXXXXXXXXXXXX: ", numbersToBeReturned)
          // numbersToBeReturned = [...numbersToBeReturned, (tempArray.length ? [...tempArray] : arr[c].number.toString())]; ////////
          numbersToBeReturned = [...numbersToBeReturned, arr[c].number.toString()]; ////////
          console.log("flaggg222222: ", numbersToBeReturned)
          break;
        } else {
          console.log("calling exit: ", numberOfItems)
          let tt = pickASetOfNumbers(tempArray, numberOfItems - numbersToBeReturned.length);
          console.log("tt= ", tt)
          numbersToBeReturned = [...numbersToBeReturned, ...tt];
          return formatToBeReturned(numbersToBeReturned);
        }
      } else {
        if (tempCounter === 0) tempArray = [arr[c].number, arr[t].number];
        else {
          tempArray = [...tempArray, arr[t].number];

          if (t === arr.length - 1) {
            // console.log("calling22: ", numberOfItems, tempArray)
            let tt = pickASetOfNumbers(tempArray, numberOfItems - numbersToBeReturned.length);
            // console.log("tt= ", tt)
            numbersToBeReturned = [...numbersToBeReturned, ...tt];
            return formatToBeReturned(numbersToBeReturned);
          }

        }
      }

      tempCounter++;
    }

    mainCounter = mainCounter + tempCounter;
  }

  return formatToBeReturned(arr);
}

console.log(arrangeFinalNumbers(arrayOfObjectsSorted, 5));