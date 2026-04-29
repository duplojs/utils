/* eslint-disable @typescript-eslint/prefer-for-of */
import { type AnyTuple } from "@scripts/common";
import * as DDate from "@scripts/date";

export type EligibleDuplicateElement = (
	| string
	| boolean
	| null
	| number
	| bigint
	| undefined
	| DDate.TheDate
	| DDate.TheTime
);

export function findDuplicates<
	GenericInput extends readonly EligibleDuplicateElement[],
>(array: GenericInput): undefined | AnyTuple<GenericInput[number]>;

export function findDuplicates(array: EligibleDuplicateElement[]): any {
	const store = new Map<
		EligibleDuplicateElement,
		number
	>();
	let storeTimeObject: (
		| undefined
		| Map<
			DDate.SerializedTheDate | DDate.SerializedTheTime,
			DDate.TheDate | DDate.TheTime
		>
	) = undefined;
	let result: undefined | any[] = undefined;

	for (let index = 0; index < array.length; index++) {
		const element = array[index];

		if (DDate.is(element) || DDate.isTime(element)) {
			storeTimeObject ??= new Map();

			const serializedValue = element.toJSON();
			const storedElement = storeTimeObject.get(serializedValue) ?? element;
			const storedCount = store.get(storedElement);

			if (storedCount === 1) {
				result ??= [];
				result.push(storedElement);
			}

			store.set(storedElement, (storedCount ?? 0) + 1);
			if (storedElement === element) {
				storeTimeObject.set(serializedValue, element);
			}
		} else {
			const storedCount = store.get(element);

			if (storedCount === 1) {
				result ??= [];
				result.push(element);
			}

			store.set(element, (storedCount ?? 0) + 1);
		}
	}

	return result;
}
