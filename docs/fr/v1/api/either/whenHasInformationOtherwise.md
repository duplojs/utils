---
outline: [2, 3]
description: "Exécute un callback pour les informations Either correspondantes et un callback otherwise pour toutes les entrées brutes restantes."
prev:
  text: "whenHasInformation"
  link: "/fr/v1/api/either/whenHasInformation"
next:
  text: "whenIsSelected"
  link: "/fr/v1/api/either/whenIsSelected"
---

# whenHasInformationOtherwise

Exécute un callback pour les informations Either correspondantes et un callback otherwise pour toutes les entrées brutes restantes.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/either/whenHasInformationOtherwise/tryout.doc.ts"
  majorVersion="v1"
  height="1027px"
/>

## Syntaxe

### Signature classique

```typescript
function whenHasInformationOtherwise<
  GenericInput,
  GenericInformation,
  GenericOutput,
  GenericOtherwiseOutput
>(
  input: GenericInput,
  information: GenericInformation | GenericInformation[],
  theFunction: (value: UnwrappedMatchingInput) => GenericOutput,
  otherwiseFunction: (value: Exclude<RawInput, MatchingInput>) => GenericOtherwiseOutput
): GenericOutput | GenericOtherwiseOutput;
```

### Signature currifiée

```typescript
function whenHasInformationOtherwise<
  GenericInput,
  GenericInformation,
  GenericOutput,
  GenericOtherwiseOutput
>(
  information: GenericInformation | GenericInformation[],
  theFunction: (value: UnwrappedMatchingInput) => GenericOutput,
  otherwiseFunction: (value: Exclude<RawInput, MatchingInput>) => GenericOtherwiseOutput
): (input: GenericInput) => GenericOutput | GenericOtherwiseOutput;
```

## Paramètres

- `information` : Information littérale ou tableau d'informations à rechercher.
- `theFunction` : Callback recevant le payload correspondant déballé.
- `otherwiseFunction` : Callback recevant l'entrée brute originale qui ne correspond pas.
- `input` : Valeur traitée immédiatement, ou plus tard avec la forme currifiée.

## Valeur de retour

Renvoie le résultat du callback correspondant lorsque la condition réussit ; sinon, renvoie le résultat de `otherwiseFunction`. Le callback otherwise reçoit toujours l'entrée brute originale.

## Voir aussi

- [`whenHasInformation`](/fr/v1/api/either/whenHasInformation) - Même condition sans callback otherwise explicite.
