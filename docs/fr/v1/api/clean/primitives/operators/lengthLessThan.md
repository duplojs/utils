---
outline: [2, 3]
prev:
  text: "lengthGreaterThan"
  link: "/fr/v1/api/clean/primitives/operators/lengthGreaterThan"
next:
  text: "dateGreaterThan"
  link: "/fr/v1/api/clean/primitives/operators/dateGreaterThan"
---

# lengthLessThan

`lengthLessThan()` teste si la longueur d'un `String` est strictement inférieure à une valeur. Supporte la version currifiée.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/clean/primitives/operators/lengthLessThan/tryout.doc.ts"
  majorVersion="v1"
  height="320px"
/>

## Syntaxe

### Signature classique

```typescript
function lengthLessThan(
	primitive: String, 
	length: Number | number
): boolean
```

### Signature currifiée

```typescript
function lengthLessThan(
	length: Number | number
): (primitive: String) => boolean
```

## Paramètres

- `primitive` : `String` wrappé (signature classique uniquement).
- `length` : seuil de comparaison.

## Valeur de retour

Un boolean indiquant si `primitive.length < length`.

## Voir aussi

- [`length`](/fr/v1/api/clean/primitives/operators/length)
