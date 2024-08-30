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

  const formatToBeReturned = arr => arr.sort((a, b) => a - b);
  let numbersToBeReturned = [];

  for (let c = 0; c < arr.length; c++) {
    
    if (numbersToBeReturned.length === numberOfItems)
      return formatToBeReturned(numbersToBeReturned);

    let tempArray = [];
    for (let t = c + 1; t < arr.length; t++) {
      if (arr[t].frequency !== arr[c].frequency) {
        if (tempArray.length + numbersToBeReturned.length <= numberOfItems) {
          if (tempArray.length) numbersToBeReturned = [...numbersToBeReturned, ...tempArray];
          else numbersToBeReturned = [... numbersToBeReturned, arr[c].number.toString()];
          c = t - 1;
          break;
        } else {
          const temp = pickASetOfNumbers(tempArray, numberOfItems - numbersToBeReturned.length);
          numbersToBeReturned = [...numbersToBeReturned, ...temp];
          return formatToBeReturned(numbersToBeReturned);
        }
      } else {
        if (tempArray.length === 0) tempArray = [arr[c].number, arr[t].number];
        else {
          tempArray = [...tempArray, arr[t].number];

          if (t === arr.length - 1) {
            const temp = pickASetOfNumbers(tempArray, numberOfItems - numbersToBeReturned.length);
            numbersToBeReturned = [...numbersToBeReturned, ...temp];
            return formatToBeReturned(numbersToBeReturned);
          }

        }
      }

    }
  }

  return formatToBeReturned(arr);
}



const main = () => {
  const numberOfDraws = 8; // number of draws over the most frequent numbers
  // const frequentNumbersOriginal = [35, 14, 39, 24, 5, 16, 11, 38, 40, 20, 33];
  const frequentNumbersOriginal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 22, 33];
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

