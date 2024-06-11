import { cn } from '@/lib/utils';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { NavTabProps } from 'types';

const NavigationTab = ({ children, setPosition, linkDetails }: NavTabProps) => {
	const ref = useRef<HTMLAnchorElement | null>(null);
	const { isActive, route, openMenu, handleToggleMenu, isMobile } = linkDetails;

	const handleMouseEnter = () => {
		if (!ref?.current) return;

		const { width } = ref.current!.getBoundingClientRect();

		if (openMenu) {
			return;
		}

		setPosition({
			left: ref.current.offsetLeft,
			width,
			opacity: 1,
		});
	};

	return (
		<li
			className={cn('', {
				'[clip-path:poloygon(0 0, 100% 0, 100% 100%, 0% 100%)] relative overflow-hidden':
					isMobile,
			})}
		>
			<Link
				to={route}
				ref={ref}
				onMouseEnter={handleMouseEnter}
				className={cn(
					'block relative z-10 cursor-pointer text-3xl font-semibold px-4 py-3 mix-blend-difference  md:px-5 md:py-3 md:text-base navTab text-white',
					{
						'underline underline-offset-4': isActive,
					}
				)}
				onClick={() => openMenu && handleToggleMenu}
			>
				{children}
			</Link>
		</li>
	);
};

export default NavigationTab;
