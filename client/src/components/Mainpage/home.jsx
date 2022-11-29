import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div name="home" className="w-full h-screen">
      <div className="w-full h-screen overflow-hidden bg-hero bg-no-repeat bg-center overflow-hidden bg-cover md:bg-fixed sm:bg-scroll">
        <div className="flex flex-row md:flex-row sm:flex-col sm:items-center w-full h-full ">
          <div className="flex flex-col text-[#df2027] justify-center md:items-center sm:items-center w-full px-2 py-8  sm:mt-60">
            <div className="flex flex-col md:items-center md:mb-60 sm:items-center sm:mt-40 gap-4 ">
              <div className="text-8xl font-geomatik">Spotify Analytics </div>
              <div className="text-lg font-geomatik text-indigo-400">
                Get your favorite artist details in seconds
              </div>
              <div>
                <button
                  onClick={() => navigate("/search")}
                  className="bg-indigo-400 px-4 py-2 text-zinc-200 font-geomatik
                 rounded-3xl hover:bg-transparent hover:text-indigo-400 border border-4 border-indigo-400
                  transition duration-300 ease-in-out"
                >
                  Search Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
