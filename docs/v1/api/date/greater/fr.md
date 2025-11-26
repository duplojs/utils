---
outline: [2, 3]
prev:
  text: "subtractMilliseconds"
  link: "/v1/api/date/subtractMilliseconds/fr"
next:
  text: "greaterThan"
  link: "/v1/api/date/greaterThan/fr"
---

# greater

La fonction **`greater()`** vérifie si un `TheDate` est strictement supérieur à un seuil.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/date/greater/examples/tryout.doc.ts"
  majorVersion="v1"
  height="300px"
/>

## Syntaxe

### Signature classique

```typescript
function greater<
	GenericValue extends TheDate
>(
	input: GenericValue,
	threshold: TheDate
): boolean
```

### Signature currifiée

```typescript
function greater<
	GenericValue extends TheDate
>(
	threshold: TheDate
): (input: GenericValue) => boolean
```

## Paramètres

- `threshold` : Date de comparaison.
- `input` : Date testée (signature classique).

## Valeur de retour

`true` si `input` est strictement après `threshold`.

## Voir aussi

- [`greaterThan`](/v1/api/date/greaterThan/fr)
- [`less`](/v1/api/date/less/fr)
