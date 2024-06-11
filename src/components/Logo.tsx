import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const Logo = ({ className }: { className?: string }) => {
	return (
		<Link to='/' className='cursor-pointer flex items-center gap-1'>
			<h1
				className={cn('text-26 font-stardom', {
					[`${className}`]: className,
				})}
			>
				Cowork
			</h1>
		</Link>
	);
};

export default Logo;
