const express = require('express');
const app = express();
const connectDB = require('./db');
const users = require('./routes/users');

const port = 5000;

app.use(express.json());
//connect to database
connectDB();

app.use('/api', users);

app.get('/',(req,res) => {
    console.log("Iam here");
  res.send('Hello World!');
})
app.listen(port , () => {    
    console.log(`Server is running on port ${port}`);
});