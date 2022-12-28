import React from 'react';

const UploadSection = () => {
  return (
    <div className='bg-green-50 px-4 flex-colo'>
      <form className='bg-green-100 shadow-md rounded w-2/5 flex-colo py-12 px-4'>
        <button
          type='button'
          className='w-full h-56 border-dashed border-4 border-green-800 text-lg font-semibold'
        >
          {' '}
          Choose Image
        </button>

        <input
          type='text'
          placeholder='Image Title'
          required
          className='font-semibold border-green-500 px-2 py-4 bg-white w-full rounded my-8'
        />

        <button
          type='submit'
          className='uppercase font-bold py-4 w-full bg-green-800 rounded text-white'
        >
          submit
        </button>
      </form>
    </div>
  );
};

export default UploadSection;
