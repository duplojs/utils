---
outline: [2, 3]
description: "La méthode subtract() soustrait un nombre d'un autre. Elle supporte deux formes d'utilisation : une forme curryfiée pour la composition fonctionnelle et une forme directe pour un calcul immédiat."
prev:
  text: "add"
  link: "/fr/v1/api/number/add"
next:
  text: "multiply"
  link: "/fr/v1/api/number/multiply"
---

# subtract

La méthode **`subtract()`** soustrait un nombre d'un autre. Elle supporte deux formes d'utilisation : une forme curryfiée pour la composition fonctionnelle et une forme directe pour un calcul immédiat.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/number/subtract/tryout.doc.ts"
  majorVersion="v1"
  height="200px"
/>

## Syntaxe

### Signature classique

```typescript
function subtract<
	GenericInput extends number
>(
	input: GenericInput,
	subtrahend: number
): number
```

### Signature currifiée

```typescript
function subtract<
	GenericInput extends number
>(
	subtrahend: number
): (input: GenericInput) => number
```

## Paramètres

- `input` : Le nombre duquel soustraire (uniquement en signature classique).
- `subtrahend` : Le nombre à soustraire.

## Valeur de retour

retourne le résultat de la soustraction (`value - subtrahend`).

## Voir aussi

- [`add`](/fr/v1/api/number/add) - Additionne deux nombres
- [`negate`](/fr/v1/api/number/negate) - Inverse le signe d'un nombre
- [`abs`](/fr/v1/api/number/abs) - Retourne la valeur absolue d'un nombre

## Sources

- [MDN Web Docs - Soustraction (-)](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Subtraction)
