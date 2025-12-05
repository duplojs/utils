---
outline: [2, 3]
prev:
  text: "toTransform"
  link: "/v1/api/common/toTransform/fr"
next:
  text: "stringToMillisecond"
  link: "/v1/api/common/stringToMillisecond/fr"
---

# toString

La fonction **`toString()`** convertit un littéral (`number`, `string`, `bigint`, `boolean`, `null`, `undefined`) en template string typée.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/common/toString/examples/tryout.doc.ts"
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

- [`toJSON`](/v1/api/common/toJson/fr) - Prépare pour JSON
- [`stringToMillisecond`](/v1/api/common/stringToMillisecond/fr) - Parse des durées
