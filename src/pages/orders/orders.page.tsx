import React from 'react';
import OrderDisplay from './components/order/order-display';
import { Order } from '@domain/orders/order';
import './orders.css';
import { motion } from 'framer-motion'
import { GetOrders } from './orders.service';
import { IOrdersRepository } from '@repositories/orders/orders.repository';

type OrdersPageProps = {
	repository: IOrdersRepository;
};

const OrdersPage: React.FC<OrdersPageProps> = ({ repository }: OrdersPageProps) => {
	const { data, isLoading, error } = GetOrders(repository);

	if (isLoading) return <p>Loading...</p>;
	if (error) return <p>Error loading orders</p>;

	return (
		<motion.main
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.25 }}
		>
			<h1 className='orders__title'>Orders</h1>
			<section
				className='orders__list'
			>
				{data?.orders?.map((order: Order) => (
					<OrderDisplay
						id={order.id}
						numberOfItems={order.numberOfArticles}
						key={order.id}
						merchantName={order.merchantName}
						merchantImage={order.merchantImage}
						merchantLogo={order.merchantLogo}
						date={order.date}
						status={order.status}
						nextDueAmount={order.nextDueAmount}
					/>
				))}
			</section>
		</motion.main>
	);
};

export default OrdersPage;