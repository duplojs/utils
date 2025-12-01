---
outline: [2, 3]
prev:
  text: "optionalEmpty"
  link: "/v1/api/either/optionalEmpty/fr"
next:
  text: "isOptionalEmpty"
  link: "/v1/api/either/isOptionalEmpty/fr"
---

# optionalFilled

Construit un `EitherRight<"optional">` lorsque la valeur est définie.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/either/optionalFilled/examples/tryout.doc.ts"
  majorVersion="v1"
  height="240px"
/>

## Syntaxe

```ts
function optionalFilled<
	const GenericValue extends unknown
>(
  value: GenericValue
): EitherOptionalFilled<GenericValue>;
```

## Paramètres

- `value` : Valeur définie.

## Valeur de retour

`EitherOptionalFilled<GenericValue>`.

## Voir aussi

- [`optional`](/v1/api/either/optional/fr).
- [`whenIsOptionalFilled`](/v1/api/either/whenIsOptionalFilled/fr).
