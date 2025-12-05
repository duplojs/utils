---
outline: [2, 3]
prev:
  text: "toFixed"
  link: "/v1/api/number/toFixed/fr"
next:
  text: "cos"
  link: "/v1/api/number/cos/fr"
---

# sin

La méthode **`sin()`** retourne le sinus d'un angle exprimé en radians. Le sinus est une fonction trigonométrique fondamentale qui retourne la coordonnée y d'un point sur le cercle unité.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/number/sin/examples/tryout.doc.ts"
  majorVersion="v1"
  height="250px"
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

- [`cos`](/v1/api/number/cos/fr) - Calcule le cosinus d'un angle
- [`tan`](/v1/api/number/tan/fr) - Calcule la tangente d'un angle
- [`asin`](/v1/api/number/asin/fr) - Calcule l'arc sinus

## Sources

- [MDN Web Docs - Math.sin()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/sin)
