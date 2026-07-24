function image(imageId, charId, coordinates) {
  this.imageId = imageId;
  this.charId = charId;
  this.coordinates = coordinates;
}

const imageSchema = new mongoose.Schema({
  imageID: {
    type: String,
    required: true
  },
  charID: {
    type: String,
    required: true
  },
  coordinates: {
    x: Number,
    y: Number
  }
});

module.exports = mongoose.model("Image", imageSchema);