const kindPrefix = "kind-"

export type TheKind<
    GenericName extends string,
    GenericValue extends unknown = unknown,
> = {
    [Prop in GenericName as `${typeof kindPrefix}${Prop}`]: GenericValue
}

export function theKind<
    GenericName extends string,
    GenericValue extends unknown = unknown,
>(
    name: GenericName,
    value: GenericValue = null as GenericValue,
) {
    return {
        [`${kindPrefix}${name}`]: value,
    } as TheKind<GenericName, GenericValue> 
}

export function hasKind<
    GenericInput extends unknown,
    GenericKindName extends string,
>(
    input: GenericInput,
    kindName: GenericKindName
): input is Extract<GenericInput, Record<`${typeof kindPrefix}${GenericKindName}`, unknown>> {
    return input && typeof input === "object" && `${kindPrefix}${kindName}` in input
}