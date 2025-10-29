---
outline: [2, 3]
prev:
  text: "power"
  link: "/v1/api/number/power/fr"
next:
  text: "abs"
  link: "/v1/api/number/abs/fr"
---

# negate

La méthode **`negate()`** inverse le signe d'un nombre. Un nombre positif devient négatif et vice versa. C'est l'équivalent de multiplier par -1.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/number/negate/examples/tryout.doc.ts"
  majorVersion="v1"
  height="200px"
/>

## Syntaxe

```typescript
function negate<
	GenericValue extends number,
>(value: GenericValue): number
```

## Paramètres

- `value` : Le nombre dont on souhaite inverser le signe.

## Valeur de retour

Le nombre avec le signe inversé. Si le nombre est positif, retourne sa version négative. Si le nombre est négatif, retourne sa version positive.

## Exemples

### Inverser des transactions

<MonacoTSEditor
  	src="/v1/api/number/negate/examples/invertBalance.doc.ts"
  	majorVersion="v1"
	height="350px"
/>

### Calculer une position

<MonacoTSEditor
  	src="/v1/api/number/negate/examples/calculateOpposite.doc.ts"
  	majorVersion="v1"
	height="500px"
/>

### Inverser des changements de température

<MonacoTSEditor
  	src="/v1/api/number/negate/examples/temperatureDelta.doc.ts"
  	majorVersion="v1"
	height="450px"
/>

## Voir aussi

- [`abs`](/v1/api/number/abs/fr) - Retourne la valeur absolue d'un nombre
- [`subtract`](/v1/api/number/subtract/fr) - Soustrait deux nombres

## Sources

- [MDN Web Docs - Unary negation (-)](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Unary_negation)
