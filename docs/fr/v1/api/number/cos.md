---
outline: [2, 3]
description: "La méthode cos() retourne le cosinus d'un angle exprimé en radians. Le cosinus est une fonction trigonométrique fondamentale qui retourne la coordonnée x d'un point sur le cercle unité."
prev:
  text: "sin"
  link: "/fr/v1/api/number/sin"
next:
  text: "tan"
  link: "/fr/v1/api/number/tan"
---

# cos

La méthode **`cos()`** retourne le cosinus d'un angle exprimé en radians. Le cosinus est une fonction trigonométrique fondamentale qui retourne la coordonnée x d'un point sur le cercle unité.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/number/cos/tryout.doc.ts"
  majorVersion="v1"
  height="250px"
/>

## Syntaxe

```typescript
function cos<
	GenericInput extends number,
>(input: GenericInput): number
```

## Paramètres

- `input` : L'angle en radians dont on souhaite calculer le cosinus.

## Valeur de retour

Le cosinus de l'angle donné, une valeur comprise entre -1 et 1.

## Voir aussi

- [`sin`](/fr/v1/api/number/sin) - Calcule le sinus d'un angle
- [`tan`](/fr/v1/api/number/tan) - Calcule la tangente d'un angle
- [`acos`](/fr/v1/api/number/acos) - Calcule l'arc cosinus

## Sources

- [MDN Web Docs - Math.cos()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/cos)
