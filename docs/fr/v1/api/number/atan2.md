---
outline: [2, 3]
description: "La méthode atan2() retourne l'arc tangente du quotient de ses arguments (y/x), en tenant compte des signes des deux arguments pour déterminer le quadrant correct. Contrairement à atan(), elle retourne un angle entre -π et π, couvrant tous les quadrants du cercle trigonométrique."
prev:
  text: "atan"
  link: "/fr/v1/api/number/atan"
next:
  text: "greater"
  link: "/fr/v1/api/number/greater"
---

# atan2

La méthode **`atan2()`** retourne l'arc tangente du quotient de ses arguments (y/x), en tenant compte des signes des deux arguments pour déterminer le quadrant correct. Contrairement à `atan()`, elle retourne un angle entre -π et π, couvrant tous les quadrants du cercle trigonométrique.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/number/atan2/tryout.doc.ts"
  majorVersion="v1"
  height="250px"
/>

## Syntaxe

### Signature classique

```typescript
function atan2<
	GenericAxisY extends number
>(
	axisY: GenericAxisY,
	axisX: number
): number
```

### Signature currifiée

```typescript
function atan2<
	GenericAxisY extends number
>(
	axisX: number
): (axisY: GenericAxisY) => number
```

## Paramètres

- `axisY` : La coordonnée y (ou composante verticale, uniquement en signature classique).
- `axisX` : La coordonnée x (ou composante horizontale).

**Note importante** : L'ordre des paramètres en signature classique est `axisY` puis `axisX`, ce qui correspond à la convention mathématique standard `atan2(y, x)`.

## Valeur de retour

retourne l'angle en radians (entre -π et π) entre l'axe des x positifs et le point (`axisX`, `axisY`).


## Voir aussi

- [`atan`](/fr/v1/api/number/atan) - Calcule l'arc tangente (un seul quadrant)
- [`tan`](/fr/v1/api/number/tan) - Calcule la tangente d'un angle
- [`sin`](/fr/v1/api/number/sin) - Calcule le sinus d'un angle
- [`cos`](/fr/v1/api/number/cos) - Calcule le cosinus d'un angle

## Sources

- [MDN Web Docs - Math.atan2()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/atan2)
