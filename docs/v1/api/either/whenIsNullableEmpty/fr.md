---
outline: [2, 3]
prev:
  text: "isNullableEmpty"
  link: "/v1/api/either/isNullableEmpty/fr"
next:
  text: "isNullableFilled"
  link: "/v1/api/either/isNullableFilled/fr"
---

# whenIsNullableEmpty

Exécute un callback uniquement lorsque l'Either est `NullableEmpty`.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/either/whenIsNullableEmpty/examples/tryout.doc.ts"
  majorVersion="v1"
  height="260px"
/>

## Syntaxe

### Signature classique

```typescript
function whenIsNullableEmpty<
  const GenericInput extends unknown,
  const GenericOutput extends AnyValue | EscapeVoid
>(
  input: GenericInput,
  theFunction: (value: Unwrap<Extract<ToEither<GenericInput>, EitherNullableEmpty>>) => GenericOutput
): GenericOutput | Exclude<ToEither<GenericInput>, EitherNullableEmpty>;
```

### Signature currifiée

```typescript
function whenIsNullableEmpty<
  const GenericInput extends unknown,
  const GenericOutput extends AnyValue | EscapeVoid
>(
  theFunction: (value: Unwrap<Extract<ToEither<GenericInput>, EitherNullableEmpty>>) => GenericOutput
): (input: GenericInput) => GenericOutput | Exclude<ToEither<GenericInput>, EitherNullableEmpty>;
```

## Paramètres

- `theFunction` : Callback appelé lorsqu'il n'y a pas de valeur.
- `input` : Valeur/Either à traiter.

## Valeur de retour

Résultat du callback si `null`, sinon la valeur originale.

## Voir aussi

- [`whenIsNullableFilled`](/v1/api/either/whenIsNullableFilled/fr).
- [`nullable`](/v1/api/either/nullable/fr).
