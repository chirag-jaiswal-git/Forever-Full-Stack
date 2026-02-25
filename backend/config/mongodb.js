import mongoose from 'mongoose';

const connectDB = async () => {

  mongoose.connection.on('connected', () => {
    console.log('Mongoose connected to DB Cluster');
  });

  mongoose.connection.on('error', (err) => {
    console.log(`Mongoose connection error: ${err}`);
  });
  
  await mongoose.connect(`${process.env.MONGODB_URI}/e-commerce`);
 
}

export default connectDB;