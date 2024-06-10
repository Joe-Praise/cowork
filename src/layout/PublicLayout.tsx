import Navigation from '@/components/Navigation';
import { ReactNode } from 'react';

const PublicLayout = ({ children }: { children: ReactNode }) => {
	return (
		<main>
			<div>
				<Navigation />
			</div>
			<div>{children}</div>
		</main>
	);
};

export default PublicLayout;
