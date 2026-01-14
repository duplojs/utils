---
outline: [2, 3]
description: "La fonction findAndReplace() cherche le premier élément qui satisfait un prédicat, le remplace par une nouvelle valeur et retourne le tableau mis à jour. Si aucun élément ne correspond, elle renvoie undefined."
prev:
  text: "spliceReplace"
  link: "/fr/v1/api/array/spliceReplace"
next:
  text: "findAndSpliceDelete"
  link: "/fr/v1/api/array/findAndSpliceDelete"
---

# findAndReplace

La fonction **`findAndReplace()`** cherche le premier élément qui satisfait un prédicat, le remplace par une nouvelle valeur et retourne le tableau mis à jour. Si aucun élément ne correspond, elle renvoie `undefined`.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/array/findAndReplace/tryout.doc.ts"
  majorVersion="v1"
  height="544px"
  :foldLines="[22]"
/>

## Syntaxe

### Signature classique

```typescript
function findAndReplace<
  GenericArray extends readonly unknown[],
  GenericValue extends AnyValue,
>(
  input: GenericArray,
  predicate: (
    element: GenericArray[number],
    params: { index: number }
  ) => boolean,
  value: GenericValue,
): (GenericArray[number] | GenericValue)[] | undefined
```

### Signature currifiée

```typescript
function findAndReplace<
  GenericArray extends readonly unknown[],
  GenericValue extends AnyValue,
>(
  predicate: (
    element: GenericArray[number],
    params: { index: number }
  ) => boolean,
  value: GenericValue,
): (input: GenericArray) => (GenericArray[number] | GenericValue)[] | undefined
```

## Paramètres

- `input` : Tableau source.
- `predicate` : Fonction appelée pour chaque élément avec l'élément et son index. Doit retourner `true` lorsque l'élément est ciblé.
- `value` : Nouvelle valeur qui remplace l'élément trouvé.

## Valeur de retour

Un nouveau tableau avec l'élément remplacé, ou `undefined` si aucun élément ne satisfait le prédicat.

## Voir aussi

- [`find`](/fr/v1/api/array/find) - Trouve le premier élément qui satisfait une condition
- [`findAndSpliceReplace`](/fr/v1/api/array/findAndSpliceReplace) - Remplace un segment via `splice`
