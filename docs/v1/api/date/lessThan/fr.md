---
outline: [2, 3]
prev:
  text: "less"
  link: "/v1/api/date/less/fr"
next:
  text: "between"
  link: "/v1/api/date/between/fr"
---

# lessThan

Vérifie qu'un `TheDate` est inférieur ou égal à un seuil.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/date/lessThan/examples/tryout.doc.ts"
  majorVersion="v1"
  height="300px"
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

- [`less`](/v1/api/date/less/fr)
- [`greaterThan`](/v1/api/date/greaterThan/fr)
