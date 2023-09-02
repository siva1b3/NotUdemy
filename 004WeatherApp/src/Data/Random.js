import jsonData from './DataJson.json';

function RandomiseValue() {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Correct the JSON structure to access "data" array
  const items = jsonData.data;

  // Loop through the JSON data and update the "Value" field with random values
  items.forEach((entry, index) => {
    entry.Value = getRandomInt(1, 10); // Change the range as needed
    entry.id = index;
  });

  console.log(items.slice(0, 10));
  // console.log(Array.isArray(items));
  return items;
}

export default RandomiseValue;
