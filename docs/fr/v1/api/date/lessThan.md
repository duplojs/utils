---
outline: [2, 3]
description: "Vérifie qu'un TheDate est inférieur ou égal à un seuil."
prev:
  text: "less"
  link: "/fr/v1/api/date/less"
next:
  text: "between"
  link: "/fr/v1/api/date/between"
---

# lessThan

Vérifie qu'un `TheDate` est inférieur ou égal à un seuil.

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
	GenericInput extends TheDate
>(
	input: GenericInput,
	threshold: TheDate
): boolean
```

### Signature currifiée

```typescript
function lessThan<
	GenericInput extends TheDate
>(
	threshold: TheDate
): (input: GenericInput) => boolean
```

## Paramètres

- `threshold` : Date limite.
- `input` : Date à comparer.

## Valeur de retour

`true` si `input` est avant ou égale au seuil.

## Voir aussi

- [`less`](/fr/v1/api/date/less)
- [`greaterThan`](/fr/v1/api/date/greaterThan)
