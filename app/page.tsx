'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const [timeLeft, setTimeLeft] = useState(20);
  const [adClicked, setAdClicked] = useState(false);
  const [canProceed, setCanProceed] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (timeLeft === 0 && adClicked) {
      setCanProceed(true);
    }
  }, [timeLeft, adClicked]);

  const handleAdClick = () => {
    setAdClicked(true);
  };

  const handleNext = () => {
    if (canProceed) {
      router.push('/step2');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Link Gateway</h1>
          <p className="text-lg text-gray-600">Step 1 of 3 - Almost there!</p>
        </div>

        {/* Timer */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6 text-center">
          <div className="text-6xl font-bold text-indigo-600 mb-2">{timeLeft}</div>
          <p className="text-gray-600">seconds remaining</p>
          {timeLeft === 0 && !adClicked && (
            <p className="text-red-500 mt-2">Please click an ad to continue</p>
          )}
          {adClicked && timeLeft === 0 && (
            <p className="text-green-500 mt-2">Ready to proceed!</p>
          )}
        </div>

        {/* Ad Sections */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Ad 1 */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold mb-4 text-center">Advertisement</h3>
            <div 
              className="bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg p-8 text-white text-center cursor-pointer hover:from-purple-500 hover:to-pink-500 transition-all"
              onClick={handleAdClick}
            >
              <div className="text-2xl font-bold mb-2">🎯 Special Offer!</div>
              <p className="mb-4">Click here for amazing deals</p>
              <div className="bg-white text-purple-600 px-4 py-2 rounded-full inline-block font-semibold">
                Click Me!
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              * This is a placeholder ad. Replace with actual ad network code.
            </p>
          </div>

          {/* Ad 2 */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold mb-4 text-center">Advertisement</h3>
            <div 
              className="bg-gradient-to-r from-green-400 to-blue-400 rounded-lg p-8 text-white text-center cursor-pointer hover:from-green-500 hover:to-blue-500 transition-all"
              onClick={handleAdClick}
            >
              <div className="text-2xl font-bold mb-2">💰 Earn Money!</div>
              <p className="mb-4">Start earning today</p>
              <div className="bg-white text-green-600 px-4 py-2 rounded-full inline-block font-semibold">
                Learn More
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              * This is a placeholder ad. Replace with actual ad network code.
            </p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">Progress</span>
            <span className="text-sm font-medium text-gray-700">33%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-indigo-600 h-2 rounded-full w-1/3"></div>
          </div>
        </div>

        {/* Next Button */}
        <div className="text-center">
          <button
            onClick={handleNext}
            disabled={!canProceed}
            className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all ${
              canProceed
                ? 'bg-indigo-600 text-white hover:bg-indigo-700 cursor-pointer'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            {canProceed ? 'Continue to Step 2' : 'Please wait and click an ad'}
          </button>
        </div>

        {/* Instructions */}
        <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <h4 className="font-semibold text-yellow-800 mb-2">Instructions:</h4>
          <ul className="text-sm text-yellow-700 space-y-1">
            <li>• Wait for the timer to reach 0</li>
            <li>• Click on at least one advertisement above</li>
            <li>• The "Continue" button will become active</li>
          </ul>
        </div>
      </div>
    </div>
  );
}