export function concat<
	GenericElement extends unknown,
>(first: (GenericElement | GenericElement[]), ...rest: (GenericElement | GenericElement[])[]): GenericElement[] {
	if (first instanceof Array) {
		return first.concat(...rest);
	}
	return [first].concat(...rest);
}
