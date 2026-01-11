---
outline: [2, 3]
description: "La fonction spliceReplace() remplace une portion du tableau par un ensemble de nouvelles valeurs. C'est un raccourci immuable de splice avec deleteCount égal au nombre d'éléments à insérer."
prev:
  text: "spliceInsert"
  link: "/fr/v1/api/array/spliceInsert"
next:
  text: "findAndReplace"
  link: "/fr/v1/api/array/findAndReplace"
---

# spliceReplace

La fonction **`spliceReplace()`** remplace une portion du tableau par un ensemble de nouvelles valeurs. C'est un raccourci immuable de `splice` avec `deleteCount` égal au nombre d'éléments à insérer.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/array/spliceReplace/tryout.doc.ts"
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

- [`spliceDelete`](/fr/v1/api/array/spliceDelete) - Supprime des valeurs sans en insérer
- [`spliceInsert`](/fr/v1/api/array/spliceInsert) - Insère sans supprimer

## Sources

- [MDN Web Docs - Array.prototype.splice()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
