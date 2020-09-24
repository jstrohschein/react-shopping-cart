import React, { useContext } from 'react';
import { shopContext } from '../contexts/shopContext'

// Components
import Product from './Product';

const Products = () => {

	const {products, addItem } = useContext(shopContext);

	// console.log('Products.js: products: ', products)

	return (
		<div className="products-container">
				{products.map(product => (
						<Product
							key={product.id}
							product={product}
							addItem={addItem}
						/>
				))}	 
		</div>
	);
};

export default Products;
