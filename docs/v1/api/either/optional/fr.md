---
outline: [2, 3]
prev:
  text: "whenIsNullableFilled"
  link: "/v1/api/either/whenIsNullableFilled/fr"
next:
  text: "optionalEmpty"
  link: "/v1/api/either/optionalEmpty/fr"
---

# optional

Encapsule une valeur `undefined`/définie dans un `Either`, utile pour propager les champs optionnels.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/either/optional/examples/tryout.doc.ts"
  majorVersion="v1"
  height="260px"
/>

## Syntaxe

```ts
function optional<
	const GenericValue extends unknown = undefined
>(
  value: GenericValue
): GenericValue extends undefined
  ? EitherOptionalEmpty
  : EitherOptionalFilled<GenericValue>;
```

## Paramètres

- `value` : Peut être `undefined` ou une valeur concrète.

## Valeur de retour

- `EitherOptionalFilled` si la valeur est définie.
- `EitherOptionalEmpty` sinon.

## Voir aussi

- [`optionalEmpty`](/v1/api/either/optionalEmpty/fr).
- [`optionalFilled`](/v1/api/either/optionalFilled/fr).
