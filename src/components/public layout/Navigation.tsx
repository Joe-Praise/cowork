import { useLocation } from 'react-router-dom';
import Logo from './Logo';
import { navLinks } from '../../../constants/index';
import { Button } from '../ui/button';
import { useEffect, useRef, useState } from 'react';
import NavigationTab from './NavigationTab';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { MenuIcon, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import useClientWidth from '@/hooks/useClientWidth';
gsap.registerPlugin(useGSAP);

const Navigation = () => {
	const { isMobile, setIsMobile } = useClientWidth();
	const menuRef = useRef<HTMLDivElement | null>(null);
	const tl = useRef<GSAPTimeline | null>(null);
	const { pathname } = useLocation();
	const [openMenu, setOpenMenu] = useState(false);
	const [position, setPosition] = useState({
		left: 0,
		width: 0,
		opacity: 0,
	});

	const handleToggleMenu = () => {
		setOpenMenu((prevState) => !prevState);
	};

	useGSAP(
		() => {
			const width = document.documentElement.clientWidth;
			if (width > 768) {
				setIsMobile(false);
				return;
			} else setIsMobile(true);

			gsap.set('.navTab', { y: 75 });
			gsap.set(menuRef.current, {
				clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
			});
			gsap.set('.logo', {
				y: 75,
			});

			tl.current = gsap
				.timeline({ paused: true })
				.to(menuRef.current, {
					duration: 1.4,
					clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
					ease: 'power4.inOut',
				})
				.to('.logo', {
					y: 0,
					delay: -0.1,
				})
				.to('.navTab', {
					duration: 1,
					stagger: 0.1,
					y: 0,
					ease: 'power4.inOut',
					delay: -0.75,
				});
		},
		{ scope: menuRef }
	);

	useEffect(() => {
		if (openMenu) {
			tl.current?.play();
		}
		if (!openMenu) {
			tl.current?.reverse();
		}
	}, [isMobile, openMenu]);

	return (
		<header className='w-full h-14 border-t-2 border-b-2 border-primary-dark flex-between my-2 px-2'>
			<div>
				<Logo />
			</div>

			<div className='block md:hidden'>
				<Button
					className={'bg-button-tertiary text-white rounded-full'}
					onClick={handleToggleMenu}
				>
					<MenuIcon />
				</Button>
			</div>

			<div
				ref={menuRef}
				className={cn(
					'  md:flex-row md:static md:bg-transparent md:w-auto md:h-auto',
					{
						'fixed flex flex-col z-[2] bg-primary-dark top-0 left-0 w-screen h-screen':
							isMobile,
						'[clip-path:polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)]': !isMobile,
					}
				)}
			>
				<div className=' flex justify-between items-center md:hidden px-2 h-20'>
					<div
						onClick={handleToggleMenu}
						className={cn('', {
							'[clip-path:poloygon(0 0, 100% 0, 100% 100%, 0% 100%)] relative overflow-hidden':
								isMobile,
						})}
					>
						<Logo className='text-white text-[30px] logo relative' />
					</div>

					<div>
						<Button
							className={'bg-button-tertiary text-white rounded-full'}
							onClick={handleToggleMenu}
						>
							<X size={'30px'} />
						</Button>
					</div>
				</div>
				<nav className='flex flex-col justify-between h-auto md:items-center flex-1 md:justify-end gap-1 md:flex-row  md:w-auto'>
					<ul
						onMouseLeave={() => {
							if (openMenu) {
								return;
							}
							setPosition((prev) => {
								return {
									...prev,
									opacity: 0,
								};
							});
						}}
						className='relative w-fit list-none m-0 p-0 md:flex'
					>
						{navLinks.map((link, index) => {
							const isActive =
								pathname === link.route ||
								pathname.startsWith(`${link.route}/`);

							const details = {
								isActive,
								route: link.route,
								openMenu,
								handleToggleMenu,
								isMobile,
							};
							return (
								<NavigationTab
									linkDetails={details}
									setPosition={setPosition}
									key={`navLink_item_${index}`}
								>
									{link.label}
								</NavigationTab>
							);
						})}
						{!openMenu && !isMobile && <Cursor position={position} />}
					</ul>
					<div className='flex items-center justify-end gap-5 p-3 md:gap-1'>
						<Button
							className={cn('btn-tertiary', {
								'bg-primary border-primary ': openMenu && isMobile,
							})}
							size={'lg'}
						>
							Log in
						</Button>
						<Button variant={'secondary'} size={'lg'}>
							Sign up
						</Button>
					</div>
				</nav>
			</div>
		</header>
	);
};

export default Navigation;

const Cursor = ({
	position,
}: {
	position: {
		left: number;
		width: number;
		opacity: number;
	};
}) => {
	return (
		<li
			style={{ ...position, transition: 'all ease 0.5s' }}
			className='absolute z-0 h-7 rounded-full bg-primary-dark md:h-12'
		/>
	);
};
