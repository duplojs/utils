---
outline: [2, 3]
prev:
  text: "findLastIndex"
  link: "/v1/api/array/findLastIndex/fr"
next:
  text: "some"
  link: "/v1/api/array/some/fr"
---

# every

La méthode **`every()`** vérifie si tous les éléments d'un tableau satisfont une condition donnée.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/array/every/examples/tryout.doc.ts"
  majorVersion="v1"
  height="300px"
/>

## Syntaxe

### Signature classique

```typescript
function every<
	GenericInput extends readonly unknown[]
>(
	input: GenericInput, 
	predicate: (
		element: GenericInput[number], 
		params: { index: number }
	) => boolean
): boolean
```

### Signature currifiée

```typescript
function every<
	GenericInput extends readonly unknown[]
>(
	predicate: (
		element: GenericInput[number], 
		params: { index: number }
	) => boolean
): (input: GenericInput) => boolean
```

## Paramètres

- `input` : Le tableau à tester.
- `predicate` : Fonction de prédicat qui teste chaque élément. Reçoit l'élément et un objet contenant l'index.

## Valeur de retour

`true` si tous les éléments satisfont la condition, `false` sinon.

## Voir aussi

- [`some`](/v1/api/array/some/fr) - Vérifie si au moins un élément satisfait une condition
- [`find`](/v1/api/array/find/fr) - Trouve le premier élément qui satisfait une condition

## Sources

- [MDN Web Docs - Array.every()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/every)
