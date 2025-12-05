---
outline: [2, 3]
prev:
  text: "spliceInsert"
  link: "/v1/api/array/spliceInsert/fr"
next:
  text: "findAndSpliceDelete"
  link: "/v1/api/array/findAndSpliceDelete/fr"
---

# spliceReplace

La fonction **`spliceReplace()`** remplace une portion du tableau par un ensemble de nouvelles valeurs. C'est un raccourci immuable de `splice` avec `deleteCount` égal au nombre d'éléments à insérer.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/array/spliceReplace/examples/tryout.doc.ts"
  majorVersion="v1"
  height="330px"
/>

## Syntaxe

### Signature classique

```typescript
function spliceReplace<
	GenericElement extends unknown
>(
	input: readonly GenericElement[],
	indexFrom: number,
	elements: GenericElement[]
): GenericElement[]
```

### Signature currifiée

```typescript
function spliceReplace<
	GenericElement extends unknown
>(
	indexFrom: number,
	elements: GenericElement[]
): (input: readonly GenericElement[]) => GenericElement[]
```

## Paramètres

- `input` : Tableau source.
- `indexFrom` : Index du premier élément remplacé.
- `elements` : Tableau de remplacement qui écrase autant d'éléments que sa longueur.

## Valeur de retour

Un nouveau tableau où la portion ciblée est remplacée par `elements`.

## Voir aussi

- [`spliceDelete`](/v1/api/array/spliceDelete/fr) - Supprime des valeurs sans en insérer
- [`spliceInsert`](/v1/api/array/spliceInsert/fr) - Insère sans supprimer

## Sources

- [MDN Web Docs - Array.prototype.splice()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
