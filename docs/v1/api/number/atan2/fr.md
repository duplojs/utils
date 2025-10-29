---
outline: [2, 3]
prev:
  text: "atan"
  link: "/v1/api/number/atan/fr"
next:
  text: "greater"
  link: "/v1/api/number/greater/fr"
---

# atan2

La méthode **`atan2()`** retourne l'arc tangente du quotient de ses arguments (y/x), en tenant compte des signes des deux arguments pour déterminer le quadrant correct. Contrairement à `atan()`, elle retourne un angle entre -π et π, couvrant tous les quadrants du cercle trigonométrique.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/number/atan2/examples/tryout.doc.ts"
  majorVersion="v1"
  height="300px"
/>

## Syntaxe

```typescript
// Forme currifiée (avec un seul argument)
function atan2<GenericValue extends number>(
	x: number
): (y: GenericValue) => number

// Forme complète (avec deux arguments)
function atan2<GenericValue extends number>(
	y: GenericValue,
	x: number
): number
```

## Paramètres

- `y` : La coordonnée y (ou composante verticale).
- `x` : La coordonnée x (ou composante horizontale).

**Note importante** : L'ordre des paramètres est `y` puis `x`, ce qui correspond à la convention mathématique standard `atan2(y, x)`.

## Valeur de retour

L'angle en radians (entre -π et π) entre l'axe des x positifs et le point (x, y).

## Exemples

### Calculer la direction entre deux points

<MonacoTSEditor
  	src="/v1/api/number/atan2/examples/direction.doc.ts"
  	majorVersion="v1"
	height="550px"
/>

### Rotation et orientation d'objets

<MonacoTSEditor
  	src="/v1/api/number/atan2/examples/rotation.doc.ts"
  	majorVersion="v1"
	height="500px"
/>

### Navigation et cap géographique

<MonacoTSEditor
  	src="/v1/api/number/atan2/examples/compass.doc.ts"
  	majorVersion="v1"
	height="600px"
/>

## Voir aussi

- [`atan`](/v1/api/number/atan/fr) - Calcule l'arc tangente (un seul quadrant)
- [`tan`](/v1/api/number/tan/fr) - Calcule la tangente d'un angle
- [`sin`](/v1/api/number/sin/fr) - Calcule le sinus d'un angle
- [`cos`](/v1/api/number/cos/fr) - Calcule le cosinus d'un angle

## Sources

- [MDN Web Docs - Math.atan2()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/atan2)
