/* eslint-disable no-unused-vars */

import { Dispatch, ElementType, ReactNode } from 'react';

declare type SetPositionProps = {
	left: number;
	width: number;
	opacity: number;
};

declare type NavTabLiDetailsProps = {
	isActive: boolean;
	route: string;
	openMenu: boolean;
	handleToggleMenu: () => void;
	isMobile: boolean;
};

declare type NavTabProps = {
	children: ReactNode;
	setPosition: Dispatch;
	linkDetails: NavTabLiDetailsProps;
};

declare type BentoWrapperProps = {
	children: ReactNode;
	element: ElementType;
	className?: string;
};
