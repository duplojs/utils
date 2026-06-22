---
outline: [2, 3]
description: "Exécute un callback sur les payloads Either sélectionnés par un sélecteur exhaustif d'informations et relaie les autres entrées inchangées."
prev:
  text: "whenHasInformationOtherwise"
  link: "/fr/v1/api/either/whenHasInformationOtherwise"
next:
  text: "whenIsSelectedOtherwise"
  link: "/fr/v1/api/either/whenIsSelectedOtherwise"
---

# whenIsSelected

Exécute un callback sur les payloads `Either` sélectionnés par un sélecteur exhaustif d'informations et relaie les autres entrées inchangées.

Le sélecteur associe chaque information possible de l'union d'entrée à `true` ou `false`. Une entrée `true` exécute le callback avec le payload unwrap ; une entrée `false` conserve l'`Either` original.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/either/whenIsSelected/tryout.doc.ts"
  majorVersion="v1"
  height="817px"
/>

## Syntaxe

### Signature classique

```typescript
function whenIsSelected<
  GenericInput extends unknown,
  GenericSelector extends Record<Information, boolean>,
  GenericOutput,
>(
  input: GenericInput,
  selector: GenericSelector,
  theFunction: (value: UnwrappedSelectedInputs) => GenericOutput,
): GenericOutput | UnselectedInputs
```

### Signature currifiée

```typescript
function whenIsSelected<
  GenericInput extends unknown,
  GenericSelector extends Record<Information, boolean>,
  GenericOutput,
>(
  selector: GenericSelector,
  theFunction: (value: UnwrappedSelectedInputs) => GenericOutput,
): (input: GenericInput) => GenericOutput | UnselectedInputs
```

## Paramètres

- `selector` : Objet exhaustif associant chaque information possible de l'entrée à `true` ou `false`.
- `theFunction` : Callback recevant le payload unwrap des informations sélectionnées.
- `input` : Valeur à traiter immédiatement, ou plus tard via la forme currifiée.

## Valeur de retour

Retourne le résultat du callback lorsque l'information courante est sélectionnée avec `true`. Sinon, renvoie l'entrée originale inchangée.

Quand une entrée du sélecteur est typée `boolean`, le type de retour inclut à la fois le résultat du callback et l'`Either` original pour cette information.

## Voir aussi

- [`whenHasInformation`](/fr/v1/api/either/whenHasInformation) - Sélectionne une ou plusieurs informations sans sélecteur exhaustif.
- [`unwrapSelection`](/fr/v1/api/either/unwrapSelection) - Unwrap les payloads sélectionnés sans appliquer de callback.
- [`matchInformation`](/fr/v1/api/either/matchInformation) - Matching exhaustif par information avec callbacks.
