import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import OrderDisplay from './order-display';
import { describe, it, expect } from 'vitest';
import { BrowserRouter as Router } from 'react-router-dom';

const renderComponent = (props = {}) => {
	const defaultProps = {
		id: '1',
		merchantName: 'Test Merchant',
		merchantLogo: 'logo.png',
		merchantImage: 'image.png',
		date: '2023-10-01',
		numberOfItems: 5,
		status: 'Pending',
		...props,
	};

	return render(
		<Router>
			<OrderDisplay {...defaultProps} />
		</Router>
	);
};

describe('OrderDisplay', () => {
	it('renders merchant name', () => {
		renderComponent();
		expect(screen.getByText('Test Merchant')).toBeInTheDocument();
	});

	it('renders merchant logo', () => {
		renderComponent();
		expect(screen.getByAltText('Test Merchant logo')).toBeInTheDocument();
	});

	it('renders date', () => {
		renderComponent();
		expect(screen.getByText('2023-10-01')).toBeInTheDocument();
	});

	it('renders number of items', () => {
		renderComponent();
		expect(screen.getByText('5 artículos')).toBeInTheDocument();
	});

	it('renders status', () => {
		renderComponent();
		expect(screen.getByText('Pending')).toBeInTheDocument();
	});

	it('renders next due date if provided', () => {
		renderComponent({ nextDueDate: '2023-11-01' });
		expect(screen.getByText('2023-11-01')).toBeInTheDocument();
	});

	it('renders next due amount if provided', () => {
		renderComponent({ nextDueAmount: 100 });
		expect(screen.getByText('Cobro de:')).toBeInTheDocument();
	});

	it('navigates to the correct route when clicked', () => {
		renderComponent();
		const linkElement = screen.getByRole('link', { name: /Test Merchant/i });
		fireEvent.click(linkElement);
		expect(window.location.pathname).toBe('/order/1');
	});
});