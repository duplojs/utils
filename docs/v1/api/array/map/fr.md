---
outline: [2, 3]
prev:
  text: "is"
  link: "/v1/api/array/is/fr"
next:
  text: "filter"
  link: "/v1/api/array/filter/fr"
---

# map

La méthode **`map()`** applique une fonction de transformation sur chaque élément d'un tableau et retourne un nouveau tableau contenant les résultats, sans modifier l'entrée.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/array/map/examples/tryout.doc.ts"
  majorVersion="v1"
  height="320px"
/>

## Syntaxe

### Signature classique

```typescript
function map<
	GenericElement extends unknown,
	GenericOutput extends unknown
>(
	array: readonly GenericElement[],
	theFunction: (
		element: GenericElement,
		params: ArrayMapParams
	) => GenericOutput
): GenericOutput[]
```

### Signature currifiée

```typescript
function map<
	GenericArray extends readonly unknown[],
	GenericOutput extends unknown
>(
	theFunction: (
		element: GenericArray[number],
		params: ArrayMapParams
	) => GenericOutput
): (array: GenericArray) => GenericOutput[]
```

### Paramètres auxiliaires

```typescript
interface ArrayMapParams {
	index: number;
}
```

## Paramètres

- `array` : Le tableau à transformer.
- `theFunction` : Fonction appliquée à chaque élément. Elle reçoit l'élément courant et un objet fournissant l'index.
- `params.index` : Position de l'élément en cours dans le tableau source.

## Valeur de retour

Un nouveau tableau contenant les valeurs retournées par la fonction de transformation. Le tableau original n'est jamais modifié.

## Voir aussi

- [`filter`](/v1/api/array/filter/fr) - Filtre les éléments selon une condition
- [`flatMap`](/v1/api/array/flatMap/fr) - Transforme puis aplatit le résultat d'un niveau

## Sources

- [MDN Web Docs - Array.prototype.map()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
