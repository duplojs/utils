---
outline: [2, 3]
description: "Applique une fonction uniquement lorsqu'un optional est vide (undefined)."
prev:
  text: "isOptionalEmpty"
  link: "/fr/v1/api/either/isOptionalEmpty"
next:
  text: "isOptionalFilled"
  link: "/fr/v1/api/either/isOptionalFilled"
---

# whenIsOptionalEmpty

Applique une fonction uniquement lorsqu'un `optional` est vide (`undefined`).

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/either/whenIsOptionalEmpty/tryout.doc.ts"
  majorVersion="v1"
  height="292px"
/>

## Syntaxe

### Signature classique

```typescript
function whenIsOptionalEmpty<
  const GenericInput extends unknown,
  const GenericOutput extends AnyValue | EscapeVoid
>(
  input: GenericInput,
  theFunction: (value: Unwrap<Extract<ToEither<GenericInput>, OptionalEmpty>>) => GenericOutput
): GenericOutput | Exclude<ToEither<GenericInput>, OptionalEmpty>;
```

### Signature currifiée

```typescript
function whenIsOptionalEmpty<
  const GenericInput extends unknown,
  const GenericOutput extends AnyValue | EscapeVoid
>(
  theFunction: (value: Unwrap<Extract<ToEither<GenericInput>, OptionalEmpty>>) => GenericOutput
): (input: GenericInput) => GenericOutput | Exclude<ToEither<GenericInput>, OptionalEmpty>;
```

## Paramètres

- `theFunction` : Callback exécuté si la valeur est `undefined`.
- `input` : Valeur/Either à analyser.

## Valeur de retour

Résultat du callback si vide, sinon valeur initiale.

## Voir aussi

- [`whenIsOptionalFilled`](/fr/v1/api/either/whenIsOptionalFilled).
- [`optional`](/fr/v1/api/either/optional).
