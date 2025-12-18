---
outline: [2, 3]
prev:
  text: "lengthGreaterThan"
  link: "/v1/api/clean/primitives/operators/lengthGreaterThan/fr"
next:
  text: "dateGreaterThan"
  link: "/v1/api/clean/primitives/operators/dateGreaterThan/fr"
---

# lengthLessThan

`lengthLessThan()` teste si la longueur d'un `String` est strictement inférieure à une valeur. Supporte la version currifiée.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/clean/lengthLessThan/examples/tryout.doc.ts"
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

- [`length`](/v1/api/clean/length/fr)
