//relational databases - 2 with 
//one database for player ID and their high score --> push if currScore > highscore, update highscore
//if less than highscore, do nothing
//else put the current score to the database (as no score exists for this playerID)

const images = [
  { id: 1, name: "Image1", charIDs: [1, 2] },
  { id: 2, name: "Image2", charIDs: [3, 4] },
];

const chars = [
  { id: 1, name: "Goku", cordinates: { x: 10, y: 20 } },
  { id: 2, name: "Gohan", cordinates: { x: 30, y: 40 } },
  { id: 3, name: "Vegeta", cordinates: { x: 50, y: 60 } },
  { id: 4, name: "Piccolo", cordinates: { x: 70, y: 80 } },
];


async function getCharPositionById(charId) {
  return chars.find(char => char.cordinates.x && char.cordinates.y && char.id === charId);
};

const query = 'SELECT coordinates FROM chars WHERE id === images.charIDs AND images.id === currentImageId';

connect.query(query, (err, result) => {
  if (err) {
    console.error('Error executing query:', err);
    return;
  }
  console.log('Query result:', result);
});

module.exports = { getCharPositionById };