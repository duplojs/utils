---
outline: [2, 3]
description: "La méthode sin() retourne le sinus d'un angle exprimé en radians. Le sinus est une fonction trigonométrique fondamentale qui retourne la coordonnée y d'un point sur le cercle unité."
prev:
  text: "toFixed"
  link: "/fr/v1/api/number/toFixed"
next:
  text: "cos"
  link: "/fr/v1/api/number/cos"
---

# sin

La méthode **`sin()`** retourne le sinus d'un angle exprimé en radians. Le sinus est une fonction trigonométrique fondamentale qui retourne la coordonnée y d'un point sur le cercle unité.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/number/sin/tryout.doc.ts"
  majorVersion="v1"
  height="187px"
/>

## Syntaxe

```typescript
function sin<
	GenericInput extends number,
>(
	input: GenericInput
): number
```

## Paramètres

- `input` : L'angle en radians dont on souhaite calculer le sinus.

## Valeur de retour

Le sinus de l'angle donné, une valeur comprise entre -1 et 1.

## Voir aussi

- [`cos`](/fr/v1/api/number/cos) - Calcule le cosinus d'un angle
- [`tan`](/fr/v1/api/number/tan) - Calcule la tangente d'un angle
- [`asin`](/fr/v1/api/number/asin) - Calcule l'arc sinus

## Sources

- [MDN Web Docs - Math.sin()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/sin)
