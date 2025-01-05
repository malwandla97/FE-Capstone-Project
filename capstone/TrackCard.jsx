import React from 'react';

const TrackCard = ({ track, onPlay }) => {
  return (
    <div className="p-4 bg-white rounded shadow-md">
      <img src={track.album.cover_medium} alt={track.title} className="w-full rounded" />
      <h3 className="mt-2 text-lg font-bold">{track.title}</h3>
      <p className="text-sm text-gray-500">{track.artist.name}</p>
      <button
        onClick={() => onPlay(track.preview, track.title, track.artist.name, track.album.cover_medium)}
        className="mt-2 bg-green-500 text-white p-2 rounded">
        Play
      </button>
    </div>
  );
};

export default TrackCard;