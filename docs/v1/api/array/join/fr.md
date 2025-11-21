---
outline: [2, 3]
prev:
  text: "reduceRight"
  link: "/v1/api/array/reduceRight/fr"
next:
  text: "group"
  link: "/v1/api/array/group/fr"
---

# join

La méthode **`join()`** concatène les éléments d'un tableau de chaînes en insérant un séparateur entre chacun d'eux. Elle respecte la structure des tuples pour calculer statiquement la chaîne résultante.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/array/join/examples/tryout.doc.ts"
  majorVersion="v1"
  height="260px"
/>

## Syntaxe

### Signature classique

```typescript
function join<GenericArray extends readonly string[], GenericSeparator extends string>(
	array: GenericArray,
	separator: GenericSeparator
): GenericArray extends AnyTuple ? ComputeResult<GenericArray, GenericSeparator> : string
```

### Signature currifiée

```typescript
function join<GenericArray extends readonly string[], GenericSeparator extends string>(
	separator: GenericSeparator
): (
	array: GenericArray
) => GenericArray extends AnyTuple ? ComputeResult<GenericArray, GenericSeparator> : string
```

## Paramètres

- `array` : Le tableau (ou tuple) de chaînes à concaténer.
- `separator` : La chaîne insérée entre chaque élément.

## Valeur de retour

Une chaîne contenant tous les éléments séparés par `separator`. Lorsque l'entrée est un tuple, le résultat est connu statiquement (`ComputeResult`).

## Voir aussi

- [`reduce`](/v1/api/array/reduce/fr) - Agrège un tableau avec un état libre
- [`group`](/v1/api/array/group/fr) - Regroupe plusieurs valeurs par clé

## Sources

- [MDN Web Docs - Array.prototype.join()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
