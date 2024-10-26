// src/app/page.tsx
"use client";

import React, { useState } from 'react';
import WarScreen from './war';
import MemeWarScreen from './memeWar';
import { PublicKey } from '@solana/web3.js';

const Home: React.FC = () => {
  const [screen, setScreen] = useState<'main' | 'war' | 'memeWar'>('main');
  const [token1Address, setToken1Address] = useState<string>('');
  const [token2Address, setToken2Address] = useState<string>('');
  const [token1Error, setToken1Error] = useState<string | null>(null);
  const [token2Error, setToken2Error] = useState<string | null>(null);
  const [selectedDuration, setSelectedDuration] = useState<string>('8 Hours');
  const [apiResponse, setApiResponse] = useState<string | null>(null);

  const durations = [
    '1 Hour', '2 Hours', '8 Hours', '12 Hours', '16 Hours',
    '24 Hours', '36 Hours', '48 Hours'
  ];  

  const handleDurationChange = (duration: string) => setSelectedDuration(duration);

  const validateSolanaAddress = (address: string): boolean => {
    try {
      new PublicKey(address);
      return true;
    } catch {
      return false;
    }
  };

  const handleToken1Change = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const address = e.target.value;
    setToken1Address(address);
    let error = !validateSolanaAddress(address)
      ? 'Invalid Solana public key'
      : address === token2Address
      ? 'Token 1 and Token 2 addresses must be different'
      : null;
    setToken1Error(error);

    if (!error) {
      try {
        const response = await fetch('/api/hello');
        const data = await response.json();
        setApiResponse(data.message);
      } catch (err) {
        console.error('Error calling API:', err);
      }
    }
  };

  const handleToken2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const address = e.target.value;
    setToken2Address(address);
    let error = !validateSolanaAddress(address)
      ? 'Invalid Solana public key'
      : address === token1Address
      ? 'Token 1 and Token 2 addresses must be different'
      : null;
    setToken2Error(error);
  };

  const isSubmitDisabled = !token1Address || !token2Address || token1Error || token2Error;

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center p-4">
      {/* Navigation Bar */}
      <nav className="w-full max-w-3xl flex justify-around py-4 mb-6 bg-gray-800 rounded-lg shadow-lg">
        <button
          onClick={() => setScreen('main')}
          className={`px-4 py-2 rounded ${
            screen === 'main' ? 'bg-red-600 text-white' : 'text-gray-400'
          } hover:bg-red-700 transition`}
        >
          Main
        </button>
        <button
          onClick={() => setScreen('war')}
          className={`px-4 py-2 rounded ${
            screen === 'war' ? 'bg-blue-600 text-white' : 'text-gray-400'
          } hover:bg-blue-700 transition`}
        >
          War
        </button>
        <button
          onClick={() => setScreen('memeWar')}
          className={`px-4 py-2 rounded ${
            screen === 'memeWar' ? 'bg-green-600 text-white' : 'text-gray-400'
          } hover:bg-green-700 transition`}
        >
          Meme War
        </button>
      </nav>

      {/* Conditional rendering based on the current screen */}
      {screen === 'main' && (
        <div className="w-full max-w-md bg-gray-900 text-white p-6 rounded-lg">
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
