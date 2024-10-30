import React from 'react';
import { Edit, Trash2 } from 'lucide-react';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
  isAdmin: boolean;
  onEdit?: (product: Product) => void;
  onDelete?: (id: string) => void;
  onAddToCart: (product: Product, selectedSize: string) => void;
}

export function ProductCard({ product, isAdmin, onEdit, onDelete, onAddToCart }: ProductCardProps) {
  const [selectedSize, setSelectedSize] = React.useState(product.sizes[0]);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative pb-[125%]">
        <img
          src={product.image}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
        <p className="text-sm text-gray-500 mt-1">{product.description}</p>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900">${product.price}</span>
          <div className="flex space-x-2">
            {isAdmin ? (
              <>
                <button
                  onClick={() => onEdit?.(product)}
                  className="p-2 text-blue-600 hover:text-blue-800"
                >
                  <Edit className="h-5 w-5" />
                </button>
                <button
                  onClick={() => onDelete?.(product.id)}
                  className="p-2 text-red-600 hover:text-red-800"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </>
            ) : (
              <div className="flex items-center space-x-2">
                <select
                  value={selectedSize}
                  onChange={(e) => setSelectedSize(e.target.value)}
                  className="border rounded px-2 py-1 text-sm"
                >
                  {product.sizes.map((size) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
                <button
                  onClick={() => onAddToCart(product, selectedSize)}
                  className="bg-black text-white px-4 py-2 rounded-md text-sm hover:bg-gray-800"
                >
                  Add to Cart
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}