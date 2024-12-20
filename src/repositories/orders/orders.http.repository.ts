
import request, { gql } from 'graphql-request';
import { IOrdersRepository } from './orders.repository';
import OrdersResponse from '../../types/orders/orders-response';
import OrderByIdResponse from '../../types/orders/orderById-response';

export const OrdersHttpRepository = (): IOrdersRepository => {
	return {
		getOrders: async () => {
			const ORDERS_QUERY = gql`
			query MyQuery {
				orders {
					id,
					merchantName,
					merchantImage,
					merchantLogo,
					date,
					status,
					nextDueAmount,
					numberOfArticles
				}
			}
			`;
			return request<OrdersResponse>(
				process.env.REACT_APP_FRONTEND_MOBILE_API ?? '', ORDERS_QUERY);
		},
		getOrderById: async (id: string) => {
			const ORDERS_QUERY = gql`
			query MyQuery {
				orderById(orderId: ${id}) {
					reference
					shippedArticles
					price
					status
					numberOfArticles
					nextDueDate
					nextDueAmount
					merchantName
					merchantLogo
					merchantImage
					id
					date
				}
			}
			`;
			return request<OrderByIdResponse>(
				process.env.REACT_APP_FRONTEND_MOBILE_API ?? '', ORDERS_QUERY);
		},
		payOrder: async (orderId: string) => {
			const PAY_ORDER_MUTATION = gql`
			mutation MyMutation {
				payOrder(orderId: ${orderId}) {
					status
				}
			}
			`;
			return request(process.env.REACT_APP_FRONTEND_MOBILE_API ?? '', PAY_ORDER_MUTATION);
		}
	};
};
