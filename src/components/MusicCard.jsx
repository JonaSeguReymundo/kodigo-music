import React from 'react';

const MusicCard = ({ title, artist, cover }) => (
  <div className="bg-black hover:bg-gray-900 transition-colors rounded-lg p-4 text-white w-48 font-inter cursor-pointer shadow-md shadow-green-800/40">
    <img
      src={cover}
      alt={title}
      className="w-full h-48 object-cover rounded-md mb-3"
    />
    <h2 className="text-sm font-semibold truncate text-green-500 hover:text-green-400 transition-colors">
      {title}
    </h2>
    <p className="text-xs text-gray-400">{artist}</p>
  </div>
);

export default MusicCard;
