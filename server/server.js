/*const express = require('express')

const cors = require('cors')
const connectDB = require('./db/conn');


const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/fullstack')

connectDB();



app.get('/getUsers',(req,res)=>{
  UserModel.find({}).then(function(users){
    res.json(users)
  }).catch(function(err) {
    console.log(err)
  })
})

app.listen(3001, () =>{
  console.log("Server is running")
})*/

// server.js
const express = require('express');
const cors = require('cors');
const { connectDB } = require('./db/conn'); // Import the connectDB function
const recordRouter = require('./routes/record'); // Import the recordRouter

const app = express();
const PORT = 5001;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Use the recordRouter for /getUsers route
app.use('/record', recordRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
