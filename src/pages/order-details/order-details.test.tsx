import { describe, expect, it, beforeEach } from "vitest";
import { render, screen, fireEvent } from '@testing-library/react';
import { OrdersInMemoryRepository } from '@repositories/orders/orders.inmemory.repository';
import { QueryClient, QueryClientProvider } from 'react-query';
import '@testing-library/jest-dom';
import OrderDetailsPage from "./order-details.page";
import { MemoryRouter } from 'react-router-dom';
import { IOrdersRepository } from "@repositories/orders/orders.repository";

const renderComponent = (queryClient: QueryClient, repository: IOrdersRepository) => {
	return render(
		<MemoryRouter>
			<QueryClientProvider client={queryClient} >
				<OrderDetailsPage
					orderId="1"
					repository={repository} />
			</QueryClientProvider>
		</MemoryRouter>
	);
};

describe('OrderDetails', () => {
	const queryClient = new QueryClient();
	let repository = OrdersInMemoryRepository();

	beforeEach(() => {
		repository = OrdersInMemoryRepository();
		queryClient.clear();
	});

	it('displays loading state initially', async () => {
		renderComponent(queryClient, repository);

		expect(screen.getByText('Loading...')).toBeInTheDocument();
	});

	it('displays order details after loading', async () => {
		const { findByText } = renderComponent(queryClient, repository);

		expect(await findByText('Loading...')).not.toBeInTheDocument();
		expect(await findByText('Merchant Name')).toBeInTheDocument();
	});

	it('updates order status when pay button is clicked', async () => {
		const { findByText } = renderComponent(queryClient, repository);

		fireEvent.click(await findByText('Pagar ahora'));

		expect(await findByText('Compra completada')).toBeInTheDocument();
	});
});