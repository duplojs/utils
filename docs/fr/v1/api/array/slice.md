---
outline: [2, 3]
description: "La fonction slice() crée une copie d'une portion de tableau entre start et end (exclu) sans modifier l'original. Elle reprend Array.prototype.slice avec une API currifiée."
prev:
  text: "select"
  link: "/fr/v1/api/array/select"
next:
  text: "flat"
  link: "/fr/v1/api/array/flat"
---

# slice

La fonction **`slice()`** crée une copie d'une portion de tableau entre `start` et `end` (exclu) sans modifier l'original. Elle reprend `Array.prototype.slice` avec une API currifiée.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/array/slice/tryout.doc.ts"
  majorVersion="v1"
  height="166px"
/>

## Syntaxe

### Signature classique

```typescript
function slice<
  GenericElement extends unknown,
>(
  array: readonly GenericElement[],
  start?: number,
  end?: number,
): GenericElement[]
```

### Signature currifiée

```typescript
function slice<
  GenericElement extends unknown,
>(
  start?: number,
  end?: number,
): (array: readonly GenericElement[]) => GenericElement[]
```

## Paramètres

- `array` : Tableau source.
- `start` : Index de début (inclus). Par défaut `0`.
- `end` : Index de fin (exclus). Par défaut la longueur du tableau.

## Valeur de retour

Une nouvelle portion du tableau d'origine entre `start` et `end`.

## Voir aussi

- [`at`](/fr/v1/api/array/at) - Accède à un élément précis
- [`chunk`](/fr/v1/api/array/chunk) - Découpe un tableau en blocs
