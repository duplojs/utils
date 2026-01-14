---
outline: [2, 3]
description: "Applique un callback uniquement quand l'Either est NullishEmpty."
prev:
  text: "isNullishEmpty"
  link: "/fr/v1/api/either/isNullishEmpty"
next:
  text: "isNullishFilled"
  link: "/fr/v1/api/either/isNullishFilled"
---

# whenIsNullishEmpty

Applique un callback uniquement quand l'Either est `NullishEmpty`.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/either/whenIsNullishEmpty/tryout.doc.ts"
  majorVersion="v1"
  height="292px"
/>

## Syntaxe

### Signature classique

```typescript
function whenIsNullishEmpty<
  const GenericInput extends unknown,
  const GenericOutput extends AnyValue | EscapeVoid
>(
  input: GenericInput,
  theFunction: (value: Unwrap<Extract<ToEither<GenericInput>, EitherNullishEmpty>>) => GenericOutput
): GenericOutput | Exclude<ToEither<GenericInput>, EitherNullishEmpty>;
```

### Signature currifiée

```typescript
function whenIsNullishEmpty<
  const GenericInput extends unknown,
  const GenericOutput extends AnyValue | EscapeVoid
>(
  theFunction: (value: Unwrap<Extract<ToEither<GenericInput>, EitherNullishEmpty>>) => GenericOutput
): (input: GenericInput) => GenericOutput | Exclude<ToEither<GenericInput>, EitherNullishEmpty>;
```

## Paramètres

- `theFunction` : Callback exécuté en cas d'absence.
- `input` : `Either` ou valeur compatible (optionnel en version currifiée).

## Valeur de retour

Résultat du callback si `NullishEmpty`, sinon la valeur originale.

## Voir aussi

- [`whenIsNullishFilled`](/fr/v1/api/either/whenIsNullishFilled).
- [`nullish`](/fr/v1/api/either/nullish).
