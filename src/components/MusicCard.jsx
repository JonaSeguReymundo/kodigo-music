import React from 'react';

const MusicCard = ({ title, artist, cover }) => (
  <div className="bg-white shadow-md rounded-lg p-4 text-center">
    <img src={cover} alt={title} className="w-full h-40 object-cover rounded-md mb-2" />
    <h2 className="text-lg font-semibold">{title}</h2>
    <p className="text-gray-500">{artist}</p>
  </div>
);

export default MusicCard;
