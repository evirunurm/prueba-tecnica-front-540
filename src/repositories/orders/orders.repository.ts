import PayOrderResponse from "@domain/orders/payOrder-response";
import OrderByIdResponse from "@domain/orders/orderById-response";
import OrdersResponse from "@domain/orders/orders-response";

export type IOrdersRepository = {
	getOrders(): Promise<OrdersResponse>;
	getOrderById(id: string): Promise<OrderByIdResponse>;
	payOrder(id: string): Promise<PayOrderResponse>;
};
