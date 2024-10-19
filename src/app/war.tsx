// src/war.tsx
"use client";

import React from 'react';

const WarScreen: React.FC = () => {
  const blueTeamPercentage = 60; // Set the percentage for the blue team
  const redTeamPercentage = 100 - blueTeamPercentage; // The remaining percentage for the red team

  return (
    <div className="min-h-screen bg-black text-white p-6 flex flex-col items-center">
      {/* Top Navigation */}
      <div className="w-full max-w-4xl flex justify-between text-sm mb-6">
        <div className="space-y-1">
          <a href="#" className="block">>twitter</a>
          <a href="#" className="block">>telegram</a>
          <a href="#" className="block">>how it works</a>
        </div>
        <div className="text-center">
          <span className="text-lg">war</span>
        </div>
        <div className="space-y-1 text-right">
          <a href="#" className="block">>abcd...1234</a>
          <a href="#" className="block">>105 SOL</a>
          <a href="#" className="block">>view profile</a>
        </div>
      </div>

      {/* Back Button, VS, and Close Icon */}
      <div className="w-full max-w-4xl flex items-center justify-between mb-6">
        <a href="#" className="text-lg">>back</a>
        <div className="text-4xl font-bold">VS</div>
        <div className="text-red-600 text-2xl">✕</div>
      </div>

      {/* Progress Bar Section */}
      <div className="w-full max-w-4xl flex flex-col items-center mb-6">
        <div className="w-full bg-gray-700 rounded-full h-4 flex overflow-hidden">
          <div
            className="bg-blue-500 h-full"
            style={{ width: `${blueTeamPercentage}%` }}
          />
          <div
            className="bg-red-500 h-full"
            style={{ width: `${redTeamPercentage}%` }}
          />
        </div>
        <div className="text-center mt-2">SWIF SOLDIERS ARE WINNING BY 12.32 SOL</div>
      </div>

      {/* Main War Content */}
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Left Side */}
        <div className="text-center">
          {/* Image Placeholder */}
          <div className="w-40 h-40 bg-gray-800 mx-auto mb-4 border-2 border-yellow-500">[Image Placeholder]</div>
          <div className="font-bold text-lg mb-2">$WIF</div>
          <button className="bg-yellow-500 px-4 py-2 rounded-lg mb-2 w-28">Pledge</button>
          <button className="bg-gray-700 px-4 py-2 rounded-lg w-28">Unpledge</button>
          <div className="mt-4 text-left text-sm">
            <p className="mb-1">strike-free pledge completed:</p>
            <p className="text-gray-400 mb-1">>1.03M $WIF pledged</p>
            <p className="font-bold text-green-400 mb-1">>192 live soldiers</p>
            <p className="text-gray-400">>agent ...soldier</p>
          </div>
        </div>

        {/* Middle Section (Chat Box) */}
        <div className="text-center">
          <div className="bg-gray-800 p-4 rounded-lg h-56 w-full mx-auto mb-4">chat box</div>
          <div className="flex justify-center space-x-2 text-gray-400 text-xs">
            <span>show chat</span> <span>|</span> <span>show pledges</span>
          </div>
        </div>

        {/* Right Side */}
        <div className="text-center">
          {/* Image Placeholder */}
          <div className="w-40 h-40 bg-gray-800 mx-auto mb-4 border-2 border-yellow-500">[Image Placeholder]</div>
          <div className="font-bold text-lg mb-2">$POPCAT</div>
          <button className="bg-yellow-500 px-4 py-2 rounded-lg mb-2 w-28">Pledge</button>
          <button className="bg-gray-700 px-4 py-2 rounded-lg w-28">Unpledge</button>
          <div className="mt-4 text-left text-sm">
            <p className="mb-1">strike-free pledge completed:</p>
            <p className="text-gray-400 mb-1">>1.67M $POPCAT pledged</p>
            <p className="font-bold text-green-400 mb-1">>155 live soldiers</p>
            <p className="text-gray-400">>agent ...soldier</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WarScreen;
