---
outline: [2, 3]
description: "Exécute un callback pour les valeurs OptionalEmpty et un callback otherwise pour toutes les entrées brutes restantes."
prev:
  text: "whenIsOptionalEmpty"
  link: "/fr/v1/api/either/whenIsOptionalEmpty"
next:
  text: "isOptionalFilled"
  link: "/fr/v1/api/either/isOptionalFilled"
---

# whenIsOptionalEmptyOtherwise

Exécute un callback pour les valeurs OptionalEmpty et un callback otherwise pour toutes les entrées brutes restantes.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/either/whenIsOptionalEmptyOtherwise/tryout.doc.ts"
  majorVersion="v1"
  height="985px"
/>

## Syntaxe

### Signature classique

```typescript
function whenIsOptionalEmptyOtherwise<
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
function whenIsOptionalEmptyOtherwise<
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

- [`whenIsOptionalEmpty`](/fr/v1/api/either/whenIsOptionalEmpty) - Même condition sans callback otherwise explicite.
