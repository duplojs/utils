---
outline: [2, 3]
prev:
  text: "isOptionalFilled"
  link: "/v1/api/either/isOptionalFilled/fr"
next:
  text: "future"
  link: "/v1/api/either/future/fr"
---

# whenIsOptionalFilled

Applique un callback uniquement lorsque l'Either optionnel contient une valeur (`OptionalFilled`).

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/either/whenIsOptionalFilled/examples/tryout.doc.ts"
  majorVersion="v1"
  height="260px"
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

- [`whenIsOptionalEmpty`](/v1/api/either/whenIsOptionalEmpty/fr).
- [`optional`](/v1/api/either/optional/fr).
