---
outline: [2, 3]
description: "Construit un Right<\"nullable\"> pour une valeur non nulle."
prev:
  text: "nullableEmpty"
  link: "/fr/v1/api/either/nullableEmpty"
next:
  text: "isNullableEmpty"
  link: "/fr/v1/api/either/isNullableEmpty"
---

# nullableFilled

Construit un `Right<"nullable">` pour une valeur non nulle.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/either/nullableFilled/tryout.doc.ts"
  majorVersion="v1"
  height="229px"
/>

## Syntaxe

```typescript
function nullableFilled<
	const GenericInput extends unknown
>(
  input: GenericInput
): NullableFilled<GenericInput>;
```

## Paramètres

- `input` : Valeur définie.

## Valeur de retour

Un `NullableFilled` représentant l'état « présent ».

## Voir aussi

- [`nullable`](/fr/v1/api/either/nullable).
- [`whenIsNullableFilled`](/fr/v1/api/either/whenIsNullableFilled).
