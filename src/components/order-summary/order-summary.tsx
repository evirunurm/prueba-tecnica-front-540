import React from 'react';
import './order-summary.css';

type Props = {
	totalAmount?: number;
	numberOfArticles?: number;
	shippedArticles?: number;
}

const OrderSummary: React.FC<Props> = ({
	totalAmount,
	numberOfArticles,
	shippedArticles
}) => {
	return (
		<article className='order-summary'>
			<p>{totalAmount} €</p>
			<p>{numberOfArticles} artículos</p>
			<p>{shippedArticles}/{numberOfArticles} enviados</p>
		</article>
	);
};

export default OrderSummary;