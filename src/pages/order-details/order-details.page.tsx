import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion'
import { IOrdersRepository } from '@repositories/orders/orders.repository';
import { GetOrderById } from './order-details.service';
import OrderDate from './components/order-date/order-date';
import OrderSummary from './components/order-summary/order-summary';
import { OrderStatus } from '@domain/orders/order-status';
import './order-details.css';
import Nav from '@components/nav/nav';
import Button from '@components/button/button';
import { Order } from '@domain/orders/order';

type OrderDetailsProps = {
	repository: IOrdersRepository;
	orderId: string;
};

const OrderDetailsPage: React.FC<OrderDetailsProps> = ({
	repository,
	orderId
}: OrderDetailsProps) => {
	const { data, isLoading, error } = GetOrderById(repository, orderId);
	const [order, setOrder] = useState<Order>();
	const [isPaying, setIsPaying] = useState(false);

	const handlePagarAhora = async () => {
		setIsPaying(true);
		const payOrderResponse = await repository.payOrder(orderId);
		if (payOrderResponse.payOrder.status !== OrderStatus.Completed) {
			alert('Error al realizar el pago');
		} else {
			setOrder({ ...order!, status: OrderStatus.Completed });
		}
	}

	useEffect(() => {
		if (data) setOrder(data.orderById);
	}, [data]);

	if (isLoading) return <p>Loading...</p>;
	if (error || !order) return <p>Error loading order data</p>;

	return (
		<motion.main
			className='order-details'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.25 }}
		>
			<Nav />
			<section className='order-details__merchant-info'>
				<h2 className='order-details__merchant-info__name'>{order.merchantName} </h2>
				<div className='order-details__merchant-info__details'>
					<p>{order.date}</p>
					<p>ref. {order.reference}</p>
				</div>
				<OrderSummary
					totalAmount={order.price}
					numberOfArticles={order.numberOfArticles}
					shippedArticles={order.shippedArticles}
				/>
				<div className='order-details__merchant-info__logo'>
					<img
						className='order-details__merchant-info__logo__image'
						src={order.merchantLogo}
						alt={`${order.merchantName} logo`}
					/>
				</div>
			</section>
			<section className='order-details__order-info'>
				<h4 className=''>Estado del pago</h4>
				<div className='order-details__order-info__due-date'>
					<OrderDate
						className='order-details__order-info__due-date__date'
						status={order.status ?? ''}
						nextDueDate={order.nextDueDate}
					/>
					{
						order.status === OrderStatus.Pending ?
							(<div><h4>Cobro programado</h4>
								<p>Recibirás la compra pronto</p>
							</div>)
							:
							(<div>
								<h4>Compra completada</h4>
								<p>Pagado el {order.nextDueDate}</p>
							</div>)
					}
				</div>
				<p> Total: {order.price} €</p>
				{order.status === OrderStatus.Pending &&
					<Button
						onClick={handlePagarAhora}
						disabled={isPaying}>
						Pagar ahora
					</Button>}
			</section>
		</motion.main>
	);
};

export default OrderDetailsPage;