'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Step3() {
  const router = useRouter();
  const [timeLeft, setTimeLeft] = useState(10);
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
      router.push('/unlock');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 flex flex-col items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Link Gateway</h1>
          <p className="text-lg text-gray-600">Final Step - You're almost there!</p>
        </div>

        {/* Timer */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6 text-center">
          <div className="text-6xl font-bold text-purple-600 mb-2">{timeLeft}</div>
          <p className="text-gray-600">seconds remaining</p>
          {timeLeft === 0 && !adClicked && (
            <p className="text-red-500 mt-2">Please click an ad to unlock your content</p>
          )}
          {adClicked && timeLeft === 0 && (
            <p className="text-green-500 mt-2">🎉 Ready to unlock!</p>
          )}
        </div>

        {/* Large Banner Ad */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h3 className="text-xl font-semibold mb-4 text-center">Premium Advertisement</h3>
          <div 
            className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg p-12 text-white text-center cursor-pointer hover:from-pink-600 hover:to-purple-700 transition-all"
            onClick={handleAdClick}
          >
            <div className="text-4xl font-bold mb-4">🌟 EXCLUSIVE OFFER 🌟</div>
            <p className="text-xl mb-6">Get premium access to amazing content and services</p>
            <div className="bg-white text-purple-600 px-8 py-4 rounded-full inline-block font-bold text-xl">
              CLAIM NOW - LIMITED TIME!
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-2 text-center">
            * This is a placeholder ad. Replace with actual ad network code.
          </p>
        </div>

        {/* Side Ads */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Ad 1 */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold mb-4 text-center">Sponsored Content</h3>
            <div 
              className="bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg p-8 text-white text-center cursor-pointer hover:from-teal-500 hover:to-blue-600 transition-all"
              onClick={handleAdClick}
            >
              <div className="text-2xl font-bold mb-2">💰 Make Money Online</div>
              <p className="mb-4">Start earning from home today</p>
              <div className="bg-white text-teal-600 px-4 py-2 rounded-full inline-block font-semibold">
                Start Now
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              * Placeholder ad
            </p>
          </div>

          {/* Ad 2 */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold mb-4 text-center">Sponsored Content</h3>
            <div 
              className="bg-gradient-to-r from-orange-400 to-red-500 rounded-lg p-8 text-white text-center cursor-pointer hover:from-orange-500 hover:to-red-600 transition-all"
              onClick={handleAdClick}
            >
              <div className="text-2xl font-bold mb-2">🎯 Best Deals</div>
              <p className="mb-4">Save up to 80% on everything</p>
              <div className="bg-white text-orange-600 px-4 py-2 rounded-full inline-block font-semibold">
                Shop Now
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              * Placeholder ad
            </p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">Progress</span>
            <span className="text-sm font-medium text-gray-700">100%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-purple-600 h-2 rounded-full w-full"></div>
          </div>
        </div>

        {/* Unlock Button */}
        <div className="text-center">
          <button
            onClick={handleNext}
            disabled={!canProceed}
            className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all ${
              canProceed
                ? 'bg-purple-600 text-white hover:bg-purple-700 cursor-pointer animate-pulse'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            {canProceed ? '🔓 UNLOCK YOUR CONTENT NOW!' : 'Please wait and click an ad'}
          </button>
        </div>

        {/* Final Instructions */}
        <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-4">
          <h4 className="font-semibold text-green-800 mb-2">Final Step:</h4>
          <ul className="text-sm text-green-700 space-y-1">
            <li>• Wait for the 10-second countdown</li>
            <li>• Click on any advertisement above</li>
            <li>• Your content will be unlocked!</li>
          </ul>
        </div>
      </div>
    </div>
  );
}