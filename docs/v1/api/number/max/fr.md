---
outline: [2, 3]
prev:
  text: "trunc"
  link: "/v1/api/number/trunc/fr"
next:
  text: "min"
  link: "/v1/api/number/min/fr"
---

# max

La méthode **`max()`** retourne la plus grande valeur parmi les nombres fournis. Elle permet de comparer plusieurs valeurs et d'obtenir le maximum.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/number/max/examples/tryout.doc.ts"
  majorVersion="v1"
  height="300px"
/>

## Syntaxe

```typescript
function max<
	GenericInput extends AnyTuple<number>
>(
	input: GenericInput
): number
```

## Paramètres

- `input` : Tuple de nombres à comparer.

## Valeur de retour

Le plus grand nombre du tuple fourni.

## Voir aussi

- [`min`](/v1/api/number/min/fr) - Retourne la valeur minimale
- [`clamp`](/v1/api/number/clamp/fr) - Limite un nombre dans un intervalle

## Sources

- [MDN Web Docs - Math.max()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/max)
