// src/war.tsx
"use client";

import React from 'react';

const WarScreen: React.FC = () => {
  const blueTeamPercentage = 60; // Set the percentage for the blue team
  const redTeamPercentage = 100 - blueTeamPercentage; // The remaining percentage for the red team

  return (
    <div className="min-h-screen bg-black text-white p-4 flex flex-col items-center">
      {/* Top Navigation */}
      <div className="w-full max-w-md flex justify-between text-xs mb-4">
        <div className="space-y-1">
          <a href="#" className="block">>twitter</a>
          <a href="#" className="block">>telegram</a>
          <a href="#" className="block">>how it works</a>
        </div>
        <div className="space-y-1 text-right">
          <a href="#" className="block">>abcd...1234</a>
          <a href="#" className="block">>105 SOL</a>
          <a href="#" className="block">>view profile</a>
        </div>
      </div>

      {/* VS Section */}
      <div className="w-full max-w-md text-center mb-4">
        <div className="text-lg mb-2">phone war</div>
        <div className="flex justify-center items-center mb-4">
          <a href="#" className="text-sm">>back</a>
        </div>
        <div className="flex justify-center items-center mb-4">
          <div className="w-24 h-24 bg-gray-800 border-2 border-yellow-500 mr-4">
            [Image]
          </div>
          <div className="w-24 h-24 bg-gray-800 border-2 border-yellow-500">
            [Image]
          </div>
        </div>
        <div className="text-4xl font-bold mb-2">VS</div>
      </div>

      {/* Progress Bar Section */}
      <div className="w-full max-w-md mb-4">
        <div className="text-center text-sm mb-2">1.03M $WIF vs 1.67M $POPCAT</div>
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
        <div className="text-center text-xs mt-2">SWIF SOLDIERS ARE WINNING BY 12.32 SOL</div>
      </div>

      {/* Pledge Section */}
      <div className="w-full max-w-md mb-4 text-center">
        <div className="text-green-400 text-xs mb-2">>pledge $WIF</div>
        <div className="text-green-400 text-xs mb-2">>pledge $POPCAT</div>
        <div className="flex justify-center space-x-4 mt-4">
          <button className="bg-yellow-500 px-4 py-2 rounded-lg">Pledge</button>
          <button className="bg-gray-700 px-4 py-2 rounded-lg">Unpledge</button>
        </div>
      </div>

      {/* Chat Box Section */}
      <div className="w-full max-w-md bg-gray-800 p-4 rounded-lg h-48 mb-4 text-center">
        chat box
      </div>
      <div className="w-full max-w-md flex justify-around text-gray-400 text-xs">
        <span>live chat</span>
        <span>|</span>
        <span>chart</span>
        <span>|</span>
        <span>your pledges</span>
      </div>
    </div>
  );
};

export default WarScreen;
