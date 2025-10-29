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

```typescript
function add<GenericValue extends number>(
	operand: number,
): (value: GenericValue) => number

function add<GenericValue extends number>(
	value: GenericValue,
	operand: number,
): number
```

## Paramètres

- `value` : Le nombre de base auquel ajouter l'opérande (utilisé dans la forme à deux paramètres).
- `operand` : Le nombre à ajouter à la valeur.

## Valeur de retour

- **Forme currifiée** : Retourne une fonction qui prend une valeur et lui ajoute l'opérande.
- **Forme directe** : Retourne la somme des deux nombres.

## Exemples

### Calculer un total

<MonacoTSEditor
  	src="/v1/api/number/add/examples/calculateTotal.doc.ts"
  	majorVersion="v1"
	height="400px"
/>

### Incrémenter des scores

<MonacoTSEditor
  	src="/v1/api/number/add/examples/incrementScores.doc.ts"
  	majorVersion="v1"
	height="400px"
/>

### Accumuler des valeurs

<MonacoTSEditor
  	src="/v1/api/number/add/examples/accumulateValues.doc.ts"
  	majorVersion="v1"
	height="800px"
/>

## Voir aussi

- [`subtract`](/v1/api/number/subtract/fr) - Soustrait deux nombres
- [`multiply`](/v1/api/number/multiply/fr) - Multiplie deux nombres
- [`divide`](/v1/api/number/divide/fr) - Divise deux nombres

## Sources

- [MDN Web Docs - Addition operator](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Addition)
