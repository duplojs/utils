---
outline: [2, 3]
description: "Applique un callback uniquement lorsque la valeur booléenne est falsy."
prev:
  text: "isBoolFalsy"
  link: "/fr/v1/api/either/isBoolFalsy"
next:
  text: "nullish"
  link: "/fr/v1/api/either/nullish"
---

# whenIsBoolFalsy

Applique un callback uniquement lorsque la valeur booléenne est falsy.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/either/whenIsBoolFalsy/tryout.doc.ts"
  majorVersion="v1"
  height="292px"
/>

## Syntaxe

### Signature classique

```typescript
function whenIsBoolFalsy<
  const GenericInput extends unknown,
  const GenericOutput extends AnyValue | EscapeVoid
>(
  input: GenericInput,
  theFunction: (value: Unwrap<Extract<ToEither<GenericInput>, BoolFalsy>>) => GenericOutput
): GenericOutput | Exclude<ToEither<GenericInput>, BoolFalsy>;
```

### Signature currifiée

```typescript
function whenIsBoolFalsy<
  const GenericInput extends unknown,
  const GenericOutput extends AnyValue | EscapeVoid
>(
  theFunction: (value: Unwrap<Extract<ToEither<GenericInput>, BoolFalsy>>) => GenericOutput
): (input: GenericInput) => GenericOutput | Exclude<ToEither<GenericInput>, BoolFalsy>;
```

## Paramètres

- `theFunction` : Callback exécuté quand la valeur est falsy.
- `input` : Entrée immédiate (optionnelle en version currifiée).

## Valeur de retour

Résultat du callback pour les falsy, sinon la valeur truthy originale.

## Voir aussi

- [`whenIsBoolTruthy`](/fr/v1/api/either/whenIsBoolTruthy).
- [`bool`](/fr/v1/api/either/bool).
