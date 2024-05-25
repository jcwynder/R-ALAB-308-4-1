// Part 2: Expanding Functionality

// Variable declaration for 2D array of CSV
const csv2DArray = [
  [`ID`, `Name`, `Occupation`, `Age`],
  [`42`, `Bruce`, `Knight`, `41`],
  [`57`, `Bob`, `Fry Cook`, `19`],
  [`63`, `Blaine`, `Quiz Master`, `58`],
  [`98`, `Bill`, `Doctor's Assistant`, `26`],
];

// 2D array demonstration for CSV
console.log(csv2DArray);

// Part 3: Transforming Data

// Variable delcaration for array data to be transformed
const array = [
  [
    [`id`, `42`],
    [`name`, `Bruce`],
    [`occupation`, `Knight`],
    [`age`, `41`],
  ],
  [
    [`id`, `57`],
    [`name`, `Bob`],
    [`occupation`, `Fry Cook`],
    [`age`, `19`],
  ],
  [
    [`id`, `63`],
    [`name`, `Blaine`],
    [`occupation`, `Quiz Master`],
    [`age`, `58`],
  ],
  [
    [`id`, `98`],
    [`name`, "Bill"],
    [`occupation`, `Doctor's Assistant`],
    [`age`, `26`],
  ],
];

// Method used to take in one such array,
// and returns a new array of objects built based on the input array
const arrayToObject = (array) => {
  let result = [];
  result = array.map((list) => {
    return list.reduce((acc, val) => {
      acc[val[0]] = val[1];
      return acc;
    }, {});
  });
  return result;
};

// Result of array transformation into objects transformation
console.log(arrayToObject(array));
