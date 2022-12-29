import mongoose from 'mongoose';

export const ConnectMongoDb = async () => {
  try {
    mongoose.set('strictQuery', false);
    mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDb connected Succesfully');
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};
