export function updateProp<TObj, K extends keyof TObj>(obj: TObj, key: K, value: TObj[K]) {
	return { ...obj, [key]: value };
}

/**
 * Retorna valores dinstintos de uma determinada propriedade de um array de objetos.
 */
export function distinct<T, K extends keyof T>(Obj: Array<T>, property: K) {
	const _set = new Set(Obj.flatMap((x) => x[property]));
	return Array.from(_set);
}
