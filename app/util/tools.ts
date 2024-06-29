export function updateProp<TObj, K extends keyof TObj>(obj: TObj, key: K, value: TObj[K]) {
	return { ...obj, [key]: value };
}
