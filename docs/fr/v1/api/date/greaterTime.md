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

La fonction **`greaterTime()`** vérifie si un `TheTime` est strictement supérieur à un seuil.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/date/greaterTime/tryout.doc.ts"
  majorVersion="v1"
  height="300px"
/>

## Syntaxe

### Signature classique

```typescript
function greaterTime<
	GenericInput extends TheTime
>(
	input: GenericInput,
	threshold: TheTime
): boolean
```

### Signature currifiée

```typescript
function greaterTime<
	GenericInput extends TheTime
>(
	threshold: TheTime
): (input: GenericInput) => boolean
```

## Paramètres

- `threshold` : Durée de comparaison.
- `input` : Durée testée (signature classique).

## Valeur de retour

`true` si `input` est strictement supérieure à `threshold`.

## Voir aussi

- [`greaterThanTime`](/fr/v1/api/date/greaterThanTime)
- [`lessTime`](/fr/v1/api/date/lessTime)
