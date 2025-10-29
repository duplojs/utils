---
outline: [2, 3]
prev:
  text: "cos"
  link: "/v1/api/number/cos/fr"
next:
  text: "asin"
  link: "/v1/api/number/asin/fr"
---

# tan

La méthode **`tan()`** retourne la tangente d'un angle exprimé en radians. La tangente est le rapport entre le sinus et le cosinus d'un angle (tan = sin/cos).

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/number/tan/examples/tryout.doc.ts"
  majorVersion="v1"
  height="250px"
/>

## Syntaxe

```typescript
function tan<
	GenericValue extends number,
>(value: GenericValue): number
```

## Paramètres

- `value` : L'angle en radians dont on souhaite calculer la tangente.

## Valeur de retour

La tangente de l'angle donné. La valeur tend vers l'infini lorsque l'angle approche π/2 (90°) ou -π/2 (-90°).

## Exemples

### Calculer une pente

<MonacoTSEditor
  	src="/v1/api/number/tan/examples/calculateSlope.doc.ts"
  	majorVersion="v1"
	height="400px"
/>

### Calculer la hauteur d'un objet

<MonacoTSEditor
  	src="/v1/api/number/tan/examples/calculateHeight.doc.ts"
  	majorVersion="v1"
	height="450px"
/>

### Perspective et projection

<MonacoTSEditor
  	src="/v1/api/number/tan/examples/perspective.doc.ts"
  	majorVersion="v1"
	height="500px"
/>

## Voir aussi

- [`sin`](/v1/api/number/sin/fr) - Calcule le sinus d'un angle
- [`cos`](/v1/api/number/cos/fr) - Calcule le cosinus d'un angle
- [`atan`](/v1/api/number/atan/fr) - Calcule l'arc tangente

## Sources

- [MDN Web Docs - Math.tan()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/tan)
