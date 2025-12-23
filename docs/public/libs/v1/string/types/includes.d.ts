export type Includes<GenericString extends string, GenericSearchString extends string> = GenericString extends `${string}${GenericSearchString}${string}` ? true : false;
