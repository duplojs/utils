---
outline: [2, 3]
prev:
  text: "find"
  link: "/v1/api/array/find/fr"
next:
  text: "findIndex"
  link: "/v1/api/array/findIndex/fr"
---

# findLast

La méthode **`findLast()`** retourne le dernier élément d'un tableau qui satisfait une condition donnée.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/array/findLast/examples/tryout.doc.ts"
  majorVersion="v1"
  height="300px"
/>

## Syntaxe

### Signature classique

```typescript
function findLast<GenericElement extends unknown>(
	input: readonly GenericElement[], 
	predicate: (element: GenericElement, params: { index: number }) => boolean
): GenericElement | undefined
```

### Signature currifiée

```typescript
function findLast<GenericArray extends readonly unknown[]>(
	predicate: (element: GenericArray[number], params: { index: number }) => boolean
): (input: GenericArray) => GenericArray[number] | undefined
```

## Paramètres

- `input` : Le tableau dans lequel rechercher.
- `predicate` : Fonction de prédicat qui teste chaque élément. Reçoit l'élément et un objet contenant l'index.

## Valeur de retour

Le dernier élément qui satisfait la condition, ou `undefined` si aucun élément ne correspond.

## Voir aussi

- [`find`](/v1/api/array/find/fr) - Trouve le premier élément qui satisfait une condition
- [`findLastIndex`](/v1/api/array/findLastIndex/fr) - Retourne l'index au lieu de l'élément

## Sources

- [MDN Web Docs - Array.findLast()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/findLast)
