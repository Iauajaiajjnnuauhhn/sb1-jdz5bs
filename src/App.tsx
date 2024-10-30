import React from 'react';
import { Plus } from 'lucide-react';
import { Header } from './components/Header';
import { ProductCard } from './components/ProductCard';
import { Cart } from './components/Cart';
import { ProductForm } from './components/ProductForm';
import type { Product, CartItem } from './types';

const initialProducts: Product[] = [
  {
    id: '1',
    name: 'Classic White T-Shirt',
    price: 29.99,
    description: 'Essential cotton t-shirt in crisp white',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800',
    category: 'men',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
  },
  {
    id: '2',
    name: 'Denim Jacket',
    price: 89.99,
    description: 'Vintage-inspired denim jacket',
    image: 'https://images.unsplash.com/photo-1551537482-f2075a1d41f2?auto=format&fit=crop&q=80&w=800',
    category: 'women',
    sizes: ['S', 'M', 'L'],
  },
  {
    id: '3',
    name: 'Leather Crossbody Bag',
    price: 129.99,
    description: 'Elegant leather crossbody bag',
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=800',
    category: 'accessories',
    sizes: ['ONE SIZE'],
  },
];

function App() {
  const [products, setProducts] = React.useState<Product[]>(initialProducts);
  const [cartItems, setCartItems] = React.useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = React.useState(false);
  const [isAdmin, setIsAdmin] = React.useState(false);
  const [isAddingProduct, setIsAddingProduct] = React.useState(false);
  const [editingProduct, setEditingProduct] = React.useState<Product | null>(null);

  const handleAddToCart = (product: Product, selectedSize: string) => {
    setCartItems((items) => {
      const existingItem = items.find(
        (item) => item.id === product.id && item.selectedSize === selectedSize
      );

      if (existingItem) {
        return items.map((item) =>
          item.id === product.id && item.selectedSize === selectedSize
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...items, { ...product, quantity: 1, selectedSize }];
    });
  };

  const handleUpdateCartQuantity = (id: string, quantity: number) => {
    setCartItems((items) =>
      quantity === 0
        ? items.filter((item) => item.id !== id)
        : items.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const handleRemoveFromCart = (id: string) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const handleAddProduct = (productData: Omit<Product, 'id'>) => {
    const newProduct = {
      ...productData,
      id: Math.random().toString(36).substr(2, 9),
    };
    setProducts((prev) => [...prev, newProduct]);
    setIsAddingProduct(false);
  };

  const handleUpdateProduct = (productData: Omit<Product, 'id'>) => {
    if (!editingProduct) return;
    setProducts((prev) =>
      prev.map((p) =>
        p.id === editingProduct.id ? { ...productData, id: p.id } : p
      )
    );
    setEditingProduct(null);
  };

  const handleDeleteProduct = (id: string) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
        setIsCartOpen={setIsCartOpen}
        isAdmin={isAdmin}
        setIsAdmin={setIsAdmin}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {isAdmin && (
          <div className="mb-8">
            {isAddingProduct || editingProduct ? (
              <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6">
                  {editingProduct ? 'Edit Product' : 'Add New Product'}
                </h2>
                <ProductForm
                  product={editingProduct || undefined}
                  onSubmit={editingProduct ? handleUpdateProduct : handleAddProduct}
                  onCancel={() => {
                    setIsAddingProduct(false);
                    setEditingProduct(null);
                  }}
                />
              </div>
            ) : (
              <button
                onClick={() => setIsAddingProduct(true)}
                className="flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800"
              >
                <Plus className="h-5 w-5" />
                <span>Add New Product</span>
              </button>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isAdmin={isAdmin}
              onEdit={setEditingProduct}
              onDelete={handleDeleteProduct}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </main>

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveFromCart}
      />
    </div>
  );
}

export default App;