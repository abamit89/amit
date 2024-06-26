import { Layout } from '../../../components/Layout';
/** @jsxImportSource theme-ui */
import { useEffect, useState } from 'react';
import { jsx } from 'theme-ui';
import productData from '../../../../__mocks__/products.json';

interface Price {
  amount: string;
  currency: string;
}

interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  price: Price;
}

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setProducts(productData);
  }, []);

  return (
    <Layout>
    <div sx={{ padding: 4 }}>
      <h1>Products</h1>
      <div sx={{ display: 'grid', gap: 4, gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 4fr))' }}>
        {products.map((product) => (
          <div key={product.id} sx={{ border: '1px solid', borderRadius: 4, padding: 3 }}>
            <img src={product.image} alt={product.name} sx={{ width: '100%', height: 'auto' }} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>{(parseInt(product.price.amount) / 100).toFixed(2)} {product.price.currency}</p>
          </div>
        ))}
      </div>
    </div>
    </Layout>
  );
};

export default Products;
