
function getRandomElement(items) {
  return items[Math.floor(Math.random() * items.length)];
}

export default getRandomElement;

export {
  getRandomElement
}