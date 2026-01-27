---
outline: [2, 3]
description: "Construit explicitement un Left<\"nullish\"> avec null ou undefined."
prev:
  text: "nullish"
  link: "/fr/v1/api/either/nullish"
next:
  text: "nullishFilled"
  link: "/fr/v1/api/either/nullishFilled"
---

# nullishEmpty

Construit explicitement un `Left<"nullish">` avec `null` ou `undefined`.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/either/nullishEmpty/tryout.doc.ts"
  majorVersion="v1"
  height="229px"
/>

## Syntaxe

```typescript
function nullishEmpty<
	const GenericInput extends NullishValue = undefined
>(
  value?: GenericInput
): NullishEmpty<GenericInput>;
```

## Paramètres

- `input` : `null` ou `undefined` (optionnel).

## Valeur de retour

`NullishEmpty<GenericInput>` permettant de signaler explicitement l'absence de valeur.

## Voir aussi

- [`whenIsNullishEmpty`](/fr/v1/api/either/whenIsNullishEmpty).
- [`nullishFilled`](/fr/v1/api/either/nullishFilled).
