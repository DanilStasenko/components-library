'use client'

import React, { FC } from 'react';
import clsx from 'clsx';
import "../css/MyButton.css";

export interface MyButtonProps {
	children: any;
	size: string;
    onClick?: () => void;
    extraClass?: string;
}

const MyButton: FC<MyButtonProps> = ({
	children,
	size,
    onClick,
    extraClass='',
	...props
}) => {

    const className = clsx(
        'my-button',
        {
            [`my-button_size_${size}`]: size,
        },
        extraClass
    );

	return (
		<button {...props} className={className} onClick={onClick}>
			{children}
		</button>
	);
};

export default MyButton;