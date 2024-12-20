import React from 'react';
import { motion } from 'framer-motion'
import { IOrdersRepository } from '../../repositories/orders/orders.repository';
import { GetOrderById } from './order-details.service';
import OrderDate from '../../components/order-date/order-date';
import { OrderStatus } from '../../types/orders/order-status';
import './order-details.css';
import OrderSummary from '../../components/order-summary/order-summary';
import Nav from '../../components/nav/nav';
import Button from '../../components/button/button';

type OrderDetailsProps = {
	repository: IOrdersRepository;
	orderId: string;
};

const OrderDetailsPage: React.FC<OrderDetailsProps> = ({
	repository,
	orderId
}: OrderDetailsProps) => {
	const { data, isLoading, error } = GetOrderById(repository, orderId);
	const isOrderPending = data?.orderById.status === OrderStatus.Pending;

	const handlePagarAhora = async () => {
		const payOrderResponse = await repository.payOrder(orderId);
		if (payOrderResponse.payOrder.status === OrderStatus.Completed) {
			alert('Pago realizado con éxito');
		}
	}

	if (isLoading) return <p>Loading...</p>;
	if (error) return <p>Error loading orders</p>;

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
				<h2 className='order-details__merchant-info__name'>{data?.orderById.merchantName} </h2>
				<div className='order-details__merchant-info__details'>
					<p>{data?.orderById.date}</p>
					<p>ref. {data?.orderById.reference}</p>
				</div>
				<OrderSummary
					totalAmount={data?.orderById.price}
					numberOfArticles={data?.orderById.numberOfArticles}
					shippedArticles={data?.orderById.shippedArticles}
				/>
				<div className='order-details__merchant-info__logo'>
					<img
						className='order-details__merchant-info__logo__image'
						src={data?.orderById.merchantLogo}
						alt={`${data?.orderById.merchantName} logo`}
					/>
				</div>
			</section>
			<section className='order-details__order-info'>
				<h4 className=''>Estado del pago</h4>
				<div className='order-details__order-info__due-date'>
					<OrderDate
						className='order-details__order-info__due-date__date'
						status={data?.orderById.status ?? ''}
						nextDueDate={data?.orderById.nextDueDate}
					/>
					{
						isOrderPending ?
							(<div><h4>Cobro programado</h4>
								<p>Recibirás la compra pronto</p>
							</div>)
							:
							(<div>
								<h4>Compra completada</h4>
								<p>Pagado el {data?.orderById.nextDueDate}</p>
							</div>)
					}
				</div>
				<p> Total: {data?.orderById.price} €</p>
				{isOrderPending &&
					<Button
						onClick={handlePagarAhora}
						disabled={!isOrderPending}>
						Pagar ahora
					</Button>}
			</section>
		</motion.main>
	);
};

export default OrderDetailsPage;