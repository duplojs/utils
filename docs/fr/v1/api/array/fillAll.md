---
outline: [2, 3]
prev:
  text: "fill"
  link: "/fr/v1/api/array/fill"
next:
  text: "copyWithin"
  link: "/fr/v1/api/array/copyWithin"
---

# fillAll

La fonction **`fillAll()`** remplace tous les éléments d'un tableau par une valeur unique et renvoie le résultat sans altérer l'entrée.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/array/fillAll/tryout.doc.ts"
  majorVersion="v1"
  height="260px"
/>

## Syntaxe

### Signature classique

```typescript
function fillAll<
	GenericElement extends unknown 
>(
	input: readonly unknown[],
	element: GenericElement
): GenericElement[]
```

### Signature currifiée

```typescript
function fillAll<
	GenericElement extends unknown
>(
	element: GenericElement
): (input: readonly unknown[]) => GenericElement[]
```

## Paramètres

- `input` : Tableau source.
- `element` : Valeur qui sera copiée à chaque position (le type de sortie est basé sur cette valeur).

## Valeur de retour

Un nouveau tableau où tous les éléments valent `element`, typé à partir de cette valeur. Le tableau initial reste inchangé.

## Voir aussi

- [`fill`](/fr/v1/api/array/fill) - Limite le remplissage à une section
- [`set`](/fr/v1/api/array/set) - Change un seul index spécifique

## Sources

- [MDN Web Docs - Array.prototype.fill()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/fill)
