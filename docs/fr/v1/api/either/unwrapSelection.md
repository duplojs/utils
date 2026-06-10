---
outline: [2, 3]
description: "Unwrap les payloads Either sélectionnés par un sélecteur exhaustif d'informations; sinon renvoie l'entrée originale inchangée."
prev:
  text: "unwrapByInformationOrThrow"
  link: "/fr/v1/api/either/unwrapByInformationOrThrow"
next:
  text: "unwrapSelectionOrThrow"
  link: "/fr/v1/api/either/unwrapSelectionOrThrow"
---

# unwrapSelection

Unwrap les payloads `Either` sélectionnés par un sélecteur exhaustif d'informations; sinon renvoie l'entrée originale inchangée.

Le sélecteur associe chaque information possible de l'union d'entrée à `true` ou `false`. Une entrée `true` unwrap le payload correspondant; une entrée `false` conserve l'`Either` original.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/either/unwrapSelection/tryout.doc.ts"
  majorVersion="v1"
  height="670px"
/>

## Syntaxe

### Signature classique

```typescript
function unwrapSelection<
  GenericInput extends unknown,
  GenericSelector extends Record<Information, boolean>,
>(
  input: GenericInput,
  selector: GenericSelector,
): UnwrappedSelectedInputs | UnselectedInputs
```

### Signature currifiée

```typescript
function unwrapSelection<
  GenericInput extends unknown,
  GenericSelector extends Record<Information, boolean>,
>(
  selector: GenericSelector,
): (input: GenericInput) => UnwrappedSelectedInputs | UnselectedInputs
```

## Paramètres

- `selector` : Objet exhaustif où chaque information possible de l'entrée est associée à `true` ou `false`.
- `input` : Valeur Either à unwrap immédiatement, ou plus tard via la forme currifiée.

## Valeur de retour

Retourne le payload unwrap quand l'information courante est sélectionnée avec `true`. Sinon, renvoie l'entrée originale inchangée.

Quand une entrée du sélecteur est typée `boolean`, le type de retour inclut les deux possibilités pour cette information.

## Voir aussi

- [`unwrapSelectionOrThrow`](/fr/v1/api/either/unwrapSelectionOrThrow) – Variante qui lève une erreur quand l'information courante n'est pas sélectionnée.
- [`matchInformation`](/fr/v1/api/either/matchInformation) – Matching exhaustif par information avec callbacks.
- [`unwrapByInformation`](/fr/v1/api/either/unwrapByInformation) – Sélectionne des informations depuis une string ou un tableau de strings.
