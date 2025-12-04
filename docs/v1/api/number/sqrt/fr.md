---
outline: [2, 3]
prev:
  text: "clamp"
  link: "/v1/api/number/clamp/fr"
next:
  text: "toFixed"
  link: "/v1/api/number/toFixed/fr"
---

# sqrt

La méthode **`sqrt()`** retourne la racine carrée d'un nombre. La racine carrée d'un nombre x est la valeur y telle que y² = x.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/number/sqrt/examples/tryout.doc.ts"
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

- [`power`](/v1/api/number/power/fr) - Élève un nombre à une puissance
- [`abs`](/v1/api/number/abs/fr) - Retourne la valeur absolue d'un nombre

## Sources

- [MDN Web Docs - Math.sqrt()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt)
