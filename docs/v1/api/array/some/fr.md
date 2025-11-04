---
outline: [2, 3]
prev:
  text: "every"
  link: "/v1/api/array/every/fr"
next:
  text: "is"
  link: "/v1/api/array/is/fr"
---

# some

La méthode **`some()`** vérifie si au moins un élément d'un tableau satisfait une condition donnée.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/array/some/examples/tryout.doc.ts"
  majorVersion="v1"
  height="300px"
/>

## Syntaxe

### Signature classique

```typescript
function some<GenericElement extends unknown>(
	array: readonly GenericElement[], 
	predicate: (element: GenericElement, params: { index: number }) => boolean
): boolean
```

### Signature currifiée

```typescript
function some<GenericArray extends readonly unknown[]>(
	predicate: (element: GenericArray[number], params: { index: number }) => boolean
): (array: GenericArray) => boolean
```

## Paramètres

- `array` : Le tableau à tester.
- `predicate` : Fonction de prédicat qui teste chaque élément. Reçoit l'élément et un objet contenant l'index.

## Valeur de retour

`true` si au moins un élément satisfait la condition, `false` sinon.

## Voir aussi

- [`every`](/v1/api/array/every/fr) - Vérifie si tous les éléments satisfont une condition
- [`find`](/v1/api/array/find/fr) - Trouve le premier élément qui satisfait une condition

## Sources

- [MDN Web Docs - Array.some()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/some)
