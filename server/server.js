import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import Upload from './Model.js';
import { ConnectMongoDb } from './ConnectDb.js';

dotenv.config();
ConnectMongoDb();
const app = express();
app.use(express.json());
app.use(cors({ origin: `${process.env.CLIENT_URL}` }));
const port = process.env.PORT || 5000;

app.get('/', async (req, res) => {
  res.send('Api is live');
});

// get all images from database
app.get('/all', async (req, res) => {
  try {
    const img = await Upload.find({}).sort({ _id: -1 });
    res.status(200).json(img);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: 'Server Error' });
  }
});

//add image to database
app.post('/', async (req, res) => {
  try {
    const { image, title } = req.body;
    const createImage = { image, title };
    if (createImage) {
      const newImage = await Upload.create(createImage);
      res.status(201).json({ msg: 'Image uploaded successfully' });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: 'Invalid data' });
  }
});

app.listen(port, () => {
  console.log(`server is live @ port: ${port}`);
});
