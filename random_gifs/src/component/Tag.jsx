import React, { useState } from "react";
import axios from "axios";

const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;

const Tag = () => {
  const [gif, setGif] = useState("");
  const [tag, setTag] = useState("");

  async function fetchData() {
    if (!tag) return; // prevent empty tag fetch

    try {
      const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
      const response = await axios.get(url);

      const imageUrl =
        response.data.data.images.downsized_large.url;

      setGif(imageUrl);
    } catch (error) {
      console.error("Error fetching GIF:", error);
    }
  }

  function changeHandler(event) {
    setTag(event.target.value);
  }

  return (
<div className="w-[500px] h-[500px] bg-green-500 flex flex-col justify-between items-center p-4 rounded-xl">
  
  <h1 className="text-xl font-bold text-white underline">
    Tag Based GIFs
  </h1>

  <div className="w-full h-[300px] flex items-center justify-center bg-white rounded-lg overflow-hidden">
    {gif && (
      <img
        src={gif}
        alt="GIF"
        className="max-w-full max-h-full object-contain"
      />
    )}
  </div>

  <input
    className="w-full px-3 py-2 rounded"
    placeholder="Enter tag..."
  />

  <button className="bg-white px-4 py-2 rounded font-semibold">
    GENERATE
  </button>

</div>

  );
};

export default Tag;
