---
outline: [2, 3]
prev:
  text: "toTransform"
  link: "/fr/v1/api/common/toTransform"
next:
  text: "stringToMillisecond"
  link: "/fr/v1/api/common/stringToMillisecond"
---

# toString

La fonction **`toString()`** convertit un littéral (`number`, `string`, `bigint`, `boolean`, `null`, `undefined`) en template string typée.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/common/toString/tryout.doc.ts"
  majorVersion="v1"
  height="200px"
/>

## Syntaxe

```typescript
function toString<
	GenericInput extends number | string | bigint | boolean | null | undefined
>(
	input: GenericInput
): `${GenericInput}`;
```

## Paramètres

- `input` : Littéral à convertir en chaîne typée.

## Valeur de retour

Une chaîne littérale typée correspondant exactement à la valeur fournie.

## Voir aussi

- [`toJSON`](/fr/v1/api/common/toJSON) - Prépare pour JSON
- [`stringToMillisecond`](/fr/v1/api/common/stringToMillisecond) - Parse des durées
