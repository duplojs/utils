---
outline: [2, 3]
description: "Callback exécuté uniquement pour les valeurs BoolTruthy. Sinon, la valeur initiale est renvoyée."
prev:
  text: "isBoolTruthy"
  link: "/fr/v1/api/either/isBoolTruthy"
next:
  text: "isBoolFalsy"
  link: "/fr/v1/api/either/isBoolFalsy"
---

# whenIsBoolTruthy

Callback exécuté uniquement pour les valeurs `BoolTruthy`. Sinon, la valeur initiale est renvoyée.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/either/whenIsBoolTruthy/tryout.doc.ts"
  majorVersion="v1"
  height="292px"
/>

## Syntaxe

### Signature classique

```typescript
function whenIsBoolTruthy<
  const GenericInput extends unknown,
  const GenericOutput extends AnyValue | EscapeVoid
>(
  input: GenericInput,
  theFunction: (value: Unwrap<Extract<ToEither<GenericInput>, BoolTruthy>>) => GenericOutput
): GenericOutput | Exclude<ToEither<GenericInput>, BoolTruthy>;
```

### Signature currifiée

```typescript
function whenIsBoolTruthy<
  const GenericInput extends unknown,
  const GenericOutput extends AnyValue | EscapeVoid
>(
  theFunction: (value: Unwrap<Extract<ToEither<GenericInput>, BoolTruthy>>) => GenericOutput
): (input: GenericInput) => GenericOutput | Exclude<ToEither<GenericInput>, BoolTruthy>;
```

## Paramètres

- `theFunction` : Fonction exécutée seulement quand la valeur est truthy.
- `input` : Valeur ou `Either` à traiter (optionnel dans la version currifiée).

## Valeur de retour

Le résultat de `theFunction` pour les truthy, sinon la valeur originale (`BoolFalsy`).

## Voir aussi

- [`whenIsBoolFalsy`](/fr/v1/api/either/whenIsBoolFalsy).
- [`bool`](/fr/v1/api/either/bool) – Pour générer la source truthy/falsy.
