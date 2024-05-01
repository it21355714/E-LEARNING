const connectToMongo = require("./config/db.js");
const userRoutes = require('./routes/userRoutes.js')

const express = require('express');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT

connectToMongo()
app.use(cors()); // Use cors middleware first

app.use(express.json())
app.use('/api', userRoutes)

app.get('/', (req, res) => {
  res.send('api is running');
});

app.listen(PORT, () => {
  console.log(`api is running on http://localhost:${PORT}`);
});
