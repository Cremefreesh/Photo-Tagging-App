const express = require("express");
const app = express();


const imageRouter = require("./routes/imageRoutes");

app.use("/images", imageRouter);

const PORT = 3000;
app.listen(PORT, (error) => {
  
  if (error) {
    throw error;
  }
  
});


