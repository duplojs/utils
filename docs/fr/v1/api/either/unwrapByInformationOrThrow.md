---
outline: [2, 3]
description: "Unwrap le payload d'un Either uniquement lorsque l'information littérale attendue correspond, sinon lève une HasNotInformationError."
prev:
  text: "matchInformationOtherwise"
  link: "/fr/v1/api/either/matchInformationOtherwise"
next:
  text: "expect"
  link: "/fr/v1/api/either/expect"
---

# unwrapByInformationOrThrow

Unwrap le payload d'un `Either` uniquement lorsque l'information littérale attendue correspond, sinon lève une `HasNotInformationError`.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/either/unwrapByInformationOrThrow/tryout.doc.ts"
  majorVersion="v1"
  height="397px"
/>

## Syntaxe

### Signature classique

```typescript
function unwrapByInformationOrThrow<
  GenericInput extends unknown,
  GenericInformation extends ReturnType<typeof informationKind.getValue<GenericInput>>
>(
  input: GenericInput,
  information: GenericInformation
): Unwrap<Extract<GenericInput, Kind<typeof informationKind.definition, GenericInformation>>>
```

### Signature currifiée

```typescript
function unwrapByInformationOrThrow<
  GenericInformation extends string
>(
  information: GenericInformation
): <GenericInput extends unknown>(
  input: GenericInput
) => Unwrap<Extract<GenericInput, Kind<typeof informationKind.definition, GenericInformation>>>
```

## Paramètres

- `information` : Information littérale attendue.
- `input` : Valeur `Either` à unwrap immédiatement, ou plus tard via la forme currifiée.

## Valeur de retour

Retourne le payload unwrap lorsque l'information correspond. Sinon, la fonction lève `E.HasNotInformationError`.

## Voir aussi

- [`hasInformation`](/fr/v1/api/either/hasInformation) – Contrôle non bloquant sur l'information littérale.
- [`whenHasInformation`](/fr/v1/api/either/whenHasInformation) – Variante à callback.
- [`unwrapRightOrThrow`](/fr/v1/api/either/unwrapRightOrThrow) / [`unwrapLeftOrThrow`](/fr/v1/api/either/unwrapLeftOrThrow) – Helpers d'unwrap orientés par côté.
