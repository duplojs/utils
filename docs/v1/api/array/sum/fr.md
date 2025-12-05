---
outline: [2, 3]
prev:
  text: "group"
  link: "/v1/api/array/group/fr"
next:
  text: "minOf"
  link: "/v1/api/array/minOf/fr"
---

# sum

La méthode **`sum()`** additionne toutes les valeurs numériques d'un tableau immuable et retourne la somme totale sous forme de `number`.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/array/sum/examples/tryout.doc.ts"
  majorVersion="v1"
  height="310px"
/>

## Syntaxe

```typescript
function sum<
	GenericInput extends readonly number[]
>(
	input: GenericInput
): number
```

## Paramètres

- `input` : Tableau de nombres à additionner.

## Valeur de retour

La somme totale de tous les éléments du tableau. Lorsque l'entrée est un tuple, TypeScript peut inférer une somme littérale si le compilateur est capable de la calculer.

## Voir aussi

- [`reduce`](/v1/api/array/reduce/fr) - Pour implémenter des agrégations personnalisées
- [`group`](/v1/api/array/group/fr) - Pour regrouper puis résumer des valeurs

## Sources

- [MDN Web Docs - Array.prototype.reduce()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
