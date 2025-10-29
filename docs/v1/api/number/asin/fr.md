---
outline: [2, 3]
prev:
  text: "tan"
  link: "/v1/api/number/tan/fr"
next:
  text: "acos"
  link: "/v1/api/number/acos/fr"
---

# asin

La méthode **`asin()`** retourne l'arc sinus d'un nombre, c'est-à-dire l'angle (en radians) dont le sinus est égal à la valeur donnée. C'est la fonction inverse de `sin()`.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/number/asin/examples/tryout.doc.ts"
  majorVersion="v1"
  height="250px"
/>

## Syntaxe

```typescript
function asin<
	GenericValue extends number,
>(value: GenericValue): number
```

## Paramètres

- `value` : Un nombre entre -1 et 1 représentant le sinus d'un angle.

## Valeur de retour

L'angle en radians (entre -π/2 et π/2) dont le sinus est égal à la valeur donnée. Retourne `NaN` si la valeur est hors de l'intervalle [-1, 1].

## Exemples

### Calculer un angle à partir d'un ratio

<MonacoTSEditor
  	src="/v1/api/number/asin/examples/calculateAngle.doc.ts"
  	majorVersion="v1"
	height="750px"
/>

### Trouver l'angle d'élévation

<MonacoTSEditor
  	src="/v1/api/number/asin/examples/elevationAngle.doc.ts"
  	majorVersion="v1"
	height="900px"
/>

### Navigation et trajectoires

<MonacoTSEditor
  	src="/v1/api/number/asin/examples/trajectory.doc.ts"
  	majorVersion="v1"
	height="1050px"
/>

## Voir aussi

- [`sin`](/v1/api/number/sin/fr) - Calcule le sinus d'un angle
- [`acos`](/v1/api/number/acos/fr) - Calcule l'arc cosinus
- [`atan`](/v1/api/number/atan/fr) - Calcule l'arc tangente

## Sources

- [MDN Web Docs - Math.asin()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/asin)
