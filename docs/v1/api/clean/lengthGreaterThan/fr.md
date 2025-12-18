---
outline: [2, 3]
prev:
  text: "lengthEqual"
  link: "/v1/api/clean/lengthEqual/fr"
next:
  text: "lengthLessThan"
  link: "/v1/api/clean/lengthLessThan/fr"
---

# lengthGreaterThan

`lengthGreaterThan()` teste si la longueur d'un `String` est strictement supérieure à une valeur. Supporte la version currifiée.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/clean/lengthGreaterThan/examples/tryout.doc.ts"
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

- [`length`](/v1/api/clean/length/fr)
