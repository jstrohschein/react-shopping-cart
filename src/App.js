//react
import React, { useState } from 'react';
import { Route } from 'react-router-dom';


//data and contexts
import data from './data';
import { shopContext } from './contexts/shopContext'
import { cartContext } from './contexts/cartContext'

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		setCart([...cart, item])
	};

	return (

		<shopContext.Provider value={{ products, addItem }}>
		<cartContext.Provider value={{ cart }}>
			<div className="App">
						<Navigation />

				{/* Routes */}
				<Route exact path="/">
						<Products />
				</Route>

				<Route path="/cart">
						<ShoppingCart />
				</Route>
			</div>
		</cartContext.Provider>
		</shopContext.Provider>

	);
}

export default App;
