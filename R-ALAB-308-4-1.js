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

// Object declarations for data of array

const object = { id: `42` };
const Name = `name`;
const Occupation = `occupation`;
const Age = `age`;
(object[Name] = `Bruce`), (object[Occupation] = `Knight`);
object[Age] = `41`;

const objectTwo = { id: `57` };
const NameTwo = `name`;
const OccupationTwo = `occupation`;
const AgeTwo = `age`;
(objectTwo[NameTwo] = `Blaine`), (objectTwo[OccupationTwo] = `Quiz Master`);
objectTwo[AgeTwo] = `19`;

const objectThree = { id: `63` };
const NameThree = `name`;
const OccupationThree = `occupation`;
const AgeThree = `age`;
(objectThree[NameThree] = `Bob`), (objectThree[OccupationThree] = `Fry Cook`);
objectThree[AgeThree] = `58`;

const objectFour = { id: `98` };
const NameFour = `name`;
const OccupationFour = `occupation`;
const AgeFour = `age`;
(objectFour[NameTwo] = `Bill`),
  (objectFour[OccupationFour] = `Doctor's Assistant`);
objectFour[AgeFour] = `26`;

//  Array declaration for objects combined
const combinedArrays = [object, objectTwo, objectThree, objectFour];

// Resulting integration of objects into an array
console.log(combinedArrays);

// Part 4: Sorting and Manipulating Data
