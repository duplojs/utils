export type IsoDateString =
    | `${number}-${number}-${number}T${number}:${number}:${number}.${number}Z`
    | `${number}-${number}-${number}T${number}:${number}:${number}.${number}+${string}`
    | `${number}-${number}-${number}T${number}:${number}:${number}.${number}-${string}`
    | `${number}-${number}-${number}T${number}:${number}:${number}Z`
    | `${number}-${number}-${number}T${number}:${number}:${number}+${string}`
    | `${number}-${number}-${number}T${number}:${number}:${number}-${string}`;

export type NewDate<GenericInput extends string = IsoDateString> = GenericInput & {
	readonly __brand: "NewDate";
};
