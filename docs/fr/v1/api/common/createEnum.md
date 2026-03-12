---
outline: [2, 3]
description: "La fonction createEnum() crée un enum string immuable et typé avec membres clé/valeur, has(), toTuple() et contract()."
prev:
  text: "simpleClone"
  link: "/fr/v1/api/common/simpleClone"
next:
  text: "createTransformer"
  link: "/fr/v1/api/common/createTransformer"
---

# createEnum

La fonction **`createEnum()`** crée un enum string immuable et typé. L’objet retourné expose chaque valeur comme clé, ainsi que `has()`, `toTuple()` et `contract()`.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/common/createEnum/tryout.doc.ts"
  majorVersion="v1"
  height="817px"
/>

## Syntaxe

```typescript
type Enum<
	GenericInputs extends [string, ...string[]]
> = {
	[Prop in GenericInputs[number]]: Prop;
} & {
	toTuple(): GenericInputs;
	has(value: string): value is GenericInputs[number];
	contract<
		GenericContractValue extends GenericInputs[number]
	>(
		...args: ...
	): Enum<GenericInputs>;
};

function createEnum<
	GenericInput extends string,
	GenericInputs extends [GenericInput, ...GenericInput[]]
>(
	values: GenericInputs
): Enum<GenericInputs>;

type GetEnumValue<
	GenericEnum extends { toTuple(): [string, ...string[]] }
> = ReturnType<GenericEnum["toTuple"]>[number];
```

## Paramètres

- `values` : Tuple non vide de chaînes (les membres de l’enum).

## Valeur de retour

Un objet enum immuable avec :
- Les propriétés nommées (clé/valeur identiques).
- `toTuple()` pour récupérer le tuple typé.
- `has(value)` pour tester une valeur runtime avec type guard.
- `contract<...>()` pour vérifier au niveau des types que l’enum correspond exactement à une union attendue.

## Voir aussi

- [`kind`](/fr/v1/api/common/kind) - Tags runtime/type
