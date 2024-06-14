import { useRef } from 'react';
import { BentoWrapper } from '../shared';
import Logo from './Logo';
import { Button } from '../ui/button';
import { navLinks } from '../../../constants';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Footer = () => {
	const { pathname } = useLocation();
	const inputRef = useRef<HTMLInputElement | null>(null);

	const socials = [
		{
			platform: 'Facebook',
			url: 'https://www.facebook.com/',
		},
		{
			platform: 'Instagram',
			url: 'https://www.instagram.com/',
		},
		{
			platform: 'X',
			url: 'https://x.com/',
		},
		{
			platform: 'LinkedIn',
			url: 'https://www.linkedin.com/',
		},
		{
			platform: 'Youtube',
			url: 'https://www.youtube.com/',
		},
	];

	const connected = [
		{
			label: 'Subscribe',
		},
		{
			label: 'Member Stories',
		},
		{
			label: 'Locations',
		},
		{
			label: 'Write for Us',
		},
	];
	return (
		<BentoWrapper
			element={'div'}
			className='flex flex-col justify-between md:flex-row'
		>
			<div className=' basis-[35%]'>
				<Logo />

				<p className='my-4'>
					Join our newsletter to stay up to date on features and releases.
				</p>

				<div className='flex flex-col md:flex-row gap-5 my-9'>
					<input
						type='text'
						ref={inputRef}
						placeholder='Email Address'
						className='block h-12 w-[50%] outline-none border-b bg-transparent px-4 placeholder:p-2'
					/>

					<div>
						<Button
							variant={'outline'}
							size={'lg'}
							className='border border-input bg-white text-primary-dark  rounded-full hover:bg-black hover:text-white '
						>
							Sign up
						</Button>
					</div>
				</div>
				<p className='my-4'>
					By subscribing you agree to with our Privacy Policy and provide
					consent to receive updates from our company.
				</p>
			</div>
			<div className='basis-[19.4%]'>
				<p className='uppercase'>Explore More</p>
				<ul className='list-none flex flex-col gap-5 mt-5'>
					{navLinks.map((link, index) => {
						const isActive =
							pathname === link.route || pathname.startsWith(`${link.route}/`);
						return (
							<li
								key={`${link.label}_key_${index}`}
								className={cn('', {
									'underline underline-offset-4': isActive,
								})}
							>
								<Link to={link.route}>{link.label}</Link>
							</li>
						);
					})}
				</ul>
			</div>
			<div className='basis-[19.4%]'>
				<p className='uppercase'>Stay connected</p>
				<ul className='list-none flex flex-col gap-5 mt-5'>
					{connected.map((link, index) => {
						return <li key={`${link.label}_key_${index}`}>{link.label}</li>;
					})}
				</ul>
			</div>
			<div className='basis-[19.4%]'>
				<p className='uppercase'>follow us</p>
				<ul className='list-none flex flex-col gap-5 mt-5'>
					{socials.map((link, index) => {
						return (
							<li
								key={`${link.platform}_key_${index}`}
								// className={cn('', {
								// 	'underline underline-offset-4': isActive,
								// })}
							>
								<Link to={link.url} target='_blank'>
									{link.platform}
								</Link>
							</li>
						);
					})}
				</ul>
			</div>
		</BentoWrapper>
	);
};

export default Footer;
