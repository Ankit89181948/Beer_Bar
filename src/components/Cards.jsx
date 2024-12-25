import React from 'react';
import randomImage from "./r_img.png";

const Cards = ({ name, rating, img,review,price }) => {
     
  return (
    <div className="w-60 h-auto border rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 cursor-pointer m-3">
      <img
      // if img is not available then show random image
        src={img}
        alt={`Image of ${name}`}
        className="w-full h-45 object-cover"
        onError={(e) => {
          e.target.onerror = null; 
          e.target.src = randomImage;
        }}
      />
      <div className="p-4">
        <p className="text-lg font-semibold mb-2">Name: {name}</p>
        <p className="text-lg font-semibold mb-2">Price: {price}</p>
        <p className="text-xl text-gray-900 mb-1 font-semibold">Rating: {rating.toFixed(1)}</p>
        <p className="text-xl text-gray-900 font-semibold">Reviews: {review}</p>
      </div>
    </div>
  );
};

export default Cards;
