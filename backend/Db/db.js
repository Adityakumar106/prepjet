const mongoose = require('mongoose');

const conncetDB= async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL, {
      
    });
    console.log('database connected sucessfully');
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}
module.exports= conncetDB;