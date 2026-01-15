/**
 * {@include common/simpleClone/index.md}
 */
export function simpleClone<
	GenericObject extends unknown = unknown,
>(unknownValue: GenericObject): GenericObject {
	if (!unknownValue) {
		return unknownValue;
	} else if (typeof unknownValue !== "object") {
		return unknownValue;
	} else if (
		unknownValue.constructor === undefined
		|| unknownValue.constructor.name === "Object"
	) {
		const result = {};
		for (const key in unknownValue) {
			const desc = Object.getOwnPropertyDescriptor(unknownValue, key);
			if (desc?.set || desc?.get) {
				Object.defineProperty(
					result,
					key,
					desc,
				);
			} else {
				result[key as never] = simpleClone(unknownValue[key]) as never;
			}
		}
		return result as never;
	} else if (unknownValue instanceof Array && unknownValue.constructor.name === "Array") {
		return unknownValue.map(simpleClone) as GenericObject;
	} else {
		return unknownValue;
	}
}
