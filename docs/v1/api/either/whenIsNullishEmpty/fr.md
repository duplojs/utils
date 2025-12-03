---
outline: [2, 3]
prev:
  text: "isNullishEmpty"
  link: "/v1/api/either/isNullishEmpty/fr"
next:
  text: "isNullishFilled"
  link: "/v1/api/either/isNullishFilled/fr"
---

# whenIsNullishEmpty

Applique un callback uniquement quand l'Either est `NullishEmpty`.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/either/whenIsNullishEmpty/examples/tryout.doc.ts"
  majorVersion="v1"
  height="300px"
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

- [`whenIsNullishFilled`](/v1/api/either/whenIsNullishFilled/fr).
- [`nullish`](/v1/api/either/nullish/fr).
