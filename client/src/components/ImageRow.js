import React from 'react';
// import ImagesData from '../Data';
import Loading from './Loading';

const ImageRow = ({ result, loading }) => {
  if (loading) return <Loading />;
  return (
    <div className='grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 container mx-auto gap-10 my-12 px-4 py-3'>
      {result.length < 1
        ? 'No images to display'
        : result.map((img, i) => (
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
