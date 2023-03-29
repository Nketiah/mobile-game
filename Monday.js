// Task 1
// use case 
// Select 3 numbers to form 1 bet
// if you select 6 numbers you get 20 as the total bet
// Write a function to calculate the total bet
// using this sample

// Task 2
// use case
// Select 1 number to form 1 bet
// Write a function to calculate the total bet
// from five rows [row1, row2, row3, row4, row5]

// Task 3 
// allSelections Array = [] = "1,2|4,6|7,3||"

// Task 4 
// 0,1,2,3,4,5,6,7,8,9
// Write permutation for

// Task 5
// use case 
// Select 4 numbers to form 1 bet
// if you select 6 numbers you get 30 as the total bet
// Write a function to calculate the total bet
// using this sample

// Tuesday
// Task 1
// Make five rows of 0 -9 numbers
// each row should have it own array
// example row[], row2[], row3[], row4[], row5[]
// When you click on row1 you push to row1[] Array
// make an allSelection string for all the rows "1,2,3|3,4|||"
//
// Task 2
// Add a vertical selection below all the five rows
// All button, clear button

//const makeNumArr = num => new Array(num).fill("").map((_, i) => i + 1)


const rowArrays = [row1, row2, row3, row4, row5];

rowArrays.map((rowArray, index) => {
  const row = [...rowArray];
  const numberIndex = row.indexOf(number);
  if (numberIndex === -1) {
    row.push(number);
  } else {
    row.splice(numberIndex, 1);
  }
  const setRow = `setRow${index + 1}`;
  return { row, setRow };
}).forEach(({ row, setRow }) => setRow(row.sort()));


