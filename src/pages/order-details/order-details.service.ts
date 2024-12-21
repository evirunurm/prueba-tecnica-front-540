import { useMutation, useQuery } from "react-query";
import { IOrdersRepository } from "@repositories/orders/orders.repository";
import OrderByIdResponse from "@domain/orders/orderById-response";
import PayOrderResponse from "@domain/orders/payOrder-response";

export const GetOrderById = (
	repository: IOrdersRepository,
	id: string
) => {
	const { data, isLoading, error } = useQuery<OrderByIdResponse>({
		queryKey: ['get_order_by_id'],
		queryFn: () => repository.getOrderById(id),
	});

	return { data, isLoading, error };
};

export const PayOrder = (
	repository: IOrdersRepository,
	id: string
) => {
	const { data, error } = useMutation<PayOrderResponse>({
		mutationFn: () => repository.payOrder(id)
	});

	return { data, error };
};

