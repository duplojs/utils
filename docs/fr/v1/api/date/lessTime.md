---
outline: [2, 3]
prev:
  text: "greaterThanTime"
  link: "/fr/v1/api/date/greaterThanTime"
next:
  text: "lessThanTime"
  link: "/fr/v1/api/date/lessThanTime"
---

# lessTime

La fonction **`lessTime()`** vérifie si un `TheTime` est strictement inférieur à un seuil.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/date/lessTime/tryout.doc.ts"
  majorVersion="v1"
  height="300px"
/>

## Syntaxe

### Signature classique

```typescript
function lessTime<
	GenericInput extends TheTime
>(
	input: GenericInput,
	threshold: TheTime
): boolean
```

### Signature currifiée

```typescript
function lessTime<
	GenericInput extends TheTime
>(
	threshold: TheTime
): (input: GenericInput) => boolean
```

## Paramètres

- `threshold` : Durée limite.
- `input` : Durée à comparer.

## Valeur de retour

`true` si `input` est strictement inférieure au seuil.

## Voir aussi

- [`lessThanTime`](/fr/v1/api/date/lessThanTime)
- [`greaterTime`](/fr/v1/api/date/greaterTime)
