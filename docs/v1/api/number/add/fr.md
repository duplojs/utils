---
outline: [2, 3]
next:
  text: "subtract"
  link: "/v1/api/number/subtract/fr"
prev:
  text: "Number"
  link: "/v1/api/number/fr"
---

# add

La méthode **`add()`** additionne deux nombres ou crée une fonction d'addition partielle. Elle peut être utilisée de manière currifiée pour faciliter la composition fonctionnelle.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/number/add/examples/tryout.doc.ts"
  majorVersion="v1"
  height="200px"
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

**Signature classique** : retourne la somme des deux nombres.

**Signature currifiée** : retourne une fonction qui prend une valeur et lui ajoute l'opérande.

## Voir aussi

- [`subtract`](/v1/api/number/subtract/fr) - Soustrait deux nombres
- [`multiply`](/v1/api/number/multiply/fr) - Multiplie deux nombres
- [`divide`](/v1/api/number/divide/fr) - Divise deux nombres

## Sources

- [MDN Web Docs - Addition operator](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Addition)
