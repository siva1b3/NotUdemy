function generateRandomString(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }

  return result;
}

function generateRandomStrings(count, length) {
  const randomStrings = [];

  for (let i = 0; i < count; i++) {
    const randomString = generateRandomString(length);
    randomStrings.push(randomString);
  }

  return randomStrings;
}

const numberOfStrings = 40;
const stringLength = 50;

export const randomStrings = generateRandomStrings(
  numberOfStrings,
  stringLength
);

// Display the generated random strings
// randomStrings.forEach((randomString, index) => {
//   console.log(`Random string ${index + 1}:`, randomString);
// });
