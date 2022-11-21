/* 
const mongoose = require('mongoose')
const connectMongo = async () => mongoose.connect(process.env.MONGO)
export default connectMongo */


/* import mongoose from "mongoose";

const connection = {};

async function connectMongo() {
  if (connection.isConnected) {
    return;
  }

  const db = await mongoose.connect(process.env.MONGO, {
    useNewUrlParser: true,
  });

  connection.isConnected = db.connections[0].readyState;
}

export default connectMongo; */
 


const mongoose = require('mongoose')

async function connectDB() {

  try {
    await mongoose.connect(process.env.MONGO , {
      useUnifiedTopology: true,
      useNewUrlParser: true
    })

    console.log('connected')
  } catch (error) {
    console.log(error)
  }
}

export default connectDB



