import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './nav';

const renderComponent = () => {
	return render(
		<Router>
			<Nav />
		</Router>
	);
};

describe('Nav', () => {
	it('renders correctly', () => {
		renderComponent();
		expect(screen.getByRole('link')).toBeInTheDocument();
	});

	it('navigates to the main route when clicked', () => {
		renderComponent();
		const linkElement = screen.getByRole('link', { name: /Back/i });
		fireEvent.click(linkElement);
		expect(window.location.pathname).toBe('/');
	});
});