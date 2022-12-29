import axios from 'axios';

const Url = process.env.REACT_APP_SERVER_URL;

export const getImages = async ({ setLoading, setResult }) => {
  try {
    setLoading(true);
    const res = await axios.get(`${Url}/all`);
    if (res) {
      setLoading(false);
      setResult(res.data);
    }
  } catch (error) {
    alert(error.response.data.msg);
    setLoading(false);
  }
};

export const addImage = async ({ setLoading, setImageData, image, title }) => {
  try {
    const imgData = { title, image: image.filesUploaded[0].url };
    setLoading(true);
    let res = await axios.post(`${Url}/`, imgData);
    if (res) {
      setLoading(false);
      setImageData(res.data);
    }
  } catch (error) {
    alert(error.response.data.msg);
    setLoading(false);
  }
};
