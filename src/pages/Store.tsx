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
        console.log('Setting products:', data); // Log the data being set
        setProducts(data);
        setConnectionInfo('Connected to D365 successfully.');
      } catch (error: any) {
        console.error('Error connecting to D365:', error);
        if ((error as any).response) {
          if ((error as any).response) {
            setConnectionInfo(`Failed to connect to D365: ${JSON.stringify((error as any).response.data)}`);
          } else if (error instanceof Error) {
            setConnectionInfo(`Failed to connect to D365: ${error.message}`);
          }
        } else if (error.request) {
          setConnectionInfo('Failed to connect to D365: No response received from server.');
        } else {
          setConnectionInfo(`Failed to connect to D365: ${error.message}`);
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