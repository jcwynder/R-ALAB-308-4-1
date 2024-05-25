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

// Object declarations for each data entry of array

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

// 1. Removal of last element from combinedArrays using splice()
combinedArrays.splice(3, 1);
console.log(combinedArrays);

// 2. Declaration of new object and insertion of the following object at index 1:
// { id: "48", name: "Barry", occupation: "Runner", age: "25" }
const objectFive = { id: `48` };
const NameFive = `name`;
const OccupationFive = `occupation`;
const AgeFive = `age`;
(objectFive[NameFive] = `Barry`), (objectFive[OccupationFive] = `Runner`);
objectFive[AgeFive] = `25`;

combinedArrays.splice(1, 0, objectFive);
console.log(combinedArrays);

// 3. Declaration of new object and adds it to the end of array:
// { id: "7", name: "Bilbo", occupation: "None", age: "111" }
const objectSix = { id: `7` };
const NameSix = `name`;
const OccupationSix = `occupation`;
const AgeSix = `age`;
(objectSix[NameSix] = `Bilbo`), (objectSix[OccupationSix] = `None`);
objectSix[AgeSix] = `111`;

combinedArrays.push(objectSix);
console.log(combinedArrays);
