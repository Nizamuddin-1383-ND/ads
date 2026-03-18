'use client';

import { useState } from 'react';

export default function Unlock() {
  const [showContent, setShowContent] = useState(false);
  
  // This would be the actual link/content the user came for
  const finalLink = "https://example.com/your-download-link";
  const finalContent = "Your exclusive content is now available!";

  const handleRevealContent = () => {
    setShowContent(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100 flex flex-col items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        {/* Success Header */}
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">🎉</div>
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Congratulations!</h1>
          <p className="text-xl text-gray-600">You've successfully completed all steps</p>
        </div>

        {/* Success Card */}
        <div className="bg-white rounded-lg shadow-xl p-8 mb-8 text-center">
          <div className="text-4xl mb-4">✅</div>
          <h2 className="text-2xl font-bold text-green-600 mb-4">Content Unlocked!</h2>
          <p className="text-gray-600 mb-6">
            Thank you for your patience. Your content is now ready for access.
          </p>
          
          {!showContent ? (
            <button
              onClick={handleRevealContent}
              className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-all"
            >
              Reveal My Content
            </button>
          ) : (
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-800 mb-4">Your Content:</h3>
              <div className="bg-white rounded-lg p-4 mb-4">
                <p className="text-gray-700 mb-4">{finalContent}</p>
                <a
                  href={finalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all inline-block"
                >
                  🔗 Access Your Link
                </a>
              </div>
              <p className="text-sm text-green-600">
                ✨ Bookmark this page for future reference
              </p>
            </div>
          )}
        </div>

        {/* Additional Offers */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h3 className="text-xl font-semibold mb-4 text-center">Before You Go...</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg p-6 text-white text-center">
              <div className="text-2xl font-bold mb-2">🎁 Bonus Offer</div>
              <p className="mb-4">Get more premium content</p>
              <button className="bg-white text-blue-600 px-4 py-2 rounded-full font-semibold hover:bg-gray-100 transition-all">
                Learn More
              </button>
            </div>
            <div className="bg-gradient-to-r from-green-400 to-teal-500 rounded-lg p-6 text-white text-center">
              <div className="text-2xl font-bold mb-2">💎 VIP Access</div>
              <p className="mb-4">Skip the wait next time</p>
              <button className="bg-white text-green-600 px-4 py-2 rounded-full font-semibold hover:bg-gray-100 transition-all">
                Upgrade Now
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          <h3 className="text-lg font-semibold mb-4">Journey Complete!</h3>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <div className="text-2xl font-bold text-blue-600">3</div>
              <p className="text-sm text-gray-600">Steps Completed</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600">45</div>
              <p className="text-sm text-gray-600">Seconds Waited</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-600">100%</div>
              <p className="text-sm text-gray-600">Progress</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            Thank you for using Link Gateway. Share this with friends!
          </p>
          <div className="mt-4">
            <button className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-all mr-4">
              Share
            </button>
            <button 
              onClick={() => window.location.href = '/'}
              className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-all"
            >
              Start Over
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}