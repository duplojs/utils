---
outline: [2, 3]
prev:
  text: "acos"
  link: "/v1/api/number/acos/fr"
next:
  text: "atan2"
  link: "/v1/api/number/atan2/fr"
---

# atan

La méthode **`atan()`** retourne l'arc tangente d'un nombre, c'est-à-dire l'angle (en radians) dont la tangente est égale à la valeur donnée. C'est la fonction inverse de `tan()`.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/number/atan/examples/tryout.doc.ts"
  majorVersion="v1"
  height="250px"
/>

## Syntaxe

```typescript
function atan<
	GenericValue extends number,
>(value: GenericValue): number
```

## Paramètres

- `value` : Un nombre représentant la tangente d'un angle.

## Valeur de retour

L'angle en radians (entre -π/2 et π/2) dont la tangente est égale à la valeur donnée.

## Exemples

### Calculer un angle à partir d'une pente

<MonacoTSEditor
  	src="/v1/api/number/atan/examples/slopeAngle.doc.ts"
  	majorVersion="v1"
	height="400px"
/>

### Convertir des ratios en angles

<MonacoTSEditor
  	src="/v1/api/number/atan/examples/ratioToAngle.doc.ts"
  	majorVersion="v1"
	height="1000px"
/>

### Calcul d'inclinaison

<MonacoTSEditor
  	src="/v1/api/number/atan/examples/inclination.doc.ts"
  	majorVersion="v1"
	height="1300px"
/>

## Voir aussi

- [`tan`](/v1/api/number/tan/fr) - Calcule la tangente d'un angle
- [`atan2`](/v1/api/number/atan2/fr) - Calcule l'arc tangente de y/x avec gestion des quadrants
- [`asin`](/v1/api/number/asin/fr) - Calcule l'arc sinus

## Sources

- [MDN Web Docs - Math.atan()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/atan)
