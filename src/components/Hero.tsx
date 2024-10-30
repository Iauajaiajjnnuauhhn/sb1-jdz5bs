import React from 'react';

export default function Hero() {
  return (
    <div className="relative h-[60vh] sm:h-[70vh] lg:h-[80vh] bg-cover bg-center" style={{
      backgroundImage: 'url("https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80")'
    }}>
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white max-w-3xl px-4">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">Spring Collection 2024</h1>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 px-4">Discover the latest trends in fashion and explore our new collection.</p>
          <button className="bg-white text-gray-900 px-6 sm:px-8 py-2 sm:py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
}