'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Step2() {
  const router = useRouter();
  const [timeLeft, setTimeLeft] = useState(15);
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
      router.push('/step3');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex flex-col items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Link Gateway</h1>
          <p className="text-lg text-gray-600">Step 2 of 3 - You're doing great!</p>
        </div>

        {/* Timer */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6 text-center">
          <div className="text-6xl font-bold text-emerald-600 mb-2">{timeLeft}</div>
          <p className="text-gray-600">seconds remaining</p>
          {timeLeft === 0 && !adClicked && (
            <p className="text-red-500 mt-2">Please click an ad to continue</p>
          )}
          {adClicked && timeLeft === 0 && (
            <p className="text-green-500 mt-2">Ready to proceed!</p>
          )}
        </div>

        {/* Ad Sections */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {/* Ad 1 */}
          <div className="bg-white rounded-lg shadow-lg p-4">
            <h3 className="text-md font-semibold mb-3 text-center">Sponsored</h3>
            <div 
              className="bg-gradient-to-r from-red-400 to-orange-400 rounded-lg p-6 text-white text-center cursor-pointer hover:from-red-500 hover:to-orange-500 transition-all"
              onClick={handleAdClick}
            >
              <div className="text-xl font-bold mb-2">🔥 Hot Deal!</div>
              <p className="text-sm mb-3">Limited time offer</p>
              <div className="bg-white text-red-600 px-3 py-1 rounded-full text-sm font-semibold">
                Get Now
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              * Placeholder ad
            </p>
          </div>

          {/* Ad 2 */}
          <div className="bg-white rounded-lg shadow-lg p-4">
            <h3 className="text-md font-semibold mb-3 text-center">Sponsored</h3>
            <div 
              className="bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg p-6 text-white text-center cursor-pointer hover:from-blue-500 hover:to-cyan-500 transition-all"
              onClick={handleAdClick}
            >
              <div className="text-xl font-bold mb-2">💎 Premium</div>
              <p className="text-sm mb-3">Upgrade your experience</p>
              <div className="bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
                Try Free
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              * Placeholder ad
            </p>
          </div>

          {/* Ad 3 */}
          <div className="bg-white rounded-lg shadow-lg p-4">
            <h3 className="text-md font-semibold mb-3 text-center">Sponsored</h3>
            <div 
              className="bg-gradient-to-r from-purple-400 to-indigo-400 rounded-lg p-6 text-white text-center cursor-pointer hover:from-purple-500 hover:to-indigo-500 transition-all"
              onClick={handleAdClick}
            >
              <div className="text-xl font-bold mb-2">🚀 Launch</div>
              <p className="text-sm mb-3">Start your journey</p>
              <div className="bg-white text-purple-600 px-3 py-1 rounded-full text-sm font-semibold">
                Begin
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              * Placeholder ad
            </p>
          </div>
        </div>

        {/* Banner Ad */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h3 className="text-lg font-semibold mb-4 text-center">Featured Advertisement</h3>
          <div 
            className="bg-gradient-to-r from-yellow-400 to-orange-400 rounded-lg p-8 text-white text-center cursor-pointer hover:from-yellow-500 hover:to-orange-500 transition-all"
            onClick={handleAdClick}
          >
            <div className="text-3xl font-bold mb-2">🎉 Special Promotion!</div>
            <p className="text-lg mb-4">Don't miss out on this exclusive opportunity</p>
            <div className="bg-white text-orange-600 px-6 py-3 rounded-full inline-block font-bold text-lg">
              Click Here Now!
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-2 text-center">
            * This is a placeholder ad. Replace with actual ad network code.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">Progress</span>
            <span className="text-sm font-medium text-gray-700">67%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-emerald-600 h-2 rounded-full w-2/3"></div>
          </div>
        </div>

        {/* Next Button */}
        <div className="text-center">
          <button
            onClick={handleNext}
            disabled={!canProceed}
            className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all ${
              canProceed
                ? 'bg-emerald-600 text-white hover:bg-emerald-700 cursor-pointer'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            {canProceed ? 'Continue to Final Step' : 'Please wait and click an ad'}
          </button>
        </div>

        {/* Instructions */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h4 className="font-semibold text-blue-800 mb-2">Step 2 Instructions:</h4>
          <ul className="text-sm text-blue-700 space-y-1">
            <li>• Wait for the 15-second timer to complete</li>
            <li>• Click on any advertisement above</li>
            <li>• Almost there - one more step to go!</li>
          </ul>
        </div>
      </div>
    </div>
  );
}