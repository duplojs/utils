---
outline: [2, 3]
description: "La fonction greater() vérifie si un TheDate est strictement supérieur à un seuil."
prev:
  text: "subtractTime"
  link: "/fr/v1/api/date/subtractTime"
next:
  text: "greaterThan"
  link: "/fr/v1/api/date/greaterThan"
---

# greater

La fonction **`greater()`** vérifie si un `TheDate` est strictement supérieur à un seuil.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/date/greater/tryout.doc.ts"
  majorVersion="v1"
  height="300px"
/>

## Syntaxe

### Signature classique

```typescript
function greater<
	GenericInput extends TheDate
>(
	input: GenericInput,
	threshold: TheDate
): boolean
```

### Signature currifiée

```typescript
function greater<
	GenericInput extends TheDate
>(
	threshold: TheDate
): (input: GenericInput) => boolean
```

## Paramètres

- `threshold` : Date de comparaison.
- `input` : Date testée (signature classique).

## Valeur de retour

`true` si `input` est strictement après `threshold`.

## Voir aussi

- [`greaterThan`](/fr/v1/api/date/greaterThan)
- [`less`](/fr/v1/api/date/less)
