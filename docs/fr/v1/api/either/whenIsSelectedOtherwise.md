---
outline: [2, 3]
description: "Exécute un callback pour les informations Either sélectionnées et un callback otherwise pour toutes les entrées brutes non sélectionnées."
prev:
  text: "whenIsSelected"
  link: "/fr/v1/api/either/whenIsSelected"
next:
  text: "matchInformation"
  link: "/fr/v1/api/either/matchInformation"
---

# whenIsSelectedOtherwise

Exécute un callback pour les informations Either sélectionnées et un callback otherwise pour toutes les entrées brutes non sélectionnées.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/either/whenIsSelectedOtherwise/tryout.doc.ts"
  majorVersion="v1"
  height="1132px"
/>

## Syntaxe

### Signature classique

```typescript
function whenIsSelectedOtherwise<
  GenericInput,
  GenericSelector,
  GenericOutput,
  GenericOtherwiseOutput
>(
  input: GenericInput,
  selector: GenericSelector,
  theFunction: (value: UnwrappedMatchingInput) => GenericOutput,
  otherwiseFunction: (value: Exclude<RawInput, MatchingInput>) => GenericOtherwiseOutput
): GenericOutput | GenericOtherwiseOutput;
```

### Signature currifiée

```typescript
function whenIsSelectedOtherwise<
  GenericInput,
  GenericSelector,
  GenericOutput,
  GenericOtherwiseOutput
>(
  selector: GenericSelector,
  theFunction: (value: UnwrappedMatchingInput) => GenericOutput,
  otherwiseFunction: (value: Exclude<RawInput, MatchingInput>) => GenericOtherwiseOutput
): (input: GenericInput) => GenericOutput | GenericOtherwiseOutput;
```

## Paramètres

- `selector` : Objet exhaustif associant `true` ou `false` à chaque information possible.
- `theFunction` : Callback recevant un payload sélectionné et déballé.
- `otherwiseFunction` : Callback recevant l'entrée brute originale non sélectionnée.
- `input` : Valeur traitée immédiatement, ou plus tard avec la forme currifiée.

## Valeur de retour

Renvoie le résultat du callback correspondant lorsque la condition réussit ; sinon, renvoie le résultat de `otherwiseFunction`. Le callback otherwise reçoit toujours l'entrée brute originale.

## Voir aussi

- [`whenIsSelected`](/fr/v1/api/either/whenIsSelected) - Même condition sans callback otherwise explicite.
