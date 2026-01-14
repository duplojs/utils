---
outline: [2, 3]
description: "Applique un callback uniquement lorsque l'Either optionnel contient une valeur (OptionalFilled)."
prev:
  text: "isOptionalFilled"
  link: "/fr/v1/api/either/isOptionalFilled"
next:
  text: "future"
  link: "/fr/v1/api/either/future"
---

# whenIsOptionalFilled

Applique un callback uniquement lorsque l'Either optionnel contient une valeur (`OptionalFilled`).

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/either/whenIsOptionalFilled/tryout.doc.ts"
  majorVersion="v1"
  height="292px"
/>

## Syntaxe

### Signature classique

```typescript
function whenIsOptionalFilled<
  const GenericInput extends unknown,
  const GenericOutput extends AnyValue | EscapeVoid
>(
  input: GenericInput,
  theFunction: (value: Unwrap<Extract<ToEither<GenericInput>, EitherOptionalFilled>>) => GenericOutput
): GenericOutput | Exclude<ToEither<GenericInput>, EitherOptionalFilled>;
```

### Signature currifiée

```typescript
function whenIsOptionalFilled<
  const GenericInput extends unknown,
  const GenericOutput extends AnyValue | EscapeVoid
>(
  theFunction: (value: Unwrap<Extract<ToEither<GenericInput>, EitherOptionalFilled>>) => GenericOutput
): (input: GenericInput) => GenericOutput | Exclude<ToEither<GenericInput>, EitherOptionalFilled>;
```

## Paramètres

- `theFunction` : Callback exécuté quand la valeur est définie.
- `input` : Valeur/Either à traiter.

## Valeur de retour

Résultat du callback ou valeur originale si l'optionnel était vide.

## Voir aussi

- [`whenIsOptionalEmpty`](/fr/v1/api/either/whenIsOptionalEmpty).
- [`optional`](/fr/v1/api/either/optional).
