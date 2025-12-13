---
outline: [2, 3]
prev:
  text: "spliceReplace"
  link: "/v1/api/array/spliceReplace/fr"
next:
  text: "findAndSpliceDelete"
  link: "/v1/api/array/findAndSpliceDelete/fr"
---

# findAndReplace

La fonction **`findAndReplace()`** cherche le premier élément qui satisfait un prédicat, le remplace par une nouvelle valeur et retourne le tableau mis à jour. Si aucun élément ne correspond, elle renvoie `undefined`.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/array/findAndReplace/examples/tryout.doc.ts"
  majorVersion="v1"
  height="540px"
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

- [`find`](/v1/api/array/find/fr) - Trouve le premier élément qui satisfait une condition
- [`findAndSpliceReplace`](/v1/api/array/findAndSpliceReplace/fr) - Remplace un segment via `splice`
