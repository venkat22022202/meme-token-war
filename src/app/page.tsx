// src/app/page.tsx
"use client";

import React, { useState } from 'react';
import WarScreen from './war'; // Import WarScreen component
import MemeWarScreen from './memeWar'; // Import MemeWarScreen component
import { PublicKey } from '@solana/web3.js'; // Import Solana's PublicKey class for validation

const Home: React.FC = () => {
  const [screen, setScreen] = useState<'start' | 'main' | 'war' | 'memeWar'>('start');
  const [token1Address, setToken1Address] = useState<string>('');
  const [token2Address, setToken2Address] = useState<string>('');
  const [token1Error, setToken1Error] = useState<string | null>(null);
  const [token2Error, setToken2Error] = useState<string | null>(null);
  const [selectedDuration, setSelectedDuration] = useState<string>('8 Hours');
  const [apiResponse, setApiResponse] = useState<string | null>(null);

  const durations = [
    '1 Hour',
    '2 Hours',
    '8 Hours',
    '12 Hours',
    '16 Hours',
    '24 Hours',
    '36 Hours',
    '48 Hours',
  ];

  const handleDurationChange = (duration: string) => {
    setSelectedDuration(duration);
  };

  const validateSolanaAddress = (address: string): boolean => {
    try {
      new PublicKey(address); // This will throw an error if the address is invalid
      return true;
    } catch (e) {
      return false;
    }
  };

  const handleToken1Change = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const address = e.target.value;
    setToken1Address(address);
    let error = null;
    if (!validateSolanaAddress(address)) {
      error = 'Invalid Solana public key';
    } else if (address === token2Address) {
      error = 'Token 1 and Token 2 addresses must be different';
    }
    setToken1Error(error);

    // Make an API call after the address is verified and there is no error
    if (!error) {
      try {
        const response = await fetch('/api/hello');
        const data = await response.json();
        setApiResponse(data.message); // Set the API response message
      } catch (err) {
        console.error('Error calling API:', err);
      }
    }
  };

  const handleToken2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const address = e.target.value;
    setToken2Address(address);
    let error = null;
    if (!validateSolanaAddress(address)) {
      error = 'Invalid Solana public key';
    } else if (address === token1Address) {
      error = 'Token 1 and Token 2 addresses must be different';
    }
    setToken2Error(error);
  };

  const isSubmitDisabled =
    !token1Address ||
    !token2Address ||
    token1Error !== null ||
    token2Error !== null;

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      {/* Conditional rendering based on the current screen */}
      {screen === 'start' && (
        <div className="space-x-4">
          <button
            onClick={() => setScreen('main')}
            className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700"
          >
            Let's Get Started
          </button>
          <button
            onClick={() => setScreen('war')}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Go to War
          </button>
          <button
            onClick={() => setScreen('memeWar')}
            className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            Meme War
          </button>
        </div>
      )}

      {screen === 'main' && (
        <div className="w-full max-w-md bg-gray-900 text-white p-6 rounded-lg">
          {/* Main form section */}
          <form className="space-y-4">
            <div>
              <label className="block mb-2">>token 1 contract address</label>
              <input
                type="text"
                value={token1Address}
                onChange={handleToken1Change}
                className={`w-full p-2 bg-gray-900 text-white border ${
                  token1Error ? 'border-red-600' : 'border-green-600'
                } rounded-lg focus:outline-none`}
              />
              {token1Error && <p className="text-red-600 text-sm mt-1">{token1Error}</p>}
            </div>

            <div>
              <label className="block mb-2">>token 2 contract address</label>
              <input
                type="text"
                value={token2Address}
                onChange={handleToken2Change}
                className={`w-full p-2 bg-gray-900 text-white border ${
                  token2Error ? 'border-red-600' : 'border-green-600'
                } rounded-lg focus:outline-none`}
              />
              {token2Error && <p className="text-red-600 text-sm mt-1">{token2Error}</p>}
            </div>

            <div>
              <label className="block mb-2">>token war duration</label>
              <div className="flex flex-wrap gap-2">
                {durations.map((duration) => (
                  <button
                    key={duration}
                    type="button"
                    onClick={() => handleDurationChange(duration)}
                    className={`px-4 py-2 rounded-lg ${
                      selectedDuration === duration
                        ? 'bg-red-600 text-white'
                        : 'bg-gray-800 text-gray-400'
                    }`}
                  >
                    {duration}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block mb-2">>token deposit bonus - 0.5%</label>
            </div>

            <div>
              <button
                type="submit"
                className={`w-full py-3 rounded-lg ${
                  isSubmitDisabled
                    ? 'bg-gray-600 cursor-not-allowed'
                    : 'bg-red-600 hover:bg-red-700'
                } text-white`}
                disabled={isSubmitDisabled}
              >
                Create token war
              </button>
            </div>

            <p className="text-xs mt-4 text-center">
              If your token war successfully completes risk-free bond you will
              receive 0.5 SOL as a reward
            </p>

            {apiResponse && <p className="mt-4 text-green-500">{apiResponse}</p>}
          </form>
        </div>
      )}

      {screen === 'war' && <WarScreen />}

      {screen === 'memeWar' && <MemeWarScreen />}
    </div>
  );
};

export default Home;
