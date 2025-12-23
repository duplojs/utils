---
outline: [2, 3]
next:
  text: "add"
  link: "/fr/v1/api/clean/primitives/operators/operators/add"
---

# equal

`equal()` compare deux primitives wrappées (ou une primitive et une valeur brute) et renvoie un **type guard**. Utile pour du filtrage ou du matching sur des valeurs métiers.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/clean/primitives/operators/equal/tryout.doc.ts"
  majorVersion="v1"
  height="350px"
/>

## Syntaxe

### Signature classique

```typescript
function equal(
	input: Primitives, 
	value: Primitives
): boolean
```

### Signature currifiée

```typescript
function equal(
	value: Primitives
): (input: Primitives) => boolean
```

## Paramètres

- `input` : primitive à comparer (signature classique uniquement).
- `value` : valeur de comparaison (primitive wrappée ou valeur brute compatible).

## Valeur de retour

Un boolean (type guard côté TypeScript) indiquant si les valeurs unwrap sont strictement égales.

## Voir aussi

- [`greaterThan`](/fr/v1/api/clean/primitives/operators/greaterThan)
- [`lessThan`](/fr/v1/api/clean/primitives/operators/lessThan)
