const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

const port = process.env.PORT || 5000;
require("dotenv").config()
const app = express();
app.use(cors())
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server On ");
});

app.listen(port, () => {
  console.log(`listening at ${port}`);
});

//Mongoose Stuffs
//Connecting to Mongo

mongoose
  .connect(
    process.env.MONGO_URI,
    { useNewUrlParser: true },
    { useFindAndModify: false }
  )
  .then(() => console.log("DataBase Connected successfully"))
  .catch((err) => {
    console.log(err);
  });


//Routes Decalaration 
const userRoute = require('./routes/users')
const noticeRoute = require('./routes/notice')
const postRoute = require('./routes/posts')




//Using Routes
app.use('/users', userRoute)
app.use('/notice', noticeRoute)
app.use('/post', postRoute)
