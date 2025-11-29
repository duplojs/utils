---
outline: [2, 3]
prev:
  text: "lastIndexOf"
  link: "/v1/api/array/lastIndexOf/fr"
next:
  text: "findLast"
  link: "/v1/api/array/findLast/fr"
---

# find

La méthode **`find()`** retourne le premier élément d'un tableau qui satisfait une condition donnée.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/array/find/examples/tryout.doc.ts"
  majorVersion="v1"
  height="300px"
/>

## Syntaxe

### Signature classique

```typescript
function find<GenericElement extends unknown>(
	array: readonly GenericElement[], 
	predicate: (element: GenericElement, params: { index: number }) => boolean
): GenericElement | undefined
```

### Signature currifiée

```typescript
function find<GenericArray extends readonly unknown[]>(
	predicate: (element: GenericArray[number], params: { index: number }) => boolean
): (array: GenericArray) => GenericArray[number] | undefined
```

## Paramètres

- `array` : Le tableau dans lequel rechercher.
- `predicate` : Fonction de prédicat qui teste chaque élément. Reçoit l'élément et un objet contenant l'index.

## Valeur de retour

Le premier élément qui satisfait la condition, ou `undefined` si aucun élément ne correspond.

## Voir aussi

- [`findLast`](/v1/api/array/findLast/fr) - Trouve le dernier élément qui satisfait une condition
- [`findIndex`](/v1/api/array/findIndex/fr) - Retourne l'index au lieu de l'élément

## Sources

- [MDN Web Docs - Array.find()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
