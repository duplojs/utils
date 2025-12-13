---
outline: [2, 3]
prev:
  text: "slice"
  link: "/v1/api/array/slice/fr"
next:
  text: "flatMap"
  link: "/v1/api/array/flatMap/fr"
---

# flat

La méthode **`flat()`** aplati un tableau imbriqué jusqu'à la profondeur demandée et retourne un nouveau tableau contenant les éléments déroulés.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/array/flat/examples/tryout.doc.ts"
  majorVersion="v1"
  height="400px"
/>

## Syntaxe

```typescript
function flat<
	const GenericInput extends readonly unknown[],
	const GenericDepth extends number = 1
>(
	input: GenericInput,
	depth?: GenericDepth
): FlatArray<GenericInput, GenericDepth>[]
```

## Paramètres

- `input` : Le tableau potentiellement imbriqué à aplatir.
- `depth` : Le nombre de niveaux à dérouler. Par défaut `1`.

## Valeur de retour

Un nouveau tableau dans lequel les éléments ont été concaténés jusqu'à la profondeur demandée. Si l'entrée est un tuple, le type résultant reflète précisément le niveau d'aplatissement.

## Voir aussi

- [`flatMap`](/v1/api/array/flatMap/fr) - Transforme puis aplati le résultat d'un niveau
- [`map`](/v1/api/array/map/fr) - Applique une fonction à chaque élément

## Sources

- [MDN Web Docs - Array.prototype.flat()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)
