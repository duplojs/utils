---
outline: [2, 3]
prev:
  text: "notIncludes"
  link: "/v1/api/array/notIncludes/fr"
next:
  text: "lastIndexOf"
  link: "/v1/api/array/lastIndexOf/fr"
---

# indexOf

La méthode **`indexOf()`** retourne l'index de la première occurrence d'un élément dans un tableau.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/array/indexOf/examples/tryout.doc.ts"
  majorVersion="v1"
  height="300px"
/>

## Syntaxe

### Signature classique

```typescript
function indexOf<
	GenericElement extends unknown
>(
	input: readonly GenericElement[], 
	element: GenericElement, 
	fromIndex?: number
): number | undefined
```

### Signature currifiée

```typescript
function indexOf<
	GenericElement extends unknown
>(
	element: GenericElement
): (input: readonly GenericElement[]) => number | undefined
```

## Paramètres

- `input` : Le tableau dans lequel rechercher.
- `element` : L'élément à rechercher.
- `fromIndex` : L'index de départ pour la recherche (optionnel).

## Valeur de retour

L'index de la première occurrence de l'élément, ou `undefined` si l'élément n'est pas trouvé.

## Voir aussi

- [`lastIndexOf`](/v1/api/array/lastIndexOf/fr) - Retourne l'index de la dernière occurrence
- [`findIndex`](/v1/api/array/findIndex/fr) - Trouve l'index avec une condition

## Sources

- [MDN Web Docs - Array.indexOf()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)
