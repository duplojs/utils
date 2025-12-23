---
outline: [2, 3]
prev:
  text: "or"
  link: "/fr/v1/api/common/or"
next:
  text: "isType"
  link: "/fr/v1/api/common/isType"
---

# equal

La fonction **`equal()`** compare une valeur à un ou plusieurs littéraux. Avec des primitives, elle agit comme type guard et restreint le type aux valeurs fournies.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/common/equal/tryout.doc.ts"
  majorVersion="v1"
  height="300px"
/>

## Syntaxe

```typescript
type EligibleEqual = string | null | number | undefined | bigint | boolean | symbol;

type ExpectLiteral<
	GenericInput extends EligibleEqual
> = Or<
	[
		UnionContain<GenericInput, string>,
		UnionContain<GenericInput, number>,
		UnionContain<GenericInput, boolean>,
		UnionContain<GenericInput, bigint>,
		UnionContain<GenericInput, symbol>
	]
> extends true ? never : GenericInput;
```

### Signatures classiques

```typescript
// Type Guard predicate
function equal<
	GenericInput extends EligibleEqual | object,
	GenericInput extends Exclude<GenericInput, object>
>(
	input: GenericInput,
	value: ExpectLiteral<GenericInput> | ExpectLiteral<GenericInput>[]
): input is GenericInput;

// Boolean predicate
function equal<
	GenericInput extends EligibleEqual | object,
	GenericInput extends Exclude<GenericInput, object>
>(
	input: GenericInput,
	input: GenericInput | GenericInput[]
): boolean;
```

### Signatures currifiées

```typescript
// Type guard
function equal<
	GenericInput extends EligibleEqual | object,
	GenericInput extends Exclude<GenericInput, object>
>(
	value: ExpectLiteral<GenericInput> | ExpectLiteral<GenericInput>[]
): (input: GenericInput) => input is NoInfer<GenericInput>;

// Boolean predicate
function equal<
	GenericInput extends EligibleEqual | object,
	GenericInput extends Exclude<GenericInput, object>
>(
	input: GenericInput | GenericInput[]
): (input: GenericInput) => boolean;
```

## Paramètres

- `input` : Littéral ou tableau de littéraux autorisés.
- `input` (surcharge directe) : Valeur à comparer.

## Valeur de retour

Un booléen (ou un type guard pour les primitives) indiquant si l'entrée correspond à l'une des valeurs.

## Voir aussi

- [`isType`](/fr/v1/api/common/isType) - Type guard générique basé sur le type runtime
- [`instanceOf`](/fr/v1/api/common/instanceOf) - Vérifie une instance de constructeur
