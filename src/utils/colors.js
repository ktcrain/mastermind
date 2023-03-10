import {getRandomElement} from './array';

const colors = [
  "white",
  "black",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "brown",
];
export default colors;

/**
 * Return the string name for display color or 'empty'
 */
function getDisplayColor(value) {
  const selectedColor = colors.find((color) => color === value);

  if (typeof selectedColor !== "undefined") {
    return selectedColor;
  }

  return "empty";
}

function getRandomColors({ count }) {
  const arr = Array(count);
  for(let i = 0;i<4;i++) {
    arr[i] = getRandomElement(colors);
  }
  return arr;
}

export { getDisplayColor, getRandomColors };
