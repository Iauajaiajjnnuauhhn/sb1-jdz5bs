import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import ProductForm, { ProductFormData } from './ProductForm';

export default function AdminPanel() {
  const [showForm, setShowForm] = useState(false);

  const handleAddProduct = (product: ProductFormData) => {
    // In a real application, this would make an API call to add the product
    console.log('New product:', product);
  };

  return (
    <div className="fixed bottom-4 right-4 z-40">
      <button
        onClick={() => setShowForm(true)}
        className="bg-black text-white p-4 rounded-full shadow-lg hover:bg-gray-800 transition-colors"
        title="Add Product"
      >
        <Plus className="h-6 w-6" />
      </button>

      {showForm && (
        <ProductForm
          onSubmit={handleAddProduct}
          onClose={() => setShowForm(false)}
        />
      )}
    </div>
  );
}