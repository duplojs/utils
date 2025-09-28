import { type IsEqual } from "@scripts/common";

export type FlatObject<
	GenericObject extends object,
	GenericPath extends string = "",
> = {
	[Prop in Extract<keyof GenericObject, string | number>]: GenericObject[Prop] extends object
		? FlatObject<
			GenericObject[Prop],
			`${GenericPath}.${Prop}`
		>
		: {
			path: `${GenericPath}.${Prop}`;
			value: GenericObject[Prop];
		}
}[Extract<keyof GenericObject, string | number>] extends infer InferredResult extends {
	path: string;
	value: any;
}
	? IsEqual<GenericPath, ""> extends true
		? IsEqual<InferredResult, never> extends true
			? {}
			: {
				[Result in InferredResult as Result["path"] extends `.${infer inferredPath}` ? inferredPath : never]: Result["value"]
			}
		: InferredResult
	: never;
