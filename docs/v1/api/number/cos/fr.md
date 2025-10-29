---
outline: [2, 3]
prev:
  text: "sin"
  link: "/v1/api/number/sin/fr"
next:
  text: "tan"
  link: "/v1/api/number/tan/fr"
---

# cos

La méthode **`cos()`** retourne le cosinus d'un angle exprimé en radians. Le cosinus est une fonction trigonométrique fondamentale qui retourne la coordonnée x d'un point sur le cercle unité.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/number/cos/examples/tryout.doc.ts"
  majorVersion="v1"
  height="250px"
/>

## Syntaxe

```typescript
function cos<
	GenericValue extends number,
>(value: GenericValue): number
```

## Paramètres

- `value` : L'angle en radians dont on souhaite calculer le cosinus.

## Valeur de retour

Le cosinus de l'angle donné, une valeur comprise entre -1 et 1.

## Exemples

### Calculer une position horizontale

<MonacoTSEditor
  	src="/v1/api/number/cos/examples/horizontalPosition.doc.ts"
  	majorVersion="v1"
	height="400px"
/>

### Animation circulaire

<MonacoTSEditor
  	src="/v1/api/number/cos/examples/circularMotion.doc.ts"
  	majorVersion="v1"
	height="550px"
/>

### Calculer un angle de phase

<MonacoTSEditor
  	src="/v1/api/number/cos/examples/phaseAngle.doc.ts"
  	majorVersion="v1"
	height="400px"
/>

## Voir aussi

- [`sin`](/v1/api/number/sin/fr) - Calcule le sinus d'un angle
- [`tan`](/v1/api/number/tan/fr) - Calcule la tangente d'un angle
- [`acos`](/v1/api/number/acos/fr) - Calcule l'arc cosinus

## Sources

- [MDN Web Docs - Math.cos()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/cos)
