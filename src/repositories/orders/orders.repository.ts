import PayOrderResponse from "../../types/orders/payOrder-response";
import OrderByIdResponse from "../../types/orders/orderById-response";
import OrdersResponse from "../../types/orders/orders-response";

export type IOrdersRepository = {
	getOrders(): Promise<OrdersResponse>;
	getOrderById(id: string): Promise<OrderByIdResponse>;
	payOrder(id: string): Promise<PayOrderResponse>;
};
