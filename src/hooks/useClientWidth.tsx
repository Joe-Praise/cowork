/**
 * This usehook isn't functioning properly. i'm going to work on it soon
 */
import { useEffect, useState } from 'react';

const useClientWidth = () => {
	const [isMobile, setIsMobile] = useState(false);
	const width = document.documentElement.clientWidth;

	useEffect(() => {
		width < 768 ? setIsMobile(true) : setIsMobile(false);
	}, [width]);
	return { isMobile, setIsMobile };
};

export default useClientWidth;
