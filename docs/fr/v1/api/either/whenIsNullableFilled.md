---
outline: [2, 3]
description: "Applique une fonction uniquement lorsque l'Either nullable contient une valeur (NullableFilled)."
prev:
  text: "isNullableFilled"
  link: "/fr/v1/api/either/isNullableFilled"
next:
  text: "optional"
  link: "/fr/v1/api/either/optional"
---

# whenIsNullableFilled

Applique une fonction uniquement lorsque l'Either nullable contient une valeur (`NullableFilled`).

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/either/whenIsNullableFilled/tryout.doc.ts"
  majorVersion="v1"
  height="292px"
/>

## Syntaxe

### Signature classique

```typescript
function whenIsNullableFilled<
  const GenericInput extends unknown,
  const GenericOutput extends AnyValue | EscapeVoid
>(
  input: GenericInput,
  theFunction: (value: Unwrap<Extract<ToEither<GenericInput>, NullableFilled>>) => GenericOutput
): GenericOutput | Exclude<ToEither<GenericInput>, NullableFilled>;
```

### Signature currifiée

```typescript
function whenIsNullableFilled<
  const GenericInput extends unknown,
  const GenericOutput extends AnyValue | EscapeVoid
>(
  theFunction: (value: Unwrap<Extract<ToEither<GenericInput>, NullableFilled>>) => GenericOutput
): (input: GenericInput) => GenericOutput | Exclude<ToEither<GenericInput>, NullableFilled>;
```

## Paramètres

- `theFunction` : Callback exécuté lorsque la valeur est présente.
- `input` : Valeur/Either à inspecter.

## Valeur de retour

Résultat du callback si la valeur existe, sinon la valeur initiale (`NullableEmpty`).

## Voir aussi

- [`whenIsNullableEmpty`](/fr/v1/api/either/whenIsNullableEmpty).
- [`nullable`](/fr/v1/api/either/nullable).
