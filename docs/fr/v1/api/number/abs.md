---
outline: [2, 3]
prev:
  text: "negate"
  link: "/fr/v1/api/number/negate"
next:
  text: "round"
  link: "/fr/v1/api/number/round"
---

# abs

La méthode **`abs()`** retourne la valeur absolue d'un nombre. La valeur absolue d'un nombre est sa distance à zéro, toujours positive ou nulle.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/number/abs/tryout.doc.ts"
  majorVersion="v1"
  height="200px"
/>

## Syntaxe

```typescript
function abs<
	GenericInput extends number,
>(input: GenericInput): number
```

## Paramètres

- `input` : Le nombre dont on souhaite obtenir la valeur absolue.

## Valeur de retour

La valeur absolue du nombre donné. Retourne toujours un nombre positif ou zéro.

## Voir aussi

- [`negate`](/fr/v1/api/number/negate) - Inverse le signe d'un nombre
- [`subtract`](/fr/v1/api/number/subtract) - Soustrait deux nombres

## Sources

- [MDN Web Docs - Math.abs()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/abs)
