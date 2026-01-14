---
outline: [2, 3]
description: "La fonction spliceDelete() supprime un nombre donné d'éléments à partir d'un index et retourne un nouveau tableau épuré."
prev:
  text: "concat"
  link: "/fr/v1/api/array/concat"
next:
  text: "spliceInsert"
  link: "/fr/v1/api/array/spliceInsert"
---

# spliceDelete

La fonction **`spliceDelete()`** supprime un nombre donné d'éléments à partir d'un index et retourne un nouveau tableau épuré.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/array/spliceDelete/tryout.doc.ts"
  majorVersion="v1"
  height="166px"
/>

## Syntaxe

### Signature classique

```typescript
function spliceDelete<
	GenericInput extends readonly unknown[]
>(
	input: GenericInput,
	indexTo: number,
	deleteCount: number
): GenericInput
```

### Signature currifiée

```typescript
function spliceDelete<
	GenericInput extends readonly unknown[]
>(
	indexTo: number,
	deleteCount: number
): (input: GenericInput) => GenericInput
```

## Paramètres

- `input` : Tableau source.
- `indexTo` : Index où débute la suppression.
- `deleteCount` : Nombre d'éléments à retirer.

## Valeur de retour

Un nouveau tableau sans les éléments ciblés.

## Voir aussi

- [`spliceInsert`](/fr/v1/api/array/spliceInsert) - Insère des éléments à un index
- [`spliceReplace`](/fr/v1/api/array/spliceReplace) - Remplace une portion par une autre

## Sources

- [MDN Web Docs - Array.prototype.splice()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
