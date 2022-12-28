import React from 'react';
import ImagesData from '../Data';

const ImageRow = () => {
  return (
    <div className='grid grid-cols-4 container mx-auto gap-10 my-12'>
      {ImagesData.map((img, i) => (
        <div
          key={i}
          className='p-1 bg-white rounded flex-colo border border-green-500'
        >
          <img
            src={img.image}
            alt={img.title}
            className='w-full h-64 object-cover'
          />
          <h1 className='font-semibold text-green-800 italic my-4 leading-6 text-center'>
            {img.title}
          </h1>
        </div>
      ))}
    </div>
  );
};

export default ImageRow;
