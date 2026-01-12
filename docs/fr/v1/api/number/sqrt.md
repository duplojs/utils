---
outline: [2, 3]
description: "La méthode sqrt() retourne la racine carrée d'un nombre. La racine carrée d'un nombre x est la valeur y telle que y² = x."
prev:
  text: "clamp"
  link: "/fr/v1/api/number/clamp"
next:
  text: "toFixed"
  link: "/fr/v1/api/number/toFixed"
---

# sqrt

La méthode **`sqrt()`** retourne la racine carrée d'un nombre. La racine carrée d'un nombre x est la valeur y telle que y² = x.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/number/sqrt/tryout.doc.ts"
  majorVersion="v1"
  height="200px"
/>

## Syntaxe

```typescript
function sqrt<
	GenericInput extends number
>(
	input: GenericInput
): number
```

## Paramètres

- `input` : Le nombre dont on souhaite calculer la racine carrée.

## Valeur de retour

La racine carrée du nombre donné. Si le nombre est négatif, retourne `NaN`.

## Voir aussi

- [`power`](/fr/v1/api/number/power) - Élève un nombre à une puissance
- [`abs`](/fr/v1/api/number/abs) - Retourne la valeur absolue d'un nombre

## Sources

- [MDN Web Docs - Math.sqrt()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt)
