// filepath: /src/pages/Store.tsx
import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../services/d365Service';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
}

const Store: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [connectionInfo, setConnectionInfo] = useState<string>('');

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
        setConnectionInfo('Connected to D365 successfully.');
      } catch (error) {
        console.error('Error connecting to D365:', error);
        if (error instanceof Error) {
          setConnectionInfo(`Failed to connect to D365: ${(error as any).response ? (error as any).response.data : error.message}`);
        } else {
          setConnectionInfo('Failed to connect to D365: Unknown error');
        }
      }
    };
    getProducts();
  }, []);

  return (
    <div>
      <h1>Store</h1>
      <h2>{connectionInfo}</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {products.map((product) => (
          <div key={product.id} style={{ border: '1px solid #ccc', padding: '10px', width: '200px' }}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <button>Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Store;