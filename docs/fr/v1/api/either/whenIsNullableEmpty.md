---
outline: [2, 3]
description: "Exécute un callback uniquement lorsque l'Either est NullableEmpty."
prev:
  text: "isNullableEmpty"
  link: "/fr/v1/api/either/isNullableEmpty"
next:
  text: "isNullableFilled"
  link: "/fr/v1/api/either/isNullableFilled"
---

# whenIsNullableEmpty

Exécute un callback uniquement lorsque l'Either est `NullableEmpty`.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/either/whenIsNullableEmpty/tryout.doc.ts"
  majorVersion="v1"
  height="292px"
/>

## Syntaxe

### Signature classique

```typescript
function whenIsNullableEmpty<
  const GenericInput extends unknown,
  const GenericOutput extends AnyValue | EscapeVoid
>(
  input: GenericInput,
  theFunction: (value: Unwrap<Extract<ToEither<GenericInput>, NullableEmpty>>) => GenericOutput
): GenericOutput | Exclude<ToEither<GenericInput>, NullableEmpty>;
```

### Signature currifiée

```typescript
function whenIsNullableEmpty<
  const GenericInput extends unknown,
  const GenericOutput extends AnyValue | EscapeVoid
>(
  theFunction: (value: Unwrap<Extract<ToEither<GenericInput>, NullableEmpty>>) => GenericOutput
): (input: GenericInput) => GenericOutput | Exclude<ToEither<GenericInput>, NullableEmpty>;
```

## Paramètres

- `theFunction` : Callback appelé lorsqu'il n'y a pas de valeur.
- `input` : Valeur/Either à traiter.

## Valeur de retour

Résultat du callback si `null`, sinon la valeur originale.

## Voir aussi

- [`whenIsNullableFilled`](/fr/v1/api/either/whenIsNullableFilled).
- [`nullable`](/fr/v1/api/either/nullable).
