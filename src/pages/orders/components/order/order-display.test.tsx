import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import OrderDisplay from './order-display';
import { describe, it, expect } from 'vitest';
import { BrowserRouter as Router } from 'react-router-dom';

const renderComponent = (props = {}) => {
	const defaultProps = {
		id: '1',
		merchantName: 'Amazon',
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
		const { getByText } = renderComponent();
		expect(getByText('Amazon')).toBeInTheDocument();
	});

	it('renders merchant logo with alternative text', () => {
		const { getByAltText } = renderComponent();
		expect(getByAltText('Amazon logo')).toBeInTheDocument();
	});

	it('renders date', () => {
		const { getByText } = renderComponent();
		expect(getByText('2023-10-01')).toBeInTheDocument();
	});

	it('renders number of items', () => {
		const { getByText } = renderComponent();
		expect(getByText('5 artículos')).toBeInTheDocument();
	});

	it('renders status', () => {
		const { getByText } = renderComponent();
		expect(getByText('Pending')).toBeInTheDocument();
	});

	it('renders next due date if provided', () => {
		const { getByText } = renderComponent({ nextDueDate: '2023-11-01' });
		expect(getByText('2023-11-01')).toBeInTheDocument();
	});

	it('renders next due amount if provided', () => {
		const { getByText } = renderComponent({ nextDueAmount: 100 });
		expect(getByText('Cobro de:')).toBeInTheDocument();
	});

	it('navigates to the correct route when clicked', () => {
		const { getByRole } = renderComponent();
		const linkElement = getByRole('link', { name: /Amazon/i });
		fireEvent.click(linkElement);
		expect(window.location.pathname).toBe('/order/1');
	});
});