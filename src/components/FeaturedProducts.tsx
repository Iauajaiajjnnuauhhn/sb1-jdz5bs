import React from 'react';

const products = [
  {
    id: 1,
    name: 'Casual Linen Dress',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    name: 'Classic White Shirt',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    name: 'Leather Crossbody Bag',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 4,
    name: 'Wool Blend Coat',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }
];

export default function FeaturedProducts() {
  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {products.map((product) => (
            <div key={product.id} className="group">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[300px] sm:h-[350px] lg:h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-gray-900 px-4 sm:px-6 py-2 rounded-md font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  Add to Cart
                </button>
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-base sm:text-lg font-medium text-gray-900">{product.name}</h3>
                <p className="mt-1 text-gray-600">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}