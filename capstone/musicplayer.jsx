import React, { useState, useRef } from 'react';

const MusicPlayer = ({ track }) => {
  const audioRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="p-4 bg-white shadow-md rounded mt-6">
      <h2 className="text-xl font-semibold">{track.title}</h2>
      <p className="text-sm text-gray-500">{track.artist}</p>
      <img src={track.cover} alt="Album Cover" className="w-32 h-32 my-2 mx-auto" />
      <audio ref={audioRef} src={track.preview} controls className="w-full"></audio>
      <button onClick={togglePlayPause} className="mt-2 bg-blue-500 text-white p-2 rounded">
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  );
};

export default MusicPlayer;