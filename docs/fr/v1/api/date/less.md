---
outline: [2, 3]
description: "Vérifie qu'un TheDate est inférieur ou égal à un seuil."
prev:
  text: "greaterThan"
  link: "/fr/v1/api/date/greaterThan"
next:
  text: "lessThan"
  link: "/fr/v1/api/date/lessThan"
---

# less

Vérifie qu'un `TheDate` est inférieur ou égal à un seuil.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/date/less/tryout.doc.ts"
  majorVersion="v1"
  height="187px"
/>

## Syntaxe

### Signature classique

```typescript
function less<
	GenericInput extends TheDate | SerializedTheDate
>(
	input: GenericInput,
	threshold: TheDate | SerializedTheDate
): boolean
```

### Signature currifiée

```typescript
function less<
	GenericInput extends TheDate | SerializedTheDate
>(
	threshold: TheDate | SerializedTheDate
): (input: GenericInput) => boolean
```

## Paramètres

- `threshold` : Date limite.
- `input` : `TheDate` ou `SerializedTheDate`.

## Valeur de retour

`true` si `input` est avant ou égale à `threshold`.

## Voir aussi

- [`lessThan`](/fr/v1/api/date/lessThan)
- [`greater`](/fr/v1/api/date/greater)
