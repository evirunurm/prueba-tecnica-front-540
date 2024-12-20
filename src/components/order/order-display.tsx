import React from 'react';
import './order-display.css';
import { Link } from 'react-router-dom';

type Props = {
	id: string;
	merchantName: string;
	merchantLogo: string;
	merchantImage: string;
	date: string;
	numberOfItems: number;
	nextDueAmount?: number;
	nextDueDate?: string;
	status: string;
}

const OrderDisplay: React.FC<Props> = (
	{
		id,
		merchantName,
		merchantLogo,
		merchantImage,
		date,
		numberOfItems,
		nextDueAmount,
		nextDueDate,
		status
	}) => {

	return (
		<article className='order-display'>
			<Link
				to={`/order/${id}`}
			>
				<section className='order-display__merchant-info'
					style={{ backgroundImage: `url(${merchantImage})` }}
				>
					<h2 className='order-display__merchant-info__name'>
						{merchantName}
					</h2>

					<div className='order-display__merchant-info__details'>
						<p>{date}</p>
						<p>{numberOfItems} artículos</p>
					</div>

					<div className='order-display__merchant-info__logo'>
						<img
							className='order-display__merchant-info__logo__image'
							src={merchantLogo}
							alt={`${merchantName} logo`}
						/>
					</div>

				</section>
				<section className='order-display__order-info'>
					<div>
						<p>{status}</p>
						{nextDueDate && <p>{nextDueDate}</p>}
					</div>
					{nextDueAmount && <p>Cobro de: <span>{nextDueAmount} €</span></p>}
				</section>
			</Link>
		</article >
	);
};

export default OrderDisplay;