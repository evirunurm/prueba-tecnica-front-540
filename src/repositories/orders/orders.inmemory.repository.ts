
import { OrderStatus } from '@domain/orders/order-status';
import OrdersResponse from '@domain/orders/orders-response';
import { IOrdersRepository } from './orders.repository';

export const OrdersInMemoryRepository = (): IOrdersRepository => {
	return {
		getOrders: async (): Promise<OrdersResponse> => {
			return {
				orders: []
			};
		},
		getOrderById: async (id: string) => {
			return {
				orderById: {
					id: id,
					merchantName: 'Merchant Name',
					merchantImage: '',
					merchantLogo: '',
					date: '2021-09-01',
					status: OrderStatus.Pending,
					nextDueAmount: 10,
					numberOfArticles: 0,
					nextDueDate: '2021-09-01',
					price: 10,
					reference: '',
					shippedArticles: 0
				}
			};
		},
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		payOrder: async (orderId: string) => {
			return {
				payOrder: {
					status: OrderStatus.Completed
				}
			};
		}
	};
};
