import { Navigation, Footer } from '@/components/public layout';
import { Outlet } from 'react-router-dom';

const PublicLayout = () => {
	return (
		<main className='m-0 p-0 layoutHightWithGrid'>
			<div className='w-full'>
				<Navigation />
			</div>
			<div className='w-[99%] mx-auto'>
				<Outlet />
			</div>
			<footer className='w-[99%] mx-auto my-2'>
				<Footer />
			</footer>
		</main>
	);
};

export default PublicLayout;
