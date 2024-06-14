import { cn } from '@/lib/utils';
import { BentoWrapperProps } from 'types';

const BentoWrapper = ({
	children,
	element: Element = 'section',
	className,
}: BentoWrapperProps) => {
	return (
		<Element
			className={cn('bg-primary-dark rounded-[32px] text-white p-6 ', {
				[`${className}`]: className,
			})}
		>
			{children}
		</Element>
	);
};

export default BentoWrapper;
