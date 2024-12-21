import { OrderStatus } from "./order-status";

interface OrderResponse {
	status: OrderStatus;
}

interface PayOrderResponse {
	payOrder: OrderResponse;
}

export default PayOrderResponse;
