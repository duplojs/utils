---
outline: [2, 3]
prev:
  text: "maxOf"
  link: "/v1/api/array/maxOf/fr"
next:
  text: "maxElements"
  link: "/v1/api/array/maxElements/fr"
---

# minElements

La fonction **`minElements()`** vérifie qu'un tableau contient au moins un nombre donné d'éléments. Elle agit comme un type guard, ce qui permet à TypeScript d'inférer un tuple d'au minimum `minLength` éléments.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/array/minElements/examples/tryout.doc.ts"
  majorVersion="v1"
  height="400px"
/>

## Syntaxe

### Signature classique

```typescript
function minElements<
	GenericArray extends readonly unknown[],
	GenericLength extends number
>(
	array: GenericArray,
	minLength: GenericLength
): array is [
	...CreateTuple<GenericArray[number], GenericLength>,
	...GenericArray[number][]
]
```

### Signature currifiée

```typescript
function minElements<
	GenericArray extends readonly unknown[],
	GenericLength extends number
>(
	minLength: GenericLength
): (
	array: GenericArray
) => array is [
	...CreateTuple<GenericArray[number], GenericLength>,
	...GenericArray[number][]
]
```

## Paramètres

- `array` : Tableau dont on souhaite garantir un nombre minimal d'éléments.
- `minLength` : Nombre minimum attendu.

## Valeur de retour

`true` si la longueur du tableau est supérieure ou égale à `minLength`, sinon `false`. Lorsque la fonction retourne `true`, le type du tableau est affiné afin de refléter la contrainte.

## Voir aussi

- [`maxElements`](/v1/api/array/maxElements/fr) - Impose un nombre maximal d'éléments
- [`length`](/v1/api/array/length/fr) - Retourne la taille exacte d'un tableau

## Sources

- [MDN Web Docs - Array.length](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/length)
