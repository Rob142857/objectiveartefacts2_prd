// filepath: /src/services/d365Service.ts
import axios from 'axios';

const functionUrl = process.env.REACT_APP_FUNCTION_URL;
console.log('Function URL:', functionUrl); // Log the function URL

export const fetchProducts = async () => {
  try {
    if (!functionUrl) {
      throw new Error('Function URL is not defined');
    }
    const response = await axios.get(functionUrl);
    console.log('Fetched products:', response.data); // Log the response data
    // Transform the data if necessary
    const products = response.data.map((item: any) => ({
      id: item.id,
      name: item.name,
      description: item.description,
      price: item.price,
    }));
    return products;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Error fetching products from backend:', error.response ? error.response.data : error.message);
      throw new Error(error.response ? JSON.stringify(error.response.data) : error.message);
    } else {
      console.error('Error fetching products from backend:', (error as Error).message);
      throw new Error((error as Error).message);
    }
  }
};