const pickASetOfNumbers = (tempArray, numberOfItemsToBePicked) => {
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


const assemblyObject = (obj, arr) => {
  for (let c = 0; c < arr.length; c++)
    (obj[arr[c]]) ? obj[arr[c]] = obj[arr[c]] + 1 : obj[arr[c]] = 1;
  
  return obj;
}


const convertObjectToArrayOfObjects = obj => {
  let array = [];
  for (const property in obj)
    array = [...array, ({
      "number": property,
      "frequency": obj[property]
    })];
  
    return array;
}


const sortObject = obj => {
  let initialArray = convertObjectToArrayOfObjects(obj);

  return initialArray.sort( (a, b) => b.frequency - a.frequency)
}


const arrangeFinalNumbers = (arr, numberOfItems) => {
  let numbersToBeReturned = [];
  let mainCounter = 0;

  for (let c = 0; c < arr.length; c++) {
    // mainCounter++;
    
    if (numbersToBeReturned.length === numberOfItems) return numbersToBeReturned;

    let tempCounter = 0;
    let tempArray = [];
    for (let t = c + 1; t < arr.length; t++) {
      tempCounter++;
      // tempArray = [...tempArray, arr[t].number];

      if (arr[t].frequency !== arr[c].frequency) {
        if (tempCounter + mainCounter <= numberOfItems) {
          numbersToBeReturned = [...numbersToBeReturned, (tempArray.length ? [...tempArray] : arr[c].frequency)];
        } else {
          let tt = pickASetOfNumbers(tempArray, numberOfItems - t);
          console.log("tt= ", tt)
          numbersToBeReturned = [...numbersToBeReturned, ...tempArray];
          return numbersToBeReturned;
        }
      } else {
        tempArray = [...tempArray, arr[t].number];
      }
    }

    mainCounter = mainCounter + tempCounter;
  }

  return arr;
}


const main = () => {
  const numberOfDraws = 3; // number of draws over the most frequent numbers
  // const frequentNumbersOriginal = [35, 14, 39, 24, 5, 16, 11, 38, 40, 20, 33];
  const frequentNumbersOriginal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  const numberOfItemsToBePicked = 5; // amount of number to be used in the bet
  let array = [];
  let object = {};
  for (let c = 0; c < numberOfDraws; c++) {
    array = [...pickASetOfNumbers(frequentNumbersOriginal, numberOfItemsToBePicked)];
    object = assemblyObject(object, array);
  }

  const arrayOfObjectsSorted = sortObject(object);
  console.log("arrayOfObjectsSorted::: ", arrayOfObjectsSorted);

  const finals = arrangeFinalNumbers(arrayOfObjectsSorted, numberOfItemsToBePicked);
  console.log("finals => ", finals);
  
  return "";

}

console.log(main());

