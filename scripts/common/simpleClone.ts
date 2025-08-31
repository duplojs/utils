import { entries } from "../object/entries";

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
		return entries(unknownValue).reduce(
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
