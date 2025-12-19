---
outline: [2, 3]
prev:
  text: "cos"
  link: "/fr/v1/api/number/cos"
next:
  text: "asin"
  link: "/fr/v1/api/number/asin"
---

# tan

La méthode **`tan()`** retourne la tangente d'un angle exprimé en radians. La tangente est le rapport entre le sinus et le cosinus d'un angle (tan = sin/cos).

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/number/tan/tryout.doc.ts"
  majorVersion="v1"
  height="250px"
/>

## Syntaxe

```typescript
function tan<
	GenericInput extends number,
>(
	input: GenericInput
): number
```

## Paramètres

- `input` : L'angle en radians dont on souhaite calculer la tangente.

## Valeur de retour

La tangente de l'angle donné. La valeur tend vers l'infini lorsque l'angle approche π/2 (90°) ou -π/2 (-90°).

## Voir aussi

- [`sin`](/fr/v1/api/number/sin) - Calcule le sinus d'un angle
- [`cos`](/fr/v1/api/number/cos) - Calcule le cosinus d'un angle
- [`atan`](/fr/v1/api/number/atan) - Calcule l'arc tangente

## Sources

- [MDN Web Docs - Math.tan()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/tan)
