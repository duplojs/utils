---
outline: [2, 3]
prev:
  text: "greaterTime"
  link: "/fr/v1/api/date/greaterTime"
next:
  text: "lessTime"
  link: "/fr/v1/api/date/lessTime"
---

# greaterThanTime

Vérifie qu'un `TheTime` est strictement supérieur à un seuil.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/date/greaterThanTime/tryout.doc.ts"
  majorVersion="v1"
  height="187px"
/>

## Syntaxe

### Signature classique

```typescript
function greaterThanTime<
	GenericInput extends TheTime | SerializedTheTime
>(
	input: GenericInput,
	threshold: TheTime | SerializedTheTime
): boolean
```

### Signature currifiée

```typescript
function greaterThanTime<
	GenericInput extends TheTime | SerializedTheTime
>(
	threshold: TheTime | SerializedTheTime
): (input: GenericInput) => boolean
```

## Paramètres

- `threshold` : Durée limite.
- `input` : `TheTime` ou `SerializedTheTime`.

## Valeur de retour

`true` si `input` est strictement supérieure au seuil.

## Voir aussi

- [`greaterTime`](/fr/v1/api/date/greaterTime)
- [`lessThanTime`](/fr/v1/api/date/lessThanTime)
