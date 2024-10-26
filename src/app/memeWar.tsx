// src/memeWar.tsx
"use client";

import React from 'react';

const MemeWarScreen: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-gray-900 to-black text-white p-8 flex flex-col items-center">
      {/* Full-width Container */}
      <div className="w-full flex flex-col items-center space-y-12">
        
        {/* Top Navigation */}
        <div className="w-full flex justify-between text-sm mb-8 px-4">
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
        <div className="w-full text-center mb-8 px-4">
          <div className="text-lg mb-2 text-gray-300">phone land</div>
          <div className="text-4xl font-extrabold mb-8 text-yellow-500">> start a meme war</div>
        </div>

        {/* World War Section */}
        <div className="w-full bg-gray-800 p-10 rounded-xl text-center mb-12 shadow-2xl px-4">
          <div className="text-4xl font-bold mb-4 text-yellow-300">WORLD WAR</div>
          <div className="text-green-400 text-xl mb-6 animate-pulse">> join</div>
          <div className="flex justify-center items-center mb-8">
            <div className="w-36 h-36 bg-gray-700 border-4 border-yellow-500 flex items-center justify-center text-sm text-gray-400 rounded-lg">
              [Image]
            </div>
            <div className="text-5xl font-bold mx-8">VS</div>
            <div className="w-36 h-36 bg-gray-700 border-4 border-yellow-500 flex items-center justify-center text-sm text-gray-400 rounded-lg">
              [Image]
            </div>
          </div>
          <div className="text-sm text-gray-300">>43.2K $WIF pledged</div>
          <div className="text-sm text-gray-300">+risk-free bonded</div>
          <div className="text-sm text-green-400">192 live soldiers</div>
        </div>

        {/* Token Search Section */}
        <div className="w-full flex items-center mb-8 px-4 space-x-4">
          <input
            type="text"
            placeholder="token 1"
            className="flex-1 p-4 bg-gray-800 text-white border border-gray-600 rounded-lg placeholder-gray-400 focus:border-yellow-500 focus:outline-none transition"
          />
          <input
            type="text"
            placeholder="token 2 (optional)"
            className="flex-1 p-4 bg-gray-800 text-white border border-gray-600 rounded-lg placeholder-gray-400 focus:border-yellow-500 focus:outline-none transition"
          />
          <button className="w-auto px-6 py-4 bg-yellow-500 text-black rounded-lg hover:bg-yellow-600 transition">SEARCH</button>
        </div>

        {/* Meme War List */}
        <div className="w-full space-y-6 px-4">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="flex items-center justify-between bg-gray-800 p-6 rounded-xl text-lg shadow-lg transition transform hover:scale-105">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-gray-700 border-2 border-yellow-500 flex items-center justify-center text-xs text-gray-400 rounded-md">
                  [Image]
                </div>
                <div>
                  <div className="text-green-400">>34.45K PLEDGED</div>
                  <div className="text-gray-400">+37 live soldiers</div>
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-200">VS</div>
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-gray-700 border-2 border-yellow-500 flex items-center justify-center text-xs text-gray-400 rounded-md">
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
    </div>
  );
};

export default MemeWarScreen;
