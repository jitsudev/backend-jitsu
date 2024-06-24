import debounce from "lodash.debounce";
import { useRef, useEffect, useMemo } from "react";

type Callback = () => void;

export const useDebounce = (callback: Callback) => {
	const ref = useRef<Callback | undefined>();

	useEffect(() => {
		ref.current = callback;
	}, [callback]);

	const debouncedCallback = useMemo(() => {
		const func = () => {
			ref.current?.();
		};

		return debounce(func, 1000);
	}, []);

	return debouncedCallback;
};
