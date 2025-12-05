---
outline: [2, 3]
prev:
  text: "max"
  link: "/v1/api/number/max/fr"
next:
  text: "clamp"
  link: "/v1/api/number/clamp/fr"
---

# min

La méthode **`min()`** retourne la plus petite valeur parmi les nombres fournis. Elle permet de comparer plusieurs valeurs et d'obtenir le minimum.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/number/min/examples/tryout.doc.ts"
  majorVersion="v1"
  height="200px"
/>

## Syntaxe

### Signature classique

```typescript
function min<
	GenericInput extends number
>(
	input: GenericInput,
	comparison: number
): number
```

### Signature currifiée

```typescript
function min<
	GenericInput extends number
>(
	comparison: number
): (input: GenericInput) => number
```

## Paramètres

- `input` : La valeur à comparer (uniquement en signature classique).
- `comparison` : Le nombre de comparaison.

## Valeur de retour

**Signature classique** : retourne le plus petit des deux nombres.

**Signature currifiée** : retourne une fonction qui prend une valeur et retourne le plus petit des deux nombres.

## Voir aussi

- [`max`](/v1/api/number/max/fr) - Retourne la valeur maximale
- [`clamp`](/v1/api/number/clamp/fr) - Limite un nombre dans un intervalle

## Sources

- [MDN Web Docs - Math.min()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/min)
