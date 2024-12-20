import { Route, Routes } from 'react-router-dom'
import './App.css'
import { lazy } from 'react'

const OrdersPage = lazy(() => import('./pages/orders/orders.tsx'))
const OrderPage = lazy(() => import('./pages/order-details/order-datails.tsx'))


function App() {

	return (
		<div className="App">
			<Routes>
				<Route path='/' element={<OrdersPage />} />
				<Route path='/order/:orderId' element={<OrderPage />} />
			</Routes>
		</div>
	)
}

export default App
