---
outline: [2, 3]
description: "La fonction copyWithin() copie une portion du tableau vers un autre emplacement tout en restant pure (le tableau original est cloné)."
prev:
  text: "fillAll"
  link: "/fr/v1/api/array/fillAll"
next:
  text: "insert"
  link: "/fr/v1/api/array/insert"
---

# copyWithin

La fonction **`copyWithin()`** copie une portion du tableau vers un autre emplacement tout en restant pure (le tableau original est cloné).

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/array/copyWithin/tryout.doc.ts"
  majorVersion="v1"
  height="166px"
/>

## Syntaxe

### Signature classique

```typescript
function copyWithin<
	GenericElement extends unknown
>(
	input: readonly GenericElement[],
	target: number,
	start: number,
	end?: number
): GenericElement[]
```

### Signature currifiée

```typescript
function copyWithin<
	GenericElement extends unknown
>(
	target: number,
	start: number,
	end?: number
): (input: readonly GenericElement[]) => GenericElement[]
```

## Paramètres

- `input` : Tableau source.
- `target` : Index à partir duquel la portion copiée sera écrite.
- `start` : Début de la portion à copier (inclus).
- `end` : Fin de la portion (exclus). Par défaut, la fin du tableau.

## Valeur de retour

Un nouveau tableau où la portion `[start, end)` a été recopiée à partir de `target`. Les sections non concernées restent identiques.

## Voir aussi

- [`fill`](/fr/v1/api/array/fill) - Écrase une plage avec une valeur fixe
- [`set`](/fr/v1/api/array/set) - Change une seule position

## Sources

- [MDN Web Docs - Array.prototype.copyWithin()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin)
