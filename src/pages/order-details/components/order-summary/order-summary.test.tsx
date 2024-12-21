import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import OrderSummary from './order-summary';
import { describe, expect, it } from 'vitest';

describe('OrderSummary', () => {
	it('renders total amount', () => {
		render(<OrderSummary totalAmount={100} />);
		expect(screen.getByText('100 €')).toBeInTheDocument();
	});

	it('renders number of articles', () => {
		render(<OrderSummary numberOfArticles={5} />);
		expect(screen.getByText('5 artículos')).toBeInTheDocument();
	});

	it('renders shipped articles', () => {
		render(<OrderSummary numberOfArticles={5} shippedArticles={3} />);
		expect(screen.getByText('3/5 enviados')).toBeInTheDocument();
	});

	it('renders all props correctly', () => {
		render(<OrderSummary totalAmount={200} numberOfArticles={10} shippedArticles={7} />);
		expect(screen.getByText('200 €')).toBeInTheDocument();
		expect(screen.getByText('10 artículos')).toBeInTheDocument();
		expect(screen.getByText('7/10 enviados')).toBeInTheDocument();
	});
});