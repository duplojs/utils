import * as DDate from "../date";
export type EligibleFormDataValue = (boolean | number | null | string | File | undefined | DDate.TheDate | DDate.TheTime | {
    [key: string]: EligibleFormDataValue;
} | EligibleFormDataValue[]);
export declare class TheFormData<GenericValues extends Record<string, EligibleFormDataValue>> extends FormData {
    readonly inputValues: GenericValues;
    private constructor();
    static toFlatEntries(value: EligibleFormDataValue, path?: string): Iterable<[string, string | File], void>;
    static fromEntries(iterable: Iterable<[string, unknown]>, arrayMaxIndex: number): object;
}
/**
 * Creates an extended `FormData` instance from nested values and provides helpers to flatten or rebuild entries.
 * 
 * **Supported call styles:**
 * - Classic: `createFormData(inputValues)` -> returns a `TheFormData` instance
 * 
 * The returned instance extends native `FormData` and stores the original object in `inputValues`.
 * Supported values are `string`, `File`, `boolean`, `number`, `null`, `undefined`, `DDate.TheDate`, `DDate.TheTime`, objects, and arrays.
 * At flatten time, non-`File` values are serialized to strings (`null` becomes `"null"`).
 * For backend reconstruction, use `TheFormData.fromEntries(...)` to rebuild nested objects from flattened form-data keys.
 * 
 * ```ts
 * const created = createFormData(
 * 	{
 * 		profile: {
 * 			name: "Ada",
 * 			tags: ["core", "utils"],
 * 		},
 * 		enabled: true,
 * 		retryCount: 2,
 * 		optionalValue: null,
 * 		createdDate: DDate.createOrThrow(1735689600000),
 * 		createdTime: DDate.createTimeOrThrow(45000000),
 * 	},
 * );
 * const flattenedName = created.get("profile/*\\name");
 * // flattenedName: "Ada"
 * const flattenedEnabled = created.get("enabled");
 * // flattenedEnabled: "true"
 * const flattenedNull = created.get("optionalValue");
 * // flattenedNull: "null"
 * 
 * const flatEntries = Array.from(
 * 	TheFormData.toFlatEntries({
 * 		tags: ["core", "utils"],
 * 		time: DDate.createTimeOrThrow(31500000),
 * 	}),
 * );
 * // flatEntries: [["tags/*\\[0]", "core"], ["tags/*\\[1]", "utils"], ["time", "time31500000+"]]
 * 
 * const rebuilt = TheFormData.fromEntries(
 * 	[
 * 		["profile/*\\name", "Ada"],
 * 		["profile/*\\tags/*\\[0]", "core"],
 * 		["enabled", "true"],
 * 	],
 * 	10,
 * );
 * // rebuilt: { profile: { name: "Ada", tags: ["core"] }, enabled: "true" }
 * ```
 * 
 * @remarks
 * - `TheFormData.toFlatEntries(...)` flattens nested objects/arrays into path keys using the `/*\` separator.
 * - `TheFormData.fromEntries(...)` ignores `__proto__`, `constructor`, and `prototype` paths for safety.
 * 
 * @see https://utils.duplojs.dev/en/v1/api/common/createFormData
 * 
 */
export declare function createFormData<GenericValues extends Record<string, EligibleFormDataValue>>(inputValues: GenericValues): TheFormData<GenericValues>;
