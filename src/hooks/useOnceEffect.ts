/* custom hook for useEffect to call once */

import { useEffect, useRef } from "react";

const useOnceEffect = (effect: () => void) => {
	const hasRun = useRef(false);

	useEffect(() => {
		console.log("Test effect!");
		if (!hasRun.current) {
			console.log("Test once effect!");

			hasRun.current = true;
			effect();
		}
	}, [effect]);
};

export default useOnceEffect;
