
import { OrderStatus } from '../../types/orders/order-status';
import OrdersResponse from '../../types/orders/orders-response';
import { IOrdersRepository } from './orders.repository';

export const OrdersInMemoryRepository = (): IOrdersRepository => {
	return {
		getOrders: async (): Promise<OrdersResponse> => {
			return {
				orders: []
			};
		},
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		getOrderById: async (id: string) => {
			return {
				orderById: {
					id: '1',
					merchantName: 'Merchant Name',
					merchantImage: '',
					merchantLogo: '',
					date: '2021-09-01',
					status: OrderStatus.Pending,
					nextDueAmount: 0,
					numberOfArticles: 0,
					nextDueDate: '2021-09-01',
					price: 0,
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
