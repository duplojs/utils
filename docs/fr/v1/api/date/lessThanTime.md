---
outline: [2, 3]
prev:
  text: "lessTime"
  link: "/fr/v1/api/date/lessTime"
next:
  text: "betweenTime"
  link: "/fr/v1/api/date/betweenTime"
---

# lessThanTime

Vérifie qu'un `TheTime` est strictement inférieur à un seuil.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/date/lessThanTime/tryout.doc.ts"
  majorVersion="v1"
  height="187px"
/>

## Syntaxe

### Signature classique

```typescript
function lessThanTime<
	GenericInput extends TheTime | SerializedTheTime
>(
	input: GenericInput,
	threshold: TheTime | SerializedTheTime
): boolean
```

### Signature currifiée

```typescript
function lessThanTime<
	GenericInput extends TheTime | SerializedTheTime
>(
	threshold: TheTime | SerializedTheTime
): (input: GenericInput) => boolean
```

## Paramètres

- `threshold` : Durée limite.
- `input` : `TheTime` ou `SerializedTheTime`.

## Valeur de retour

`true` si `input` est strictement inférieure au seuil.

## Voir aussi

- [`lessTime`](/fr/v1/api/date/lessTime)
- [`greaterThanTime`](/fr/v1/api/date/greaterThanTime)
