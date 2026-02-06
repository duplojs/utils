---
outline: [2, 3]
prev:
  text: "betweenThan"
  link: "/fr/v1/api/date/betweenThan"
next:
  text: "greaterThanTime"
  link: "/fr/v1/api/date/greaterThanTime"
---

# greaterTime

La fonction **`greaterTime()`** vérifie si un `TheTime` est supérieur ou égal à un seuil.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/date/greaterTime/tryout.doc.ts"
  majorVersion="v1"
  height="187px"
/>

## Syntaxe

### Signature classique

```typescript
function greaterTime<
	GenericInput extends TheTime | SerializedTheTime
>(
	input: GenericInput,
	threshold: TheTime | SerializedTheTime
): boolean
```

### Signature currifiée

```typescript
function greaterTime<
	GenericInput extends TheTime | SerializedTheTime
>(
	threshold: TheTime | SerializedTheTime
): (input: GenericInput) => boolean
```

## Paramètres

- `threshold` : Durée de comparaison.
- `input` : `TheTime` ou `SerializedTheTime`.

## Valeur de retour

`true` si `input` est supérieure ou égale à `threshold`.

## Voir aussi

- [`greaterThanTime`](/fr/v1/api/date/greaterThanTime)
- [`lessTime`](/fr/v1/api/date/lessTime)
