const { Router } = require("express");

const imageRouter = Router();


//imageRouter.get("/", (req, res) => res.send("All images"));
imageRouter.get("/:imageId", (req, res) => {
  const { imageId } = req.params;
  res.send(`Image ID: ${imageId}`);
});

module.exports = imageRouter;