---
outline: [2, 3]
prev:
  text: "lengthEqual"
  link: "/fr/v1/api/clean/lengthEqual"
next:
  text: "lengthLessThan"
  link: "/fr/v1/api/clean/lengthLessThan"
---

# lengthGreaterThan

`lengthGreaterThan()` teste si la longueur d'un `String` est strictement supérieure à une valeur. Supporte la version currifiée.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/clean/primitives/operators/lengthGreaterThan/tryout.doc.ts"
  majorVersion="v1"
  height="320px"
/>

## Syntaxe

### Signature classique

```typescript
function lengthGreaterThan(
	primitive: String, 
	length: Number | number
): boolean
```

### Signature currifiée

```typescript
function lengthGreaterThan(
	length: Number | number
): (primitive: String) => boolean
```

## Paramètres

- `primitive` : `String` wrappé (signature classique uniquement).
- `length` : seuil de comparaison.

## Valeur de retour

Un boolean indiquant si `primitive.length > length`.

## Voir aussi

- [`length`](/fr/v1/api/clean/primitives/operators/length)
