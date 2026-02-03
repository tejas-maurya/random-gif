import { useState } from "react";
import "./App.css";
import Random from "./component/Random";
import Tag from "./component/Tag";

function App() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-blue-200 gap-6 py-8 px-4">
      
      {/* Header */}
      <div className="w-full max-w-[600px] h-[50px] flex justify-center items-center border-2 border-blue-600 bg-blue-400 rounded-xl shadow-md">
        <h1 className="text-xl font-bold text-white tracking-wide">
          Random GIFs
        </h1>
      </div>

      {/* Components */}
      <Random />
      <Tag />

    </div>
  );
}


export default App;
