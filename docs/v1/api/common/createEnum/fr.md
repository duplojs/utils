---
outline: [2, 3]
prev:
  text: "simpleClone"
  link: "/v1/api/common/simpleClone/fr"
next:
  text: "Common"
  link: "/v1/api/common/fr"
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
	GenericValues extends [string, ...string[]]
> = {
	[Prop in GenericValues[number]]: Prop;
} & {
	toTuple(): GenericValues;
	has(value: string): value is GenericValues[number];
};

function createEnum<
	GenericValue extends string,
	GenericValues extends [GenericValue, ...GenericValue[]]
>(
	values: GenericValues
): Enum<GenericValues>;

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
