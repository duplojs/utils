---
outline: [2, 3]
prev:
  text: "isNullableFilled"
  link: "/v1/api/either/isNullableFilled/fr"
next:
  text: "optional"
  link: "/v1/api/either/optional/fr"
---

# whenIsNullableFilled

Applique une fonction uniquement lorsque l'Either nullable contient une valeur (`NullableFilled`).

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/either/whenIsNullableFilled/examples/tryout.doc.ts"
  majorVersion="v1"
  height="260px"
/>

## Syntaxe

### Signature classique

```typescript
function whenIsNullableFilled<
  const GenericInput extends unknown,
  const GenericOutput extends AnyValue | EscapeVoid
>(
  input: GenericInput,
  theFunction: (value: Unwrap<Extract<ToEither<GenericInput>, EitherNullableFilled>>) => GenericOutput
): GenericOutput | Exclude<ToEither<GenericInput>, EitherNullableFilled>;
```

### Signature currifiée

```typescript
function whenIsNullableFilled<
  const GenericInput extends unknown,
  const GenericOutput extends AnyValue | EscapeVoid
>(
  theFunction: (value: Unwrap<Extract<ToEither<GenericInput>, EitherNullableFilled>>) => GenericOutput
): (input: GenericInput) => GenericOutput | Exclude<ToEither<GenericInput>, EitherNullableFilled>;
```

## Paramètres

- `theFunction` : Callback exécuté lorsque la valeur est présente.
- `input` : Valeur/Either à inspecter.

## Valeur de retour

Résultat du callback si la valeur existe, sinon la valeur initiale (`NullableEmpty`).

## Voir aussi

- [`whenIsNullableEmpty`](/v1/api/either/whenIsNullableEmpty/fr).
- [`nullable`](/v1/api/either/nullable/fr).
