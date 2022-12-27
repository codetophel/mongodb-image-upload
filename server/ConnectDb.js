import mongoose from 'mongoose';

export const ConnectMongoDb = async () => {
  try {
    mongoose.set('strictQuery', false);
    mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};
