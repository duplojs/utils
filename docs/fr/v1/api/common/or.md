---
outline: [2, 3]
description: "La fonction or() combine plusieurs prédicats ou type guards : si au moins un passe, le résultat est vrai et le type est affiné à l'union des cas acceptés."
prev:
  text: "and"
  link: "/fr/v1/api/common/and"
next:
  text: "equal"
  link: "/fr/v1/api/common/equal"
---

# or

La fonction **`or()`** combine plusieurs prédicats ou type guards : si au moins un passe, le résultat est vrai et le type est affiné à l'union des cas acceptés.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/common/or/tryout.doc.ts"
  majorVersion="v1"
  height="859px"
   :foldLines="[2]"
/>

## Syntaxe

```typescript
type ExtractPredicate<
	GenericPredicatedInput extends readonly AnyFunction<any[], boolean>[]
> = GenericPredicatedInput extends readonly [
	(input: any, ...args: any[]) => input is infer InferredPredicate,
	...infer InferredRest extends readonly AnyPredicate[]
] ? InferredRest extends readonly []
	? InferredPredicate
	: ExtractPredicate<InferredRest> extends infer InferredResult
		? IsEqual<InferredResult, never> extends true
			? never
			: InferredPredicate | InferredResult
		: never
	: never;
```

### Signatures classiques

```typescript
// Type Guard predicate
function or<
	GenericInput extends unknown,
	const GenericArrayPredicatedInput extends readonly [
		(input: GenericInput) => input is any,
		(input: GenericInput) => input is any,
		...((input: GenericInput) => input is any)[]
	]
>(
	input: GenericInput,
	predicatedList: GenericArrayPredicatedInput
): input is Extract<GenericInput, ExtractPredicate<GenericArrayPredicatedInput>>;

// Boolean predicate
function or<
	GenericInput extends unknown
>(
	input: GenericInput,
	predicatedList: [
		(input: GenericInput) => boolean,
		(input: GenericInput) => boolean,
		...((input: GenericInput) => boolean)[]
	]
): boolean;
```

### Signatures currifiées

```typescript
// Type Guard predicate
function or<
	GenericInput extends unknown,
	const GenericArrayPredicatedInput extends readonly [
		(input: GenericInput) => input is any,
		(input: GenericInput) => input is any,
		...((input: GenericInput) => input is any)[]
	]
>(
	predicatedList: GenericArrayPredicatedInput
): (input: GenericInput) => input is Extract<GenericInput, ExtractPredicate<GenericArrayPredicatedInput>>;

// Boolean predicate
function or<
	GenericInput extends unknown
>(
	predicatedList: [
		(input: GenericInput) => boolean,
		(input: GenericInput) => boolean,
		...((input: GenericInput) => boolean)[]
	]
): (input: GenericInput) => boolean;
```

## Paramètres

- `predicatedList` : Tableau de fonctions testant l'entrée (peuvent être des type guards).
- `input` (surcharge directe) : Valeur testée.

## Valeur de retour

Un booléen (ou un type guard si les prédicats en sont) vrai si au moins un prédicat passe.

## Voir aussi

- [`and`](/fr/v1/api/common/and) - Intersection de prédicats
