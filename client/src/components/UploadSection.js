import React, { useEffect, useState } from 'react';
import { PickerOverlay } from 'filestack-react';
import { addImage } from '../API/Api';
import ImageRow from './ImageRow';
import { getImages } from '../API/Api';

const UploadSection = () => {
  const [isPicker, setIsPicker] = useState(false);
  const [image, setImage] = useState('');
  const [title, setTitle] = useState('');
  const [loading, setLoading] = useState(false);
  const [imageData, setImageData] = useState([]);
  const [result, setResult] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    !image
      ? alert('Image is required')
      : title.length < 2
      ? alert('Title is too short')
      : addImage({ title, image, setLoading, setImageData });
  };

  useEffect(() => {
    if (imageData) {
      setLoading(false);
      setTitle('');
      setImage('');
      getImages({ setLoading, setResult });
    }
  }, [imageData]);

  return (
    <div className='px-4 flex-colo'>
      <form
        onSubmit={submitHandler}
        className='bg-green-100 shadow-md rounded lg:w-2/5 md:w-3/5 w-full flex-colo py-12 px-4'
      >
        {image ? (
          <img
            src={image.filesUploaded[0].url}
            alt='uploaded_image'
            className='w-full h-56 object-cover'
          />
        ) : (
          <button
            onClick={() => (isPicker ? setIsPicker(false) : setIsPicker(true))}
            type='button'
            className='w-full h-56 border-dashed border-4 border-green-800 text-lg font-semibold'
          >
            {' '}
            Choose Image
          </button>
        )}

        <input
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder='Image Title'
          required
          className='font-semibold border-green-500 px-2 py-4 bg-white w-full rounded my-8'
        />

        <button
          type='submit'
          className='uppercase font-bold py-4 w-full bg-green-800 rounded text-white'
        >
          {loading ? 'Loading...' : 'Submit'}
        </button>

        <div className='mt-4 relative'>
          {isPicker && (
            <PickerOverlay
              apikey={process.env.REACT_APP_FILESTACK_API_KEY}
              onUploadDone={(res) => {
                setImage(res);
                setIsPicker(false);
              }}
              onError={(res) => alert(res)}
              pickerOptions={{
                maxFiles: 1,
                accept: ['image/*'],
                errorsTimeout: 2000,
                maxSize: 1 * 1000 * 1000,
              }}
            />
          )}
        </div>
      </form>

      <ImageRow result={result} loading={loading} />
    </div>
  );
};

export default UploadSection;
