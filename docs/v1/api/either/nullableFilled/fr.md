---
outline: [2, 3]
prev:
  text: "nullableEmpty"
  link: "/v1/api/either/nullableEmpty/fr"
next:
  text: "isNullableEmpty"
  link: "/v1/api/either/isNullableEmpty/fr"
---

# nullableFilled

Construit un `EitherRight<"nullable">` pour une valeur non nulle.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/either/nullableFilled/examples/tryout.doc.ts"
  majorVersion="v1"
  height="240px"
/>

## Syntaxe

```typescript
function nullableFilled<
	const GenericValue extends unknown
>(
  value: GenericValue
): EitherNullableFilled<GenericValue>;
```

## Paramètres

- `value` : Valeur définie.

## Valeur de retour

Un `EitherNullableFilled` représentant l'état « présent ».

## Voir aussi

- [`nullable`](/v1/api/either/nullable/fr).
- [`whenIsNullableFilled`](/v1/api/either/whenIsNullableFilled/fr).
