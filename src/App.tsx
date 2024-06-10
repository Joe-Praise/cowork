import { RouterProvider } from 'react-router-dom';
import { router } from '../navigation';

function App() {
	return (
		//   <QueryClientProvider client={queryClient}>
		// <ToastContainer />
		<>
			<RouterProvider router={router} />
		</>
		//   </QueryClientProvider>
	);
}

export default App;
