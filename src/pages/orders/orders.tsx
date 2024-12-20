import React from 'react';
import OrdersPage from './orders.page';
import { OrdersHttpRepository } from '../../repositories/orders/orders.http.repository';

const Orders: React.FC = () => {
	const repository = OrdersHttpRepository();

	return (
		<OrdersPage repository={repository} />
	);
};

export default Orders;