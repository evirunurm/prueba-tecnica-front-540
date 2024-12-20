import { describe, expect, it } from "vitest";
import { render, waitFor, screen } from '@testing-library/react';
import { OrdersInMemoryRepository } from '../../repositories/orders/orders.inmemory.repository';
import { QueryClient, QueryClientProvider } from 'react-query';
import '@testing-library/jest-dom';
import OrdersPage from "./orders.page";

describe('OrdersPage', () => {
	const queryClient = new QueryClient();

	it('renders correctly', async () => {
		const repository = OrdersInMemoryRepository();

		render(
			<QueryClientProvider client={queryClient}>
				<OrdersPage
					repository={repository}
				/>
			</QueryClientProvider>
		);

		await waitFor(() => {
			expect(screen.getByText('Orders')).toBeInTheDocument();
		});
	});

});