import React from 'react';

const MusicCard = ({ title, artist, cover }) => (
  <div className="bg-[#181818] hover:bg-[#282828] transition-colors rounded-lg p-4 text-white w-48">
    <img
      src={cover}
      alt={title}
      className="w-full h-48 object-cover rounded-md mb-3"
    />
    <h2 className="text-sm font-semibold truncate">{title}</h2>
    <p className="text-xs text-gray-400">{artist}</p>
  </div>
);

export default MusicCard;
