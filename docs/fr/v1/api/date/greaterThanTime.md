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

Vérifie qu'un `TheTime` est supérieur ou égal à un seuil.

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
	GenericInput extends TheTime
>(
	input: GenericInput,
	threshold: TheTime
): boolean
```

### Signature currifiée

```typescript
function greaterThanTime<
	GenericInput extends TheTime
>(
	threshold: TheTime
): (input: GenericInput) => boolean
```

## Paramètres

- `threshold` : Durée limite.
- `input` : Durée à comparer.

## Valeur de retour

`true` si `input` est supérieure ou égale au seuil.

## Voir aussi

- [`greaterTime`](/fr/v1/api/date/greaterTime)
- [`lessThanTime`](/fr/v1/api/date/lessThanTime)
