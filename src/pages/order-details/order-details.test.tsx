import { describe, expect, it, beforeEach } from "vitest";
import { render, waitFor, screen } from '@testing-library/react';
import { OrdersInMemoryRepository } from '../../repositories/orders/orders.inmemory.repository';
import { QueryClient, QueryClientProvider } from 'react-query';
import '@testing-library/jest-dom';
import OrderDetailsPage from "./order-details.page";
import { MemoryRouter } from 'react-router-dom';
import { IOrdersRepository } from "../../repositories/orders/orders.repository";

let repository: IOrdersRepository;
let queryClient: QueryClient;

const renderComponent = () => {
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
	beforeEach(() => {
		repository = OrdersInMemoryRepository();
		queryClient = new QueryClient();
	});

	it('renders correctly', async () => {
		renderComponent();

		await waitFor(() => {
			expect(screen.getByText('Merchant Name')).toBeInTheDocument();
		});
	});
});