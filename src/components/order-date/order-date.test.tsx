import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import OrderDate from './order-date';
import { describe, it, expect } from 'vitest';
import { OrderStatus } from '../../types/orders/order-status';

describe('OrderDate', () => {
	it('renders completed message when nextDueDate is not provided', () => {
		render(<OrderDate status={OrderStatus.Completed} />);
		expect(screen.getByText('Compra completada')).toBeInTheDocument();
	});

	it('renders next due day correctly', () => {
		const nextDueDate = '2023-12-25';
		render(<OrderDate status={OrderStatus.Pending} nextDueDate={nextDueDate} />);
		expect(screen.getByText('25')).toBeInTheDocument();
	});

	it('renders next due month text correctly', () => {
		const nextDueDate = '2023-12-25';
		render(<OrderDate status={OrderStatus.Pending} nextDueDate={nextDueDate} />);
		expect(screen.getByText('december')).toBeInTheDocument();
	});

	it('applies correct classes for pending status', () => {
		const { container } = render(<OrderDate status={OrderStatus.Pending} />);
		expect(container.firstChild).toHaveClass('order-date--pending');
		expect(container.firstChild).not.toHaveClass('order-date--completed');
	});

	it('applies correct classew for completed status', () => {
		const { container } = render(<OrderDate status={OrderStatus.Completed} />);
		expect(container.firstChild).toHaveClass('order-date--completed');
		expect(container.firstChild).not.toHaveClass('order-date--pending');
	});
});