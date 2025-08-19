export function getKeys<
	GenericObject extends object,
>(object: GenericObject) {
	return Object.keys(object) as (keyof GenericObject)[];
}
