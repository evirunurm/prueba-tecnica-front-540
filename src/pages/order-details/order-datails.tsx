import React from 'react';
import { motion } from 'framer-motion'

const OrderDetails: React.FC = () => {
	return (
		<motion.main
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}
		>
			<div>
				<h2>Tienda</h2>
				<p>12 nov 2024</p>
				<p>3 artículos</p>
			</div>
			<div>
				<div>
					<p>30 diciembre</p>
				</div>
				<p>Cobro de: <span>454,80 €</span></p>
			</div>

		</motion.main>
	);
};

export default OrderDetails;