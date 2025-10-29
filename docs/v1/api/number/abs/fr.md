---
outline: [2, 3]
prev:
  text: "negate"
  link: "/v1/api/number/negate/fr"
next:
  text: "round"
  link: "/v1/api/number/round/fr"
---

# abs

La méthode **`abs()`** retourne la valeur absolue d'un nombre. La valeur absolue d'un nombre est sa distance à zéro, toujours positive ou nulle.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/number/abs/examples/tryout.doc.ts"
  majorVersion="v1"
  height="200px"
/>

## Syntaxe

```typescript
function abs<
	GenericValue extends number,
>(value: GenericValue): number
```

## Paramètres

- `value` : Le nombre dont on souhaite obtenir la valeur absolue.

## Valeur de retour

La valeur absolue du nombre donné. Retourne toujours un nombre positif ou zéro.

## Exemples

### Calculer la différence absolue

<MonacoTSEditor
  	src="/v1/api/number/abs/examples/calculateDifference.doc.ts"
  	majorVersion="v1"
	height="350px"
/>

### Normaliser des températures

<MonacoTSEditor
  	src="/v1/api/number/abs/examples/normalizeTemperatures.doc.ts"
  	majorVersion="v1"
	height="350px"
/>

### Calculer la distance entre des points

<MonacoTSEditor
  	src="/v1/api/number/abs/examples/calculateDistance.doc.ts"
  	majorVersion="v1"
	height="450px"
/>

## Voir aussi

- [`negate`](/v1/api/number/negate/fr) - Inverse le signe d'un nombre
- [`subtract`](/v1/api/number/subtract/fr) - Soustrait deux nombres

## Sources

- [MDN Web Docs - Math.abs()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/abs)
