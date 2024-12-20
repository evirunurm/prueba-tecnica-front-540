import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect, vi } from 'vitest';
import Button from './button';

describe('Button component', () => {
	it('renders the button with children', () => {
		render(<Button>Click Me</Button>);
		expect(screen.getByText('Click Me')).toBeInTheDocument();
	});

	it('applies passed props to the button', () => {
		render(<Button disabled>Click Me</Button>);
		expect(screen.getByText('Click Me')).toBeDisabled();
	});

	it('handles click events', () => {
		const handleClick = vi.fn();
		render(<Button onClick={handleClick}>Click Me</Button>);
		fireEvent.click(screen.getByText('Click Me'));
		expect(handleClick).toHaveBeenCalledTimes(1);
	});
});