// src/war.tsx
"use client";

import React, { useState } from 'react';
import useLogAction from './hooks/useLogAction';

// Import images from the src/images folder
import leftTeamImage from './images/leftTeamImage.png';
import rightTeamImage from './images/rightTeamImage.png';

const WarScreen: React.FC = () => {
  const blueTeamPercentage = 60; // Set the percentage for the blue team
  const redTeamPercentage = 100 - blueTeamPercentage; // The remaining percentage for the red team

  // Initialize the logging hook
  const logAction = useLogAction();

  // State for input values for both teams
  const [leftInput, setLeftInput] = useState('');
  const [rightInput, setRightInput] = useState('');

  // Handlers for pledge and unpledge actions
  const handlePledge = (side: string, amount: string) => {
    logAction(side, `pledge ${amount}`);
  };

  const handleUnpledge = (side: string, amount: string) => {
    logAction(side, `unpledge ${amount}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-8 flex flex-col items-center w-full">
      {/* Container for full-width desktop alignment */}
      <div className="w-full max-w-5xl flex-grow mx-auto flex flex-col items-center space-y-10 p-4">
        
        {/* Top Navigation */}
        <div className="w-full flex justify-between text-base mb-10">
          <div className="space-y-2">
            <a href="#" className="block hover:text-yellow-400 transition-colors">> twitter</a>
            <a href="#" className="block hover:text-yellow-400 transition-colors">> telegram</a>
            <a href="#" className="block hover:text-yellow-400 transition-colors">> how it works</a>
          </div>
          <div className="space-y-2 text-right">
            <a href="#" className="block hover:text-yellow-400 transition-colors">> abcd...1234</a>
            <a href="#" className="block hover:text-yellow-400 transition-colors">> 105 SOL</a>
            <a href="#" className="block hover:text-yellow-400 transition-colors">> view profile</a>
          </div>
        </div>

        {/* VS Section */}
        <div className="w-full flex justify-center items-center space-x-16">
          {/* Left Team */}
          <div className="text-center border border-yellow-500 p-4 rounded-lg bg-gray-800 shadow-lg">
            <div className="w-32 h-32 bg-gray-900 border-2 border-yellow-500 flex items-center justify-center rounded-lg overflow-hidden">
              <img src={leftTeamImage} alt="Left Team" className="object-cover w-full h-full" />
            </div>
            <div className="mt-4 text-lg font-bold text-yellow-500">$WIF</div>
            <div className="mt-1 text-xs text-gray-400">1.03M SWIF pledged</div>
            
            {/* Input for Pledge Amount */}
            <input
              type="number"
              placeholder="Enter WIF"
              value={leftInput}
              onChange={(e) => setLeftInput(e.target.value)}
              className="bg-gray-700 text-white rounded-lg px-4 py-2 mt-2 text-center w-28 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />

            <button
              onClick={() => handlePledge('left', leftInput)}
              className="bg-yellow-500 px-4 py-2 rounded-lg mt-2 text-sm hover:bg-yellow-400 transition-colors shadow-md"
            >
              Pledge
            </button>
            <button
              onClick={() => handleUnpledge('left', leftInput)}
              className="bg-gray-700 px-4 py-2 rounded-lg mt-2 text-sm hover:bg-gray-600 transition-colors shadow-md"
            >
              Unpledge
            </button>
            <div className="mt-2 text-green-400 text-sm">+192 live soldiers</div>
            <div className="text-xs text-gray-400">percent | stop</div>
          </div>

          {/* VS Text */}
          <div className="text-center text-6xl font-extrabold text-gray-200 shadow-md">VS</div>

          {/* Right Team */}
          <div className="text-center border border-yellow-500 p-4 rounded-lg bg-gray-800 shadow-lg">
            <div className="w-32 h-32 bg-gray-900 border-2 border-yellow-500 flex items-center justify-center rounded-lg overflow-hidden">
              <img src={rightTeamImage} alt="Right Team" className="object-cover w-full h-full" />
            </div>
            <div className="mt-4 text-lg font-bold text-yellow-500">$POPCAT</div>
            <div className="mt-1 text-xs text-gray-400">1.67M SPOPCAT pledged</div>

            {/* Input for Pledge Amount */}
            <input
              type="number"
              placeholder="Enter POPCAT"
              value={rightInput}
              onChange={(e) => setRightInput(e.target.value)}
              className="bg-gray-700 text-white rounded-lg px-4 py-2 mt-2 text-center w-28 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />

            <button
              onClick={() => handlePledge('right', rightInput)}
              className="bg-yellow-500 px-4 py-2 rounded-lg mt-2 text-sm hover:bg-yellow-400 transition-colors shadow-md"
            >
              Pledge
            </button>
            <button
              onClick={() => handleUnpledge('right', rightInput)}
              className="bg-gray-700 px-4 py-2 rounded-lg mt-2 text-sm hover:bg-gray-600 transition-colors shadow-md"
            >
              Unpledge
            </button>
            <div className="mt-2 text-green-400 text-sm">+155 live soldiers</div>
            <div className="text-xs text-gray-400">percent | stop</div>
          </div>
        </div>

        {/* Progress Bar Section */}
        <div className="w-full space-y-4">
          <div className="text-center text-lg text-gray-400">1.03M $WIF vs 1.67M $POPCAT</div>
          <div className="w-full bg-gray-700 rounded-full h-8 overflow-hidden flex shadow-lg">
            <div className="bg-blue-500 h-full" style={{ width: `${blueTeamPercentage}%` }} />
            <div className="bg-red-500 h-full" style={{ width: `${redTeamPercentage}%` }} />
          </div>
        </div>

        {/* Chat Box Section */}
        <div className="w-full bg-gray-800 p-6 rounded-lg h-60 text-center flex flex-col space-y-2 shadow-lg">
          <span className="text-gray-400 text-lg">chat box</span>
          <div className="flex justify-center space-x-4 text-gray-400 text-sm">
            <span className="cursor-pointer hover:text-white transition-colors">live chat</span>
            <span>|</span>
            <span className="cursor-pointer hover:text-white transition-colors">chart</span>
            <span>|</span>
            <span className="cursor-pointer hover:text-white transition-colors">your pledges</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default WarScreen;
