---
outline: [2, 3]
prev:
  text: "length"
  link: "/fr/v1/api/clean/primitives/operators/length"
next:
  text: "lengthGreaterThan"
  link: "/fr/v1/api/clean/primitives/operators/lengthGreaterThan"
---

# lengthEqual

`lengthEqual()` teste si la longueur d'un `String` est égale à une valeur. Supporte la version currifiée.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/clean/primitives/operators/lengthEqual/tryout.doc.ts"
  majorVersion="v1"
  height="320px"
/>

## Syntaxe

### Signature classique

```typescript
function lengthEqual(
	primitive: String, 
	length: Number | number
): boolean
```

### Signature currifiée

```typescript
function lengthEqual(
	length: Number | number
): (primitive: String) => boolean
```

## Paramètres

- `primitive` : `String` wrappé (signature classique uniquement).
- `length` : longueur attendue.

## Valeur de retour

Un boolean indiquant si `primitive.length === length`.

## Voir aussi

- [`length`](/fr/v1/api/clean/primitives/operators/length)
