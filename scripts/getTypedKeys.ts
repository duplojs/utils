export function getTypedKeys<
	O extends object,
>(object: O) {
	return Object.keys(object) as (keyof O)[];
}
