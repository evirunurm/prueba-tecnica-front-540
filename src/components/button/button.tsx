import React, { ButtonHTMLAttributes } from 'react';
import './button.css';

const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, ...props }) => {
	return (
		<button className='button' {...props}>
			{children}
		</button>
	);
};

export default Button;