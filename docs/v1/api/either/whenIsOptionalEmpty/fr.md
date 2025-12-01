---
outline: [2, 3]
prev:
  text: "isOptionalEmpty"
  link: "/v1/api/either/isOptionalEmpty/fr"
next:
  text: "isOptionalFilled"
  link: "/v1/api/either/isOptionalFilled/fr"
---

# whenIsOptionalEmpty

Applique une fonction uniquement lorsqu'un `optional` est vide (`undefined`).

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/either/whenIsOptionalEmpty/examples/tryout.doc.ts"
  majorVersion="v1"
  height="260px"
/>

## Syntaxe

### Signature classique

```ts
function whenIsOptionalEmpty<
  const GenericInput extends unknown,
  const GenericOutput extends AnyValue | EscapeVoid
>(
  input: GenericInput,
  theFunction: (value: Unwrap<Extract<ToEither<GenericInput>, EitherOptionalEmpty>>) => GenericOutput
): GenericOutput | Exclude<ToEither<GenericInput>, EitherOptionalEmpty>;
```

### Signature currifiée

```ts
function whenIsOptionalEmpty<
  const GenericInput extends unknown,
  const GenericOutput extends AnyValue | EscapeVoid
>(
  theFunction: (value: Unwrap<Extract<ToEither<GenericInput>, EitherOptionalEmpty>>) => GenericOutput
): (input: GenericInput) => GenericOutput | Exclude<ToEither<GenericInput>, EitherOptionalEmpty>;
```

## Paramètres

- `theFunction` : Callback exécuté si la valeur est `undefined`.
- `input` : Valeur/Either à analyser.

## Valeur de retour

Résultat du callback si vide, sinon valeur initiale.

## Voir aussi

- [`whenIsOptionalFilled`](/v1/api/either/whenIsOptionalFilled/fr).
- [`optional`](/v1/api/either/optional/fr).
