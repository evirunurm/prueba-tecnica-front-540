import React from 'react';
import { OrdersHttpRepository } from '../../repositories/orders/orders.http.repository';
import OrderDetailsPage from './order-details.page';
import { useParams } from 'react-router-dom';


const OrderDetails: React.FC = () => {
	const repository = OrdersHttpRepository();
	const { orderId } = useParams();

	return (
		<OrderDetailsPage repository={repository} orderId={orderId ?? ''} />
	);
};

export default OrderDetails;