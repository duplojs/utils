---
outline: [2, 3]
description: "La méthode negate() inverse le signe d'un nombre. Un nombre positif devient négatif et vice versa. C'est l'équivalent de multiplier par -1."
prev:
  text: "power"
  link: "/fr/v1/api/number/power"
next:
  text: "abs"
  link: "/fr/v1/api/number/abs"
---

# negate

La méthode **`negate()`** inverse le signe d'un nombre. Un nombre positif devient négatif et vice versa. C'est l'équivalent de multiplier par -1.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/number/negate/tryout.doc.ts"
  majorVersion="v1"
  height="145px"
/>

## Syntaxe

```typescript
function negate<
	GenericInput extends number,
>(input: GenericInput): number
```

## Paramètres

- `input` : Le nombre dont on souhaite inverser le signe.

## Valeur de retour

Le nombre avec le signe inversé. Si le nombre est positif, retourne sa version négative. Si le nombre est négatif, retourne sa version positive.

## Voir aussi

- [`abs`](/fr/v1/api/number/abs) - Retourne la valeur absolue d'un nombre
- [`subtract`](/fr/v1/api/number/subtract) - Soustrait deux nombres

## Sources

- [MDN Web Docs - Unary negation (-)](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Unary_negation)
