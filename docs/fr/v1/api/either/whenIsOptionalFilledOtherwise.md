---
outline: [2, 3]
description: "Exécute un callback pour les valeurs OptionalFilled et un callback otherwise pour toutes les entrées brutes restantes."
prev:
  text: "whenIsOptionalFilled"
  link: "/fr/v1/api/either/whenIsOptionalFilled"
next:
  text: "future"
  link: "/fr/v1/api/either/future"
---

# whenIsOptionalFilledOtherwise

Exécute un callback pour les valeurs OptionalFilled et un callback otherwise pour toutes les entrées brutes restantes.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/either/whenIsOptionalFilledOtherwise/tryout.doc.ts"
  majorVersion="v1"
  height="985px"
/>

## Syntaxe

### Signature classique

```typescript
function whenIsOptionalFilledOtherwise<
  GenericInput,
  GenericOutput,
  GenericOtherwiseOutput
>(
  input: GenericInput,
  theFunction: (value: UnwrappedMatchingInput) => GenericOutput,
  otherwiseFunction: (value: Exclude<RawInput, MatchingInput>) => GenericOtherwiseOutput
): GenericOutput | GenericOtherwiseOutput;
```

### Signature currifiée

```typescript
function whenIsOptionalFilledOtherwise<
  GenericInput,
  GenericOutput,
  GenericOtherwiseOutput
>(
  theFunction: (value: UnwrappedMatchingInput) => GenericOutput,
  otherwiseFunction: (value: Exclude<RawInput, MatchingInput>) => GenericOtherwiseOutput
): (input: GenericInput) => GenericOutput | GenericOtherwiseOutput;
```

## Paramètres

- `theFunction` : Callback recevant la valeur déballée lorsque la condition correspond.
- `otherwiseFunction` : Callback recevant l'entrée brute originale lorsque la condition ne correspond pas.
- `input` : Valeur brute ou Either traité immédiatement, ou plus tard avec la forme currifiée.

## Valeur de retour

Renvoie le résultat du callback correspondant lorsque la condition réussit ; sinon, renvoie le résultat de `otherwiseFunction`. Le callback otherwise reçoit toujours l'entrée brute originale.

## Voir aussi

- [`whenIsOptionalFilled`](/fr/v1/api/either/whenIsOptionalFilled) - Même condition sans callback otherwise explicite.
