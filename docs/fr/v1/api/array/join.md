---
outline: [2, 3]
description: "La méthode join() concatène les éléments d'un tableau de chaînes en insérant un séparateur entre chacun d'eux. Elle respecte la structure des tuples pour calculer statiquement la chaîne résultante."
prev:
  text: "reduceRight"
  link: "/fr/v1/api/array/reduceRight"
next:
  text: "group"
  link: "/fr/v1/api/array/group"
---

# join

La méthode **`join()`** concatène les éléments d'un tableau de chaînes en insérant un séparateur entre chacun d'eux. Elle respecte la structure des tuples pour calculer statiquement la chaîne résultante.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/array/join/tryout.doc.ts"
  majorVersion="v1"
  height="260px"
/>

## Syntaxe

### Signature classique

```typescript
function join<
	GenericInput extends readonly string[], 
	GenericSeparator extends string
>(
	input: GenericInput,
	separator: GenericSeparator
): GenericInput extends AnyTuple ? ComputeResult<GenericInput, GenericSeparator> : string
```

### Signature currifiée

```typescript
function join<
	GenericInput extends readonly string[], 
	GenericSeparator extends string
>(
	separator: GenericSeparator
): (
	input: GenericInput
) => GenericInput extends AnyTuple ? ComputeResult<GenericInput, GenericSeparator> : string
```

## Paramètres

- `input` : Le tableau (ou tuple) de chaînes à concaténer.
- `separator` : La chaîne insérée entre chaque élément.

## Valeur de retour

Une chaîne contenant tous les éléments séparés par `separator`. Lorsque l'entrée est un tuple, le résultat est connu statiquement (`ComputeResult`).

## Voir aussi

- [`reduce`](/fr/v1/api/array/reduce) - Agrège un tableau avec un état libre
- [`group`](/fr/v1/api/array/group) - Regroupe plusieurs valeurs par clé

## Sources

- [MDN Web Docs - Array.prototype.join()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
