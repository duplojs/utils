---
outline: [2, 3]
prev:
  text: "nullishEmpty"
  link: "/v1/api/either/nullishEmpty/fr"
next:
  text: "isNullishEmpty"
  link: "/v1/api/either/isNullishEmpty/fr"
---

# nullishFilled

Construit un `EitherRight<"nullish">` avec une valeur non-nulle/non-undefined.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/either/nullishFilled/examples/tryout.doc.ts"
  majorVersion="v1"
  height="240px"
/>

## Syntaxe

```ts
function nullishFilled<
	const GenericValue extends unknown
>(
  value: GenericValue
): EitherNullishFilled<GenericValue>;
```

## Paramètres

- `value` : Valeur définie.

## Valeur de retour

`EitherNullishFilled<GenericValue>` représentant un cas « présent ».

## Voir aussi

- [`nullish`](/v1/api/either/nullish/fr).
- [`whenIsNullishFilled`](/v1/api/either/whenIsNullishFilled/fr).
