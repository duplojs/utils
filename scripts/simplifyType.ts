export type SimplifyType<GenericValue extends unknown> =
	GenericValue extends Record<number, unknown>
		? { [Prop in keyof GenericValue]: SimplifyType<GenericValue[Prop]> }
		: GenericValue;

export type SimplifyTypeForce<GenericValue extends unknown> =
	GenericValue extends object
		? { [Prop in keyof GenericValue]: SimplifyTypeForce<GenericValue[Prop]> }
		: GenericValue;

export type SimplifyObjectTopLevel<GenericObject extends object> =
	GenericObject extends object ?
		{ [Prop in keyof GenericObject]: GenericObject[Prop] }
		: never;
