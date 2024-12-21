import React from 'react';
import './order-date.css';
import classNames from 'classnames';
import { OrderStatus } from '@domain/orders/order-status';

type Props = {
	status: string;
	nextDueDate?: string;
	className?: string;
}

const OrderDate: React.FC<Props> = ({
	status,
	nextDueDate,
	className = '',
}) => {
	const getDay = (dateString: string) => {
		const date = new Date(dateString);
		return date.getDate();
	};

	const getMoth = (dateString: string) => {
		const date = new Date(dateString);
		const options = { month: 'long' } as const;
		return date.toLocaleDateString('en-EN', options).toLowerCase();
	};

	return (
		<div
			className={classNames(className, 'order-date', [
				{ 'order-date--pending': status === OrderStatus.Pending },
				{ 'order-date--completed': status === OrderStatus.Completed },
			])}
		>
			{nextDueDate ?
				<div className='order-date__next-due'>
					<p>{getDay(nextDueDate)}</p>
					<p>{getMoth(nextDueDate)}</p>
				</div>
				: <p>Compra completada</p>
			}
		</div>
	);
};

export default OrderDate;