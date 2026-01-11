---
outline: [2, 3]
description: "La fonction greaterThan() vérifie si un TheDate est supérieur ou égal à un seuil."
prev:
  text: "greater"
  link: "/fr/v1/api/date/greater"
next:
  text: "less"
  link: "/fr/v1/api/date/less"
---

# greaterThan

La fonction **`greaterThan()`** vérifie si un `TheDate` est supérieur ou égal à un seuil.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/date/greaterThan/tryout.doc.ts"
  majorVersion="v1"
  height="300px"
/>

## Syntaxe

### Signature classique

```typescript
function greaterThan<
	GenericInput extends TheDate
>(
	input: GenericInput,
	threshold: TheDate
): boolean
```

### Signature currifiée

```typescript
function greaterThan<
	GenericInput extends TheDate
>(
	threshold: TheDate
): (input: GenericInput) => boolean
```

## Paramètres

- `threshold` : Date de référence.
- `input` : Date testée.

## Valeur de retour

`true` si `input` est supérieure ou égale au seuil.

## Voir aussi

- [`greater`](/fr/v1/api/date/greater)
- [`lessThan`](/fr/v1/api/date/lessThan)
