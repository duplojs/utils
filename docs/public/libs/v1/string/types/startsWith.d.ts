export type StartsWith<GenericString extends string, GenericSearchString extends string> = GenericString extends `${GenericSearchString}${string}` ? true : false;
