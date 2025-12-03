---
outline: [2, 3]
prev:
  text: "or"
  link: "/v1/api/common/or/fr"
next:
  text: "isType"
  link: "/v1/api/common/isType/fr"
---

# equal

La fonction **`equal()`** compare une valeur à un ou plusieurs littéraux. Avec des primitives, elle agit comme type guard et restreint le type aux valeurs fournies.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/common/equal/examples/tryout.doc.ts"
  majorVersion="v1"
  height="300px"
/>

## Syntaxe

```typescript
type EligibleEqual = string | null | number | undefined | bigint | boolean | symbol;

type ExpectLiteral<
	GenericValue extends EligibleEqual
> = Or<
	[
		UnionContain<GenericValue, string>,
		UnionContain<GenericValue, number>,
		UnionContain<GenericValue, boolean>,
		UnionContain<GenericValue, bigint>,
		UnionContain<GenericValue, symbol>
	]
> extends true ? never : GenericValue;
```

### Signatures classiques

```typescript
// Type Guard predicate
function equal<
	GenericInput extends EligibleEqual | object,
	GenericValue extends Exclude<GenericInput, object>
>(
	input: GenericInput,
	value: ExpectLiteral<GenericValue> | ExpectLiteral<GenericValue>[]
): input is GenericValue;

// Boolean predicate
function equal<
	GenericInput extends EligibleEqual | object,
	GenericValue extends Exclude<GenericInput, object>
>(
	input: GenericInput,
	value: GenericValue | GenericValue[]
): boolean;
```

### Signatures currifiées

```typescript
// Type guard
function equal<
	GenericInput extends EligibleEqual | object,
	GenericValue extends Exclude<GenericInput, object>
>(
	value: ExpectLiteral<GenericValue> | ExpectLiteral<GenericValue>[]
): (input: GenericInput) => input is NoInfer<GenericValue>;

// Boolean predicate
function equal<
	GenericInput extends EligibleEqual | object,
	GenericValue extends Exclude<GenericInput, object>
>(
	value: GenericValue | GenericValue[]
): (input: GenericInput) => boolean;
```

## Paramètres

- `value` : Littéral ou tableau de littéraux autorisés.
- `input` (surcharge directe) : Valeur à comparer.

## Valeur de retour

Un booléen (ou un type guard pour les primitives) indiquant si l'entrée correspond à l'une des valeurs.

## Voir aussi

- [`isType`](/v1/api/common/isType/fr) - Type guard générique basé sur le type runtime
- [`instanceOf`](/v1/api/common/instanceOf/fr) - Vérifie une instance de constructeur
