import React from 'react';
import { Link } from 'react-router-dom';

const Orders: React.FC = () => {
	return (
		<main>
			<h1>Orders</h1>
			<section>
				<Link to="/order/1" >Tienda</Link>
				{/* Here goes the list of orders */}
			</section>
		</main>
	);
};

export default Orders;