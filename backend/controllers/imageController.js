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


function setCurrentImage(req, res) {
  const { imageId } = req.params;

  // Assuming you have a way to set the current image in your application state
  // For example, you might store it in a global variable or a database
  // Here, we'll just send a response indicating the current image has been set

  res.send(`Current Image ID set to: ${imageId}`);
};

module.exports = { getImageById, setCurrentImage };