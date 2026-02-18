import * as DDate from "@scripts/date";
import { escapeRegExp } from "./escapeRegExp";

export type EligibleFormDataValue = (
	| boolean
	| number
	| null
	| string
	| File
	| undefined
	| DDate.TheDate
	| DDate.TheTime
	| { [key: string]: EligibleFormDataValue }
	| EligibleFormDataValue[]
);

const separator = "/*\\";

const firstElementInPathRegex = new RegExp(`^((?:(?!${escapeRegExp(separator)}).)*)(?:${escapeRegExp(separator)})?`);
const getIndexRegex = /^\[(\d+)\]$/;
const invalidEntryRegex = /__proto__|constructor|prototype/;

export class TheFormData<
	GenericValues extends Record<string, EligibleFormDataValue>,
> extends FormData {
	private constructor(
		public readonly inputValues: GenericValues,
	) {
		super();

		for (const entry of TheFormData.toFlatEntries(inputValues)) {
			this.append(entry[0], entry[1]);
		}
	}

	public static *toFlatEntries(value: EligibleFormDataValue, path?: string): Iterable<[string, string | File], void> {
		if (
			typeof value === "string"
			|| value instanceof DDate.TheTime
			|| value instanceof DDate.TheDate
			|| typeof value === "number"
			|| typeof value === "boolean"
		) {
			yield [path ?? "", value.toString()];
		} else if (value instanceof File) {
			yield [path ?? "", value];
		} else if (value === null) {
			yield [path ?? "", "null"];
		} else if (value === undefined) {
			return;
		} else if (value instanceof Array) {
			for (let index = 0; index < value.length; index++) {
				const entriesIterator = this.toFlatEntries(
					value[index],
					path === undefined
						? `[${index}]`
						: `${path}${separator}[${index}]`,
				);

				for (const entry of entriesIterator) {
					yield entry;
				}
			}
		} else {
			for (const key in value) {
				const entriesIterator = this.toFlatEntries(
					value[key as never],
					path === undefined
						? key
						: `${path}${separator}${key}`,
				);

				for (const entry of entriesIterator) {
					yield entry;
				}
			}
		}
	}

	public static fromEntries(
		iterable: Iterable<[string, unknown]>,
		arrayMaxIndex: number,
	): object {
		const constructObject = (
			object: object | undefined,
			path: string,
			value: unknown,
		): object | undefined => {
			const firstElement = path.match(firstElementInPathRegex)![1]!;
			const index = firstElement.match(getIndexRegex)?.[1];

			if (index && Number(index) > arrayMaxIndex) {
				return object;
			}

			let currentObject = object;

			if (currentObject === undefined) {
				if (index !== undefined) {
					currentObject = [];
				} else {
					currentObject = {};
				}
			}

			if (firstElement === path) {
				currentObject[(index ?? firstElement) as never] = value as never;

				return currentObject;
			}

			currentObject[(index ?? firstElement) as never] = constructObject(
				currentObject[(index ?? firstElement) as never],
				path.replace(firstElementInPathRegex, ""),
				value,
			) as never;

			return currentObject;
		};

		let result = undefined as object | undefined;

		for (const entry of iterable) {
			if (invalidEntryRegex.test(entry[0])) {
				continue;
			}

			result = constructObject(
				result,
				entry[0],
				entry[1],
			);
		}

		return result ?? {};
	}

	/**
	 * @internal
	 */
	public static "new"<
		GenericValues extends Record<string, EligibleFormDataValue>,
	>(inputValues: GenericValues) {
		return new TheFormData(inputValues);
	}
}

/**
 * {@include common/createFormData/index.md}
 */
export function createFormData<
	GenericValues extends Record<string, EligibleFormDataValue>,
>(
	inputValues: GenericValues,
) {
	return TheFormData.new(inputValues);
}
