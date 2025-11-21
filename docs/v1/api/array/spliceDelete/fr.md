---
outline: [2, 3]
prev:
  text: "concat"
  link: "/v1/api/array/concat/fr"
next:
  text: "spliceInsert"
  link: "/v1/api/array/spliceInsert/fr"
---

# spliceDelete

La fonction **`spliceDelete()`** supprime un nombre donné d'éléments à partir d'un index et retourne un nouveau tableau épuré.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/array/spliceDelete/examples/tryout.doc.ts"
  majorVersion="v1"
  height="320px"
/>

## Syntaxe

### Signature classique

```typescript
function spliceDelete<GenericElement>(
	array: readonly GenericElement[],
	indexTo: number,
	deleteCount: number
): GenericElement[]
```

### Signature currifiée

```typescript
function spliceDelete<GenericElement>(
	indexTo: number,
	deleteCount: number
): (array: readonly GenericElement[]) => GenericElement[]
```

## Paramètres

- `array` : Tableau source.
- `indexTo` : Index où débute la suppression.
- `deleteCount` : Nombre d'éléments à retirer.

## Valeur de retour

Un nouveau tableau sans les éléments ciblés.

## Voir aussi

- [`spliceInsert`](/v1/api/array/spliceInsert/fr) - Insère des éléments à un index
- [`spliceReplace`](/v1/api/array/spliceReplace/fr) - Remplace une portion par une autre

## Sources

- [MDN Web Docs - Array.prototype.splice()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
