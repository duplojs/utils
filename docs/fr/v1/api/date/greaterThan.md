---
outline: [2, 3]
description: "La fonction greaterThan() vérifie si un TheDate est strictement supérieur à un seuil."
prev:
  text: "greater"
  link: "/fr/v1/api/date/greater"
next:
  text: "less"
  link: "/fr/v1/api/date/less"
---

# greaterThan

La fonction **`greaterThan()`** vérifie si un `TheDate` est strictement supérieur à un seuil.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/date/greaterThan/tryout.doc.ts"
  majorVersion="v1"
  height="187px"
/>

## Syntaxe

### Signature classique

```typescript
function greaterThan<
	GenericInput extends TheDate | SerializedTheDate
>(
	input: GenericInput,
	threshold: TheDate | SerializedTheDate
): boolean
```

### Signature currifiée

```typescript
function greaterThan<
	GenericInput extends TheDate | SerializedTheDate
>(
	threshold: TheDate | SerializedTheDate
): (input: GenericInput) => boolean
```

## Paramètres

- `threshold` : Date de référence.
- `input` : `TheDate` ou `SerializedTheDate`.

## Valeur de retour

`true` si `input` est strictement supérieure au seuil.

## Voir aussi

- [`greater`](/fr/v1/api/date/greater)
- [`lessThan`](/fr/v1/api/date/lessThan)
