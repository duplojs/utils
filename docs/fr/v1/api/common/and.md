---
outline: [2, 3]
description: "La fonction and() combine plusieurs prédicats ou type guards. Tous doivent réussir pour que le résultat soit vrai et le type soit affiné à l'intersection."
prev:
  text: "whenElse"
  link: "/fr/v1/api/common/whenElse"
next:
  text: "or"
  link: "/fr/v1/api/common/or"
---

# and

La fonction **`and()`** combine plusieurs prédicats ou type guards. Tous doivent réussir pour que le résultat soit vrai et le type soit affiné à l'intersection.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/common/and/tryout.doc.ts"
  majorVersion="v1"
  height="1090px"
  :foldLines="[3, 11]"
/>

## Syntaxe

### Signature classique

```typescript
// Type Guard predicate
function and<
	GenericInput extends unknown,
	GenericArrayPredicatedInput extends [
		(input: GenericInput) => input is any,
		(input: GenericInput) => input is any,
		...((input: GenericInput) => input is any)[]
	]
>(
	input: GenericInput,
	predicatedList: GenericArrayPredicatedInput
): input is ComputeResult<GenericInput, GenericArrayPredicatedInput>;

// Boolean predicate
function and<
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

### Signature currifiées

```typescript
// Type Guard predicate
function and<
	GenericInput extends unknown,
	GenericArrayPredicatedInput extends [
		(input: GenericInput) => input is any,
		(input: GenericInput) => input is any,
		...((input: GenericInput) => input is any)[]
	]
>(
	predicatedList: GenericArrayPredicatedInput
): (input: GenericInput) => input is ComputeResult<GenericInput, GenericArrayPredicatedInput>;

// Boolean predicate
function and<
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

- `predicates` : Tableau de fonctions testant l'entrée (peuvent être des type guards).
- `input` (surcharge directe) : Valeur testée.

## Valeur de retour

Un booléen (ou un type guard si les prédicats en sont) vrai uniquement si tous les prédicats passent.

## Voir aussi

- [`or`](/fr/v1/api/common/or) - Union de prédicats
