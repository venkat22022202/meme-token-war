// src/memeWar.tsx
"use client";

import React from 'react';

const MemeWarScreen: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-8 flex flex-col items-center">
      {/* Top Navigation */}
      <div className="w-full max-w-6xl flex justify-between text-sm mb-8">
        <div className="space-y-2">
          <a href="#" className="block hover:text-yellow-400 transition">>twitter</a>
          <a href="#" className="block hover:text-yellow-400 transition">>telegram</a>
          <a href="#" className="block hover:text-yellow-400 transition">>how it works</a>
        </div>
        <div className="space-y-2 text-right">
          <a href="#" className="block hover:text-yellow-400 transition">>abcd...1234</a>
          <a href="#" className="block hover:text-yellow-400 transition">>105 SOL</a>
          <a href="#" className="block hover:text-yellow-400 transition">>view profile</a>
        </div>
      </div>

      {/* Start a Meme War Section */}
      <div className="w-full max-w-6xl text-center mb-8">
        <div className="text-lg mb-2 text-gray-300">phone land</div>
        <div className="text-3xl font-extrabold mb-8">>start a meme war</div>
      </div>

      {/* World War Section */}
      <div className="w-full max-w-6xl bg-gray-800 p-8 rounded-lg text-center mb-8 shadow-lg">
        <div className="text-4xl font-bold mb-4 text-yellow-300">WORLD WAR</div>
        <div className="text-green-400 text-lg mb-4 animate-pulse">>join</div>
        <div className="flex justify-center items-center mb-8">
          <div className="w-32 h-32 bg-gray-700 border-4 border-yellow-500 flex items-center justify-center text-sm text-gray-400">
            [Image]
          </div>
          <div className="text-4xl font-bold mx-8">VS</div>
          <div className="w-32 h-32 bg-gray-700 border-4 border-yellow-500 flex items-center justify-center text-sm text-gray-400">
            [Image]
          </div>
        </div>
        <div className="text-sm text-gray-300">>43.2K $WIF pledged</div>
        <div className="text-sm text-gray-300">+risk-free bonded</div>
        <div className="text-sm text-green-400">192 live soldiers</div>
      </div>

      {/* Token Search Section */}
      <div className="w-full max-w-6xl flex items-center mb-8">
        <input
          type="text"
          placeholder="token 1"
          className="flex-1 p-3 bg-gray-800 text-white border border-gray-600 rounded-l-lg placeholder-gray-400 focus:border-yellow-500 focus:outline-none transition"
        />
        <input
          type="text"
          placeholder="token 2 (optional)"
          className="flex-1 p-3 bg-gray-800 text-white border border-gray-600 placeholder-gray-400 focus:border-yellow-500 focus:outline-none transition"
        />
        <button className="w-auto p-3 bg-yellow-500 text-black rounded-r-lg ml-4 hover:bg-yellow-600 transition">SEARCH</button>
      </div>

      {/* Meme War List */}
      <div className="w-full max-w-6xl space-y-4">
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className="flex items-center justify-between bg-gray-800 p-4 rounded-lg text-base shadow-md transition transform hover:scale-105">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gray-700 border-2 border-yellow-500 flex items-center justify-center text-xs text-gray-400">
                [Image]
              </div>
              <div>
                <div className="text-green-400">>34.45K PLEDGED</div>
                <div className="text-gray-400">+37 live soldiers</div>
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-200">VS</div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gray-700 border-2 border-yellow-500 flex items-center justify-center text-xs text-gray-400">
                [Image]
              </div>
              <div>
                <div className="text-red-400">>34.45K PLEDGED</div>
                <div className="text-gray-400">+37 live soldiers</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemeWarScreen;
