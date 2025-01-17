import { useEffect } from "react";

const useOutsideClick = <T extends HTMLElement>(
	ref: React.RefObject<T>,
	callback: () => void
) => {
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (ref.current && !ref.current.contains(event.target as Node)) {
				callback();
			}
		};

		// Bind the event listener
		document.addEventListener("mousedown", handleClickOutside);

		// Cleanup on unmount
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [ref, callback]);
};

export default useOutsideClick;
