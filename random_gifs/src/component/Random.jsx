import React, { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;

const Random = () => {
  const [gif, setGif] = useState("");

  async function fetchData() {
    try {
      const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
      const response = await axios.get(url);

      const imageUrl =
        response.data.data.images.downsized_large.url;

      setGif(imageUrl);
    } catch (error) {
      console.error("Error fetching GIF:", error);
    }
  }

  function clickHandler() {
    fetchData();
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
   <div className="m-20 w-[500px] h-[500px] bg-green-500 flex flex-col justify-between items-center p-4">
      <h1 className="text-xl font-bold text-white underline">
        Random GIFs
      </h1>

      {gif && <img src={gif} alt="Random Gif" width="450" />}

       <button
    onClick={clickHandler}
    className="bg-white text-black px-4 py-2 rounded font-semibold mb-2"
  >
    GENERATE
  </button>
    </div>
  );
};

export default Random;
