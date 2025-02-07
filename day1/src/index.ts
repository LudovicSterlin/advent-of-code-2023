import * as fs from 'fs';
import path from 'node:path';

function readFileLines(filePath: string): string[] {
  try {
    // Read the contents of the file
    const fileContents: string = fs.readFileSync(
      path.join(__dirname, filePath),
      'utf-8'
    );

    // Split the contents into an array of lines
    const arrayOfLines: string[] = fileContents.split('\n');
    const trimmedLines: string[] = arrayOfLines.map((line) => line.trim());

    return trimmedLines;
  } catch (error: any) {
    console.error(`Error reading file: ${error.message}`);
    return [];
  }
}

function isNumeric(str: string): boolean {
  // Use parseFloat or parseInt to convert the string to a number
  const numericValue = parseInt(str);

  // Check if the conversion is successful and the result is not NaN
  return !isNaN(numericValue);
}

const wordToDigit: Record<string, string> = {
  one: '1',
  two: '2',
  three: '3',
  four: '4',
  five: '5',
  six: '6',
  seven: '7',
  eight: '8',
  nine: '9',
};

// Example usage
const filePath: string = '../input2.txt';
const lines: string[] = readFileLines(filePath);

// Replace words with digits in each string
const convertedStrings: string[] = lines.map((input) => {
  const converted = input.replace(
    /(one|two|three|four|five|six|seven|eight|nine)/g,
    (match) => wordToDigit[match] || ''
  );
  return converted;
});
console.log(convertedStrings);

const numberLines = convertedStrings.map((l) => [...l].filter(isNumeric));
console.log(numberLines);

const calibrationValues = numberLines.map((l) =>
  parseInt(l[0] + l[l.length - 1])
);
console.log(calibrationValues);

const result = calibrationValues.reduce((partialSum, a) => partialSum + a, 0);
console.log(result);
