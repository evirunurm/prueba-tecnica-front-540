import { beforeEach, describe, expect, it } from "vitest";
import { render, screen } from '@testing-library/react';
import { OrdersInMemoryRepository } from '../../repositories/orders/orders.inmemory.repository';
import { QueryClient, QueryClientProvider } from 'react-query';
import '@testing-library/jest-dom';
import OrdersPage from "./orders.page";
import { IOrdersRepository } from "@repositories/orders/orders.repository";

const renderComponent = (queryClient: QueryClient, repository: IOrdersRepository) => {
	return render(
		<QueryClientProvider client={queryClient}>
			<OrdersPage
				repository={repository}
			/>
		</QueryClientProvider>
	);
}

describe('OrdersPage', () => {
	const repository = OrdersInMemoryRepository();
	const queryClient = new QueryClient();

	beforeEach(() => {
		queryClient.clear();
	});

	it('displays loading state initially', async () => {
		renderComponent(queryClient, repository);

		expect(screen.getByText('Loading...')).toBeInTheDocument();
	});

	it('displays orders after loading', async () => {
		const { findByText } = renderComponent(queryClient, repository);

		expect(await findByText('Loading...')).not.toBeInTheDocument();
		expect(await findByText('Orders')).toBeInTheDocument();
	});
});