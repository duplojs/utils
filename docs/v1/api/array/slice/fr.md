---
outline: [2, 3]
prev:
  text: "filter"
  link: "/v1/api/array/filter/fr"
next:
  text: "flat"
  link: "/v1/api/array/flat/fr"
---

# slice

La fonction **`slice()`** crée une copie d'une portion de tableau entre `start` et `end` (exclu) sans modifier l'original. Elle reprend `Array.prototype.slice` avec une API currifiée.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/array/slice/examples/tryout.doc.ts"
  majorVersion="v1"
  height="260px"
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

- [`at`](/v1/api/array/at/fr) - Accède à un élément précis
- [`chunk`](/v1/api/array/chunk/fr) - Découpe un tableau en blocs
