---
outline: [2, 3]
description: "Vérifie qu'un TheDate est strictement inférieur à un seuil."
prev:
  text: "greaterThan"
  link: "/fr/v1/api/date/greaterThan"
next:
  text: "lessThan"
  link: "/fr/v1/api/date/lessThan"
---

# less

Vérifie qu'un `TheDate` est strictement inférieur à un seuil.

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
	GenericInput extends TheDate
>(
	input: GenericInput,
	threshold: TheDate
): boolean
```

### Signature currifiée

```typescript
function less<
	GenericInput extends TheDate
>(
	threshold: TheDate
): (input: GenericInput) => boolean
```

## Paramètres

- `threshold` : Date limite.
- `input` : Date testée.

## Valeur de retour

`true` si `input` est avant `threshold`.

## Voir aussi

- [`lessThan`](/fr/v1/api/date/lessThan)
- [`greater`](/fr/v1/api/date/greater)
