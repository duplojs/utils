---
outline: [2, 3]
prev:
  text: "greaterThan"
  link: "/v1/api/date/greaterThan/fr"
next:
  text: "lessThan"
  link: "/v1/api/date/lessThan/fr"
---

# less

Vérifie qu'un `TheDate` est strictement inférieur à un seuil.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/date/less/examples/tryout.doc.ts"
  majorVersion="v1"
  height="300px"
/>

## Syntaxe

### Signature classique

```typescript
function less<
	GenericValue extends TheDate
>(
	input: GenericValue,
	threshold: TheDate
): boolean
```

### Signature currifiée

```typescript
function less<
	GenericValue extends TheDate
>(
	threshold: TheDate
): (input: GenericValue) => boolean
```

## Paramètres

- `threshold` : Date limite.
- `input` : Date testée.

## Valeur de retour

`true` si `input` est avant `threshold`.

## Voir aussi

- [`lessThan`](/v1/api/date/lessThan/fr)
- [`greater`](/v1/api/date/greater/fr)
