import React from 'react';
import { useSelector } from 'react-redux';
import Product from '../components/Product';

function ProductsList() {
   const products = useSelector(state => state.products);
   return (
      <div>
         <ul>
            {products.map((product, index) => (
               <Product product={product} />
            ))}
         </ul>
      </div>
   )
};

export default ProductsList;