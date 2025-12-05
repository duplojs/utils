---
outline: [2, 3]
prev:
  text: "toTuple"
  link: "/v1/api/array/toTuple/fr"
next:
  text: "first"
  link: "/v1/api/array/first/fr"
---

# at

La méthode **`at()`** retourne l'élément à un index donné (supporte les index négatifs).

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/array/at/examples/tryout.doc.ts"
  majorVersion="v1"
  height="300px"
/>

## Syntaxe

### Signature classique

```typescript
function at<
	GenericInputTuple extends readonly unknown[], 
	GenericIndex extends number
>(
	input: GenericInputTuple, 
	index: GenericIndex
): AtTuple<GenericInputTuple, GenericIndex>

function at<
	GenericElement extends unknown
>(
	input: readonly GenericElement[], 
	index: number
): GenericElement | undefined
```

### Signature currifiée

```typescript
function at<
	GenericInputTuple extends readonly unknown[], 
	GenericIndex extends number
>(
	index: GenericIndex
): (input: GenericInputTuple) => AtTuple<GenericInputTuple, GenericIndex>

function at<
	GenericElement extends unknown
>(
	index: number
): (input: readonly GenericElement[]) => GenericElement | undefined
```

## Paramètres

- `input` : Le tableau dont on veut récupérer un élément.
- `index` : L'index de l'élément à récupérer (peut être négatif pour compter depuis la fin).

## Valeur de retour

L'élément à l'index donné, ou `undefined` si l'index est hors limites.

## Voir aussi

- [`first`](/v1/api/array/first/fr) - Retourne le premier élément du tableau
- [`last`](/v1/api/array/last/fr) - Retourne le dernier élément du tableau

## Sources

- [MDN Web Docs - Array.at()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/at)
