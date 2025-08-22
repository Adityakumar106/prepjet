const http = require('http');
const app = require('./app');
const connectDB = require('./Db/db');
const { connect } = require('http2');
require('dotenv').config();

const PORT = process.env.PORT || 5000;
const server = http.createServer(app);

 
connectDB()

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
