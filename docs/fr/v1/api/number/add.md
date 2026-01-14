---
outline: [2, 3]
description: "La méthode add() additionne deux nombres ou crée une fonction d'addition partielle. Elle peut être utilisée de manière currifiée pour faciliter la composition fonctionnelle."
next:
  text: "subtract"
  link: "/fr/v1/api/number/subtract"
prev:
  text: "Number"
  link: "/fr/v1/api/number/"
---

# add

La méthode **`add()`** additionne deux nombres ou crée une fonction d'addition partielle. Elle peut être utilisée de manière currifiée pour faciliter la composition fonctionnelle.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/number/add/tryout.doc.ts"
  majorVersion="v1"
  height="166px"
/>

## Syntaxe

### Signature classique

```typescript
function add<
	GenericInput extends number
>(
	input: GenericInput,
	operand: number
): number
```

### Signature currifiée

```typescript
function add<
	GenericInput extends number
>(
	operand: number
): (input: GenericInput) => number
```

## Paramètres

- `input` : Le nombre de base auquel ajouter l'opérande (uniquement en signature classique).
- `operand` : Le nombre à ajouter à la valeur.

## Valeur de retour

retourne la somme des deux nombres (`input + operand`).

## Voir aussi

- [`subtract`](/fr/v1/api/number/subtract) - Soustrait deux nombres
- [`multiply`](/fr/v1/api/number/multiply) - Multiplie deux nombres
- [`divide`](/fr/v1/api/number/divide) - Divise deux nombres

## Sources

- [MDN Web Docs - Addition operator](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Addition)
