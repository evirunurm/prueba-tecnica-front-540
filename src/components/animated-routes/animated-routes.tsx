import { lazy } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import {
	AnimatePresence
} from "framer-motion"

const Orders = lazy(() => import('@pages/orders/orders.tsx'))
const OrderDetails = lazy(() => import('@pages/order-details/order-details.tsx'))

const AnimatedRoutes: React.FC = () => {
	const location = useLocation()
	return (
		<AnimatePresence mode="wait">
			<Routes location={location} key={location.pathname}>
				<Route path='/' element={<Orders />} />
				<Route path='/order/:orderId' element={<OrderDetails />} />
			</Routes>
		</AnimatePresence>
	)
};

export default AnimatedRoutes;