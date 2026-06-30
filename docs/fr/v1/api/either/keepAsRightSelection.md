---
outline: [2, 3]
description: "Conserve les informations Either sélectionnées côté Right via un sélecteur exhaustif."
prev:
  text: "keepAsRightByInformation"
  link: "/fr/v1/api/either/keepAsRightByInformation"
next:
  text: "unwrapByInformation"
  link: "/fr/v1/api/either/unwrapByInformation"
---

# keepAsRightSelection

Conserve les informations `Either` sélectionnées côté `Right` via un sélecteur exhaustif.

Le sélecteur associe chaque information possible de l'union d'entrée à `true` ou `false`. Une entrée `true` conserve ou convertit l'entrée correspondante en `Right`; une entrée `false` la conserve ou la convertit en `Left`.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/either/keepAsRightSelection/tryout.doc.ts"
  majorVersion="v1"
  height="712px"
/>

## Syntaxe

### Signature classique

```typescript
function keepAsRightSelection<
  GenericInput extends unknown,
  GenericSelector extends Record<Information, boolean>,
>(
  input: GenericInput,
  selector: GenericSelector,
): KeptAsRightOrLeftInput
```

### Signature currifiée

```typescript
function keepAsRightSelection<
  GenericInput extends unknown,
  GenericSelector extends Record<Information, boolean>,
>(
  selector: GenericSelector,
): (input: GenericInput) => KeptAsRightOrLeftInput
```

## Paramètres

- `selector` : Objet exhaustif où chaque information possible de l'entrée est associée à `true` ou `false`.
- `input` : Valeur Either à normaliser immédiatement, ou plus tard via la forme currifiée.

## Valeur de retour

Retourne un `Right` quand l'information courante est sélectionnée avec `true`, en convertissant un `Left` correspondant si nécessaire. Retourne un `Left` quand l'information courante est sélectionnée avec `false`, en convertissant un `Right` correspondant si nécessaire. Les valeurs non-`Either` sont renvoyées inchangées.

Quand une entrée du sélecteur est typée `boolean`, le type de retour inclut les deux classifications possibles pour cette information.

## Voir aussi

- [`keepAsRightByInformation`](/fr/v1/api/either/keepAsRightByInformation) – Sélectionne des informations depuis une string ou un tableau de strings.
- [`unwrapSelection`](/fr/v1/api/either/unwrapSelection) – Unwrap les payloads sélectionnés par un sélecteur exhaustif.
- [`matchInformation`](/fr/v1/api/either/matchInformation) – Matching exhaustif par information avec callbacks.
