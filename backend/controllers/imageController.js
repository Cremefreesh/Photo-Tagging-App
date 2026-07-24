//get and set current image 
//db.get() coordinates where imageID == currentImage and charID == currentChar
//set current char when click char from the dropdown menu 


const db = require("..  /db");

async function getImageById(req, res) {
  const { imageId } = req.params;

  const image = await db.getImageById(Number(imageId));

  if (!image) {
    res.status(404).send("Image not found");
    return;
  }

  res.send(`Image Name: ${image.name}`);
};

module.exports = { getImageById };

