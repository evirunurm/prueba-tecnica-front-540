import request, { gql } from 'graphql-request';
import React from 'react';
import { useQuery } from 'react-query';
import OrdersQueryResponse from '../../types/order/orders-query/orders-query-response';
import OrderDisplay from '../../components/order/order-display';
import { Order } from '../../types/order/order';
import './orders.css';
import { motion } from 'framer-motion'

const ORDERS_QUERY = gql`
query MyQuery {
  orders {
    id,
    merchantName,
    merchantImage,
    merchantLogo,
    date,
    status,
    nextDueAmount,
	numberOfArticles
  }
}
`;

const Orders: React.FC = () => {
	const { data, isLoading, error } = useQuery<OrdersQueryResponse>("orders", () => {
		return request<OrdersQueryResponse>(
			process.env.REACT_APP_FRONTEND_MOBILE_API ?? '', ORDERS_QUERY);
	});

	if (isLoading) return <p>Loading...</p>;
	if (error) return <p>Error loading orders</p>;

	return (
		<motion.main
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}
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

export default Orders;