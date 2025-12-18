---
outline: [2, 3]
prev:
  text: "lessThan"
  link: "/v1/api/clean/primitives/operators/lessThan/fr"
next:
  text: "length"
  link: "/v1/api/clean/primitives/operators/length/fr"
---

# concat

`concat()` concatène un `String` (wrappé) avec une ou plusieurs chaînes (wrappées ou brutes). Supporte la version currifiée.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/clean/primitives/operators/concat/examples/tryout.doc.ts"
  majorVersion="v1"
  height="320px"
/>

## Syntaxe

### Signature classique

```typescript
function concat(
	input: String, 
	...textsRest: (String | string)[]
): String
```

### Signature currifiée

```typescript
function concat(
	text: String | string
): (input: String) => String
```

## Paramètres

- `input` : chaîne de base (signature classique uniquement).
- `textsRest` : éléments à concaténer.
- `text` : premier élément à concaténer (signature currifiée uniquement).

## Valeur de retour

Un `String` wrappé contenant la concaténation.

## Voir aussi

- [`length`](/v1/api/clean/primitives/operators/length/fr)
