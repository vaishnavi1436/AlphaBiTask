import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GiphyDisplay = ({ searchTerm }) => {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    const apiKey = 'vaishnavikulkarni58ab95e827c843b7a7895070707aa641';
    const apiUrl = `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${apiKey}&limit=10`;

    axios.get(apiUrl)
      .then((response) => {
        setGifs(response.data.data);
      })
      .catch((error) => {
        console.error('Error fetching GIFs:', error);
      });
  }, [searchTerm]);

  return (
    <div>
      {gifs.map((gif) => (
        <img key={gif.id} src={gif.images.fixed_height.url} alt={gif.title} />
      ))}
    </div>
  );
};

export default GiphyDisplay;
