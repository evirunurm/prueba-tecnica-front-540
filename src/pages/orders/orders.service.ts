import { useQuery } from "react-query";
import OrdersResponse from "../../types/orders/orders-response";
import { IOrdersRepository } from "../../repositories/orders/orders.repository";

export const GetOrders = (
	repository: IOrdersRepository
) => {
	const { data, isLoading, error } = useQuery<OrdersResponse>({
		queryKey: ['get_orders'],
		queryFn: repository.getOrders,
	});

	return { data, isLoading, error };
};
