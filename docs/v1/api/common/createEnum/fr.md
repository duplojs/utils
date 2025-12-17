---
outline: [2, 3]
prev:
  text: "simpleClone"
  link: "/v1/api/common/simpleClone/fr"
next:
  text: "globalStore"
  link: "/v1/api/common/globalStore/fr"
---

# createEnum

La fonction **`createEnum()`** crée un enum string immuable et typé. L’objet retourné expose les clés/valeurs, la méthode `has` et `toTuple`.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/common/createEnum/examples/tryout.doc.ts"
  majorVersion="v1"
  height="600px"
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
};

function createEnum<
	GenericInput extends string,
	GenericInputs extends [GenericInput, ...GenericInput[]]
>(
	values: GenericInputs
): Enum<GenericInputs>;

type GetEnumValue<
	GenericEnum extends Enum<any>
> = ReturnType<GenericEnum["toTuple"]>[number];
```

## Paramètres

- `values` : Tuple non vide de chaînes (les membres de l’enum).

## Valeur de retour

Un objet enum immuable avec :
- Les propriétés nommées (clé/valeur identiques).
- `toTuple()` pour récupérer le tuple typé.
- `has(value)` pour tester une valeur runtime avec type guard.

## Voir aussi

- [`kind`](/v1/api/common/kind/fr) - Tags runtime/type
