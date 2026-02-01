'use client';

import { useEffect, useState } from 'react';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptAllCookies = () => {
    localStorage.setItem('cookieConsent', 'all');
    setShowBanner(false);
    // Enable all tracking scripts here
  };

  const acceptEssentialOnly = () => {
    localStorage.setItem('cookieConsent', 'essential');
    setShowBanner(false);
    // Disable analytics/marketing scripts
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 overflow-hidden bg-gray-900 border-t border-gray-800 text-white p-4 z-50">
      <div className="max-w-full md:max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center  md:gap-3 justify-between">
          <p className="text-sm font-inter mb-4 md:mb-0">
            We use cookies and similar technologies to enhance your browsing experience, 
            analyze site traffic, and serve personalized content. By clicking "Accept", 
            you consent to the use of all cookies.{" "}
            <a href="/privacy-policy" className="text-neon-green hover:underline">
              Learn more in our Privacy Policy
            </a>
          </p>
          <div className="flex space-x-2">
            <button 
              onClick={acceptEssentialOnly}
              className="px-4 py-3.5 text-[13px] md:text-sm bg-gray-800  whitespace-nowrap cursor-pointer text-white rounded hover:bg-gray-700 transition-colors"
            >
              Use Only Necessary Cookies
            </button>
            <button 
              onClick={acceptAllCookies}
              className="px-4 p-3.5 text-[13px] md:text-sm bg-neon-green text-white font-medium whitespace-nowrap cursor-pointer bg-green-700 rounded hover:bg-green-700/80 transition-colors"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}