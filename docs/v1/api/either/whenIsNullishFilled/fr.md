---
outline: [2, 3]
prev:
  text: "isNullishFilled"
  link: "/v1/api/either/isNullishFilled/fr"
next:
  text: "nullable"
  link: "/v1/api/either/nullable/fr"
---

# whenIsNullishFilled

Exécute un callback uniquement lorsque l'Either contient une valeur définie (`NullishFilled`).

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/either/whenIsNullishFilled/examples/tryout.doc.ts"
  majorVersion="v1"
  height="260px"
/>

## Syntaxe

### Signature classique

```ts
function whenIsNullishFilled<
  const GenericInput extends unknown,
  const GenericOutput extends AnyValue | EscapeVoid
>(
  input: GenericInput,
  theFunction: (value: Unwrap<Extract<ToEither<GenericInput>, EitherNullishFilled>>) => GenericOutput
): GenericOutput | Exclude<ToEither<GenericInput>, EitherNullishFilled>;
```

### Signature currifiée

```ts
function whenIsNullishFilled<
  const GenericInput extends unknown,
  const GenericOutput extends AnyValue | EscapeVoid
>(
  theFunction: (value: Unwrap<Extract<ToEither<GenericInput>, EitherNullishFilled>>) => GenericOutput
): (input: GenericInput) => GenericOutput | Exclude<ToEither<GenericInput>, EitherNullishFilled>;
```

## Paramètres

- `theFunction` : Callback appliqué quand la valeur est présente.
- `input` : Valeur/Either à traiter.

## Valeur de retour

Résultat du callback ou valeur originale si l'Either était `NullishEmpty`.

## Voir aussi

- [`whenIsNullishEmpty`](/v1/api/either/whenIsNullishEmpty/fr).
- [`nullish`](/v1/api/either/nullish/fr).
