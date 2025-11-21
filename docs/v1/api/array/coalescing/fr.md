---
outline: [2, 3]
prev:
  text: "findAndSpliceReplace"
  link: "/v1/api/array/findAndSpliceReplace/fr"
next:
  text: "Array"
  link: "/v1/api/array/fr"
---

# coalescing

La fonction **`coalescing()`** parcourt un tableau (ou une liste d'arguments) et retourne la première valeur non `null` et non `undefined`.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/array/coalescing/examples/tryout.doc.ts"
  majorVersion="v1"
  height="260px"
/>

## Syntaxe

```typescript
function coalescing<GenericValue extends AnyValue>(
	value: GenericValue
): ArrayCoalescing<GenericValue>
```

`ArrayCoalescing` infère la première valeur définie présente dans le tableau, ce qui permet de conserver un typage précis.

## Paramètres

- `value` : Tableau ou tuple contenant des valeurs possiblement `nullish`.

## Valeur de retour

La première valeur non `null`/`undefined`, ou `undefined` si toutes les valeurs sont `nullish`.

## Voir aussi

- [`find`](/v1/api/array/find/fr) - Localise un élément répondant à un prédicat
- [`coalesce` (Number)](/v1/api/number/fr) - Pour d'autres types scalaires

## Sources

- [MDN Web Docs - Nullish coalescing operator](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator)
