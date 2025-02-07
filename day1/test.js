const fs = require('fs');
const file = fs.readFileSync('input.txt', 'utf8');

let input = file;

const toLines = (input) => input.split('\n');

const dictionary = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};

const wordToNumber = (word) => dictionary[word] ?? parseInt(word);

const extractNumbers = (lines) => {
  return lines.map((line) => {
    return Array.from(
      line.matchAll(/(?=(one|two|three|four|five|six|seven|eight|nine|\d))/g),
      (match) => match[1]
    );
  });
};

const lines = toLines(input);
const extractedNumbers = extractNumbers(lines);
const onlyNumbers = extractedNumbers.map((line) =>
  line.map((number) => wordToNumber(number))
);
const onlyFirstAndLast = onlyNumbers.map((line) =>
  parseInt(`${line[0]}${line[line.length - 1]}`)
);
const sum = onlyFirstAndLast.reduce((acc, line) => {
  return parseInt(acc) + parseInt(line);
});
console.log(sum);
