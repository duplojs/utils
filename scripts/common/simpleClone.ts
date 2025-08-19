import { getEntries } from "../object/getEntries";

export function simpleClone<
	GenericObject extends unknown = unknown,
>(unknownValue: GenericObject): GenericObject {
	if (!unknownValue) {
		return unknownValue;
	} else if (typeof unknownValue !== "object") {
		return unknownValue;
	} else if (
		unknownValue.constructor?.name === "Object"
		|| unknownValue.constructor === undefined
	) {
		return getEntries(unknownValue).reduce(
			(pv, [key, value]) => {
				pv[key] = simpleClone(value);
				return pv;
			},
			{} as GenericObject,
		);
	} else if (unknownValue instanceof Array && unknownValue.constructor.name === "Array") {
		return unknownValue.map(simpleClone) as GenericObject;
	} else {
		return unknownValue;
	}
}
