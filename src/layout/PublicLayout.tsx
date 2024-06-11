import Navigation from '@/components/Navigation';
import { ReactNode } from 'react';

const PublicLayout = ({ children }: { children: ReactNode }) => {
	return (
		<main className='m-0 p-0'>
			<div className='w-full'>
				<Navigation />
			</div>
			<div>{children}</div>
		</main>
	);
};

export default PublicLayout;
