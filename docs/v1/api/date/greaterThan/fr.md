---
outline: [2, 3]
prev:
  text: "greater"
  link: "/v1/api/date/greater/fr"
next:
  text: "less"
  link: "/v1/api/date/less/fr"
---

# greaterThan

La fonction **`greaterThan()`** vérifie si un `TheDate` est supérieur ou égal à un seuil.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/date/greaterThan/examples/tryout.doc.ts"
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

- [`greater`](/v1/api/date/greater/fr)
- [`lessThan`](/v1/api/date/lessThan/fr)
