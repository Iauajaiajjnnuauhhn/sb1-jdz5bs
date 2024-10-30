import React from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
  setIsCartOpen: (isOpen: boolean) => void;
  isAdmin: boolean;
  setIsAdmin: (isAdmin: boolean) => void;
}

export function Header({ cartCount, setIsCartOpen, isAdmin, setIsAdmin }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-900">LUXE</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-gray-900">New Arrivals</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Women</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Men</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Accessories</a>
          </nav>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsAdmin(!isAdmin)}
              className={`px-4 py-2 rounded-md ${
                isAdmin ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-700'
              }`}
            >
              {isAdmin ? 'Admin Mode' : 'Customer Mode'}
            </button>

            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-gray-700 hover:text-gray-900"
            >
              <ShoppingBag className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-gray-900"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-gray-900">New Arrivals</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Women</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Men</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Accessories</a>
          </div>
        </div>
      )}
    </header>
  );
}