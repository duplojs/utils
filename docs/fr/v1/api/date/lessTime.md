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

La fonction **`lessTime()`** vérifie si un `TheTime` est inférieur ou égal à un seuil.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/date/lessTime/tryout.doc.ts"
  majorVersion="v1"
  height="187px"
/>

## Syntaxe

### Signature classique

```typescript
function lessTime<
	GenericInput extends TheTime | SerializedTheTime
>(
	input: GenericInput,
	threshold: TheTime | SerializedTheTime
): boolean
```

### Signature currifiée

```typescript
function lessTime<
	GenericInput extends TheTime | SerializedTheTime
>(
	threshold: TheTime | SerializedTheTime
): (input: GenericInput) => boolean
```

## Paramètres

- `threshold` : Durée limite.
- `input` : `TheTime` ou `SerializedTheTime`.

## Valeur de retour

`true` si `input` est inférieure ou égale au seuil.

## Voir aussi

- [`lessThanTime`](/fr/v1/api/date/lessThanTime)
- [`greaterTime`](/fr/v1/api/date/greaterTime)
