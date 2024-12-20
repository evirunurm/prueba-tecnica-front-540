import { lazy } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import {
	AnimatePresence
} from "framer-motion"

const OrdersPage = lazy(() => import('../../pages/orders/orders.tsx'))
const OrderDetailsPage = lazy(() => import('../../pages/order-details/order-datails.tsx'))


const AnimatedRoutes: React.FC = () => {
	const location = useLocation()
	return (
		<AnimatePresence mode="wait">
			<Routes location={location} key={location.pathname}>
				<Route path='/' element={<OrdersPage />} />
				<Route path='/order/:orderId' element={<OrderDetailsPage />} />
			</Routes>
		</AnimatePresence>
	)
};

export default AnimatedRoutes;