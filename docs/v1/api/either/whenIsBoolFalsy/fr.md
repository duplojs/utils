---
outline: [2, 3]
prev:
  text: "isBoolFalsy"
  link: "/v1/api/either/isBoolFalsy/fr"
next:
  text: "nullish"
  link: "/v1/api/either/nullish/fr"
---

# whenIsBoolFalsy

Applique un callback uniquement lorsque la valeur booléenne est falsy.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/either/whenIsBoolFalsy/examples/tryout.doc.ts"
  majorVersion="v1"
  height="260px"
/>

## Syntaxe

### Signature classique

```ts
function whenIsBoolFalsy<
  const GenericInput extends unknown,
  const GenericOutput extends AnyValue | EscapeVoid
>(
  input: GenericInput,
  theFunction: (value: Unwrap<Extract<ToEither<GenericInput>, EitherBoolFalsy>>) => GenericOutput
): GenericOutput | Exclude<ToEither<GenericInput>, EitherBoolFalsy>;
```

### Signature currifiée

```ts
function whenIsBoolFalsy<
  const GenericInput extends unknown,
  const GenericOutput extends AnyValue | EscapeVoid
>(
  theFunction: (value: Unwrap<Extract<ToEither<GenericInput>, EitherBoolFalsy>>) => GenericOutput
): (input: GenericInput) => GenericOutput | Exclude<ToEither<GenericInput>, EitherBoolFalsy>;
```

## Paramètres

- `theFunction` : Callback exécuté quand la valeur est falsy.
- `input` : Entrée immédiate (optionnelle en version currifiée).

## Valeur de retour

Résultat du callback pour les falsy, sinon la valeur truthy originale.

## Voir aussi

- [`whenIsBoolTruthy`](/v1/api/either/whenIsBoolTruthy/fr).
- [`bool`](/v1/api/either/bool/fr).
