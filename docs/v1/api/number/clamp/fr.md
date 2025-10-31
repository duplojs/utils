---
outline: [2, 3]
prev:
  text: "min"
  link: "/v1/api/number/min/fr"
next:
  text: "sqrt"
  link: "/v1/api/number/sqrt/fr"
---

# clamp

La méthode **`clamp()`** limite un nombre dans un intervalle donné. Si la valeur est inférieure à la borne inférieure, elle retourne la borne inférieure. Si elle est supérieure à la borne supérieure, elle retourne la borne supérieure. Sinon, elle retourne la valeur elle-même.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/number/clamp/examples/tryout.doc.ts"
  majorVersion="v1"
  height="200px"
/>

## Syntaxe

### Signature classique

```typescript
function clamp<GenericValue extends number>(
	value: GenericValue,
	lowerBound: number,
	upperBound: number
): number
```

### Signature currifiée

```typescript
function clamp<GenericValue extends number>(
	lowerBound: number,
	upperBound: number
): (value: GenericValue) => number
```

## Paramètres

- `value` : Le nombre à limiter dans l'intervalle (uniquement en signature classique).
- `lowerBound` : La borne inférieure de l'intervalle.
- `upperBound` : La borne supérieure de l'intervalle.

## Valeur de retour

**Signature classique** : retourne un nombre limité dans l'intervalle `[lowerBound, upperBound]`. Si `lowerBound` et `upperBound` sont inversés, la fonction les réordonne automatiquement.

**Signature currifiée** : retourne une fonction qui prend une valeur et la limite dans l'intervalle spécifié.

## Exemples

### Limiter une vitesse

<MonacoTSEditor
  	src="/v1/api/number/clamp/examples/speedLimit.doc.ts"
  	majorVersion="v1"
	height="300px"
/>

### Contrôler le volume audio

<MonacoTSEditor
  	src="/v1/api/number/clamp/examples/audioVolume.doc.ts"
  	majorVersion="v1"
	height="350px"
/>

### Normaliser des pourcentages

<MonacoTSEditor
  	src="/v1/api/number/clamp/examples/percentage.doc.ts"
  	majorVersion="v1"
	height="400px"
/>

## Voir aussi

- [`max`](/v1/api/number/max/fr) - Retourne la valeur maximale
- [`min`](/v1/api/number/min/fr) - Retourne la valeur minimale

## Sources

- [MDN Web Docs - Math.min()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/min)
- [MDN Web Docs - Math.max()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/max)
