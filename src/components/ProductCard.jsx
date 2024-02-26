import React from 'react';

function ProductCard({ product, index }) {
  const {images, name, price} = product; 
  return (
    <div key={index} className='min-w-max flex flex-col'>
      <a className="group relative cursor-pointer mb-2">
        <img
          className=" w-36 h-48 md:w-72 md:h-96 object-cover md:80 "
          src={images[0]}
          alt={`product ${index}`}
        />
        <img
          className="  w-36 h-48  md:w-72 md:h-96 md:80 object-cover absolute top-0 left-0 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
          src={images[1]}
          alt={`product ${index}`}
        />
      </a> 
      <a className="text-center font-archivoNarrow uppercase cursor-pointer font text-sm md:text-lg">{name}</a>
      <div className="text-center font-archivoNarrow text-lg  md:text-2xl font-semibold text-gray-700">${price}</div>
    </div>
  );
}

export default ProductCard;
