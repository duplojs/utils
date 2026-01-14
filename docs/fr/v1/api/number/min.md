---
outline: [2, 3]
description: "La méthode min() retourne la plus petite valeur parmi les nombres fournis. Elle permet de comparer plusieurs valeurs et d'obtenir le minimum."
prev:
  text: "max"
  link: "/fr/v1/api/number/max"
next:
  text: "clamp"
  link: "/fr/v1/api/number/clamp"
---

# min

La méthode **`min()`** retourne la plus petite valeur parmi les nombres fournis. Elle permet de comparer plusieurs valeurs et d'obtenir le minimum.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/number/min/tryout.doc.ts"
  majorVersion="v1"
  height="271px"
/>

## Syntaxe

```typescript
function min<
	GenericInput extends AnyTuple<number>
>(
	input: GenericInput
): number
```

## Paramètres

- `input` : Tuple de nombres à comparer.

## Valeur de retour

Le plus petit nombre du tuple fourni.

## Voir aussi

- [`max`](/fr/v1/api/number/max) - Retourne la valeur maximale
- [`clamp`](/fr/v1/api/number/clamp) - Limite un nombre dans un intervalle

## Sources

- [MDN Web Docs - Math.min()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/min)
