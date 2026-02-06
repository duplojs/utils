---
outline: [2, 3]
description: "La fonction greater() vérifie si un TheDate est supérieur ou égal à un seuil."
prev:
  text: "subtractTime"
  link: "/fr/v1/api/date/subtractTime"
next:
  text: "greaterThan"
  link: "/fr/v1/api/date/greaterThan"
---

# greater

La fonction **`greater()`** vérifie si un `TheDate` est supérieur ou égal à un seuil.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/date/greater/tryout.doc.ts"
  majorVersion="v1"
  height="187px"
/>

## Syntaxe

### Signature classique

```typescript
function greater<
	GenericInput extends TheDate | SerializedTheDate
>(
	input: GenericInput,
	threshold: TheDate | SerializedTheDate
): boolean
```

### Signature currifiée

```typescript
function greater<
	GenericInput extends TheDate | SerializedTheDate
>(
	threshold: TheDate | SerializedTheDate
): (input: GenericInput) => boolean
```

## Paramètres

- `threshold` : Date de comparaison.
- `input` : `TheDate` ou `SerializedTheDate`.

## Valeur de retour

`true` si `input` est après ou égale à `threshold`.

## Voir aussi

- [`greaterThan`](/fr/v1/api/date/greaterThan)
- [`less`](/fr/v1/api/date/less)
