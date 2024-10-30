import React from 'react';
import { ShoppingBag, Heart, Search, Menu, User, X } from 'lucide-react';

interface NavigationProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
}

export default function Navigation({ isMobileMenuOpen, setIsMobileMenuOpen }: NavigationProps) {
  return (
    <>
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 -ml-2 lg:hidden"
              >
                <Menu className="h-6 w-6 text-gray-900" />
              </button>
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900 ml-2 lg:ml-0">LUXEWEAR</h1>
            </div>
            
            <div className="hidden lg:flex space-x-8">
              <a href="#" className="text-gray-900 hover:text-gray-600">New Arrivals</a>
              <a href="#" className="text-gray-900 hover:text-gray-600">Women</a>
              <a href="#" className="text-gray-900 hover:text-gray-600">Men</a>
              <a href="#" className="text-gray-900 hover:text-gray-600">Accessories</a>
            </div>

            <div className="flex items-center space-x-2 sm:space-x-4">
              <button className="p-2">
                <Search className="h-5 w-5 sm:h-6 sm:w-6 text-gray-900" />
              </button>
              <button className="p-2 hidden sm:block">
                <User className="h-5 w-5 sm:h-6 sm:w-6 text-gray-900" />
              </button>
              <button className="p-2 hidden sm:block">
                <Heart className="h-5 w-5 sm:h-6 sm:w-6 text-gray-900" />
              </button>
              <button className="p-2 relative">
                <ShoppingBag className="h-5 w-5 sm:h-6 sm:w-6 text-gray-900" />
                <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full h-4 w-4 sm:h-5 sm:w-5 flex items-center justify-center">3</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-black/50 z-50 lg:hidden transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className={`fixed inset-y-0 left-0 w-64 bg-white transform transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="p-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-xl font-bold">Menu</h2>
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="space-y-4">
              <a href="#" className="block py-2 text-gray-900 hover:text-gray-600">New Arrivals</a>
              <a href="#" className="block py-2 text-gray-900 hover:text-gray-600">Women</a>
              <a href="#" className="block py-2 text-gray-900 hover:text-gray-600">Men</a>
              <a href="#" className="block py-2 text-gray-900 hover:text-gray-600">Accessories</a>
              <hr className="my-4" />
              <a href="#" className="block py-2 text-gray-900 hover:text-gray-600">Account</a>
              <a href="#" className="block py-2 text-gray-900 hover:text-gray-600">Wishlist</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}