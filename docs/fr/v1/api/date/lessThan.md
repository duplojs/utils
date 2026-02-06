---
outline: [2, 3]
description: "Vérifie qu'un TheDate est strictement inférieur à un seuil."
prev:
  text: "less"
  link: "/fr/v1/api/date/less"
next:
  text: "between"
  link: "/fr/v1/api/date/between"
---

# lessThan

Vérifie qu'un `TheDate` est strictement inférieur à un seuil.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/date/lessThan/tryout.doc.ts"
  majorVersion="v1"
  height="187px"
/>

## Syntaxe

### Signature classique

```typescript
function lessThan<
	GenericInput extends TheDate | SerializedTheDate
>(
	input: GenericInput,
	threshold: TheDate | SerializedTheDate
): boolean
```

### Signature currifiée

```typescript
function lessThan<
	GenericInput extends TheDate | SerializedTheDate
>(
	threshold: TheDate | SerializedTheDate
): (input: GenericInput) => boolean
```

## Paramètres

- `threshold` : Date limite.
- `input` : `TheDate` ou `SerializedTheDate`.

## Valeur de retour

`true` si `input` est strictement avant le seuil.

## Voir aussi

- [`less`](/fr/v1/api/date/less)
- [`greaterThan`](/fr/v1/api/date/greaterThan)
