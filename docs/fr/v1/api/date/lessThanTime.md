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

Vérifie qu'un `TheTime` est inférieur ou égal à un seuil.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/date/lessThanTime/tryout.doc.ts"
  majorVersion="v1"
  height="300px"
/>

## Syntaxe

### Signature classique

```typescript
function lessThanTime<
	GenericInput extends TheTime
>(
	input: GenericInput,
	threshold: TheTime
): boolean
```

### Signature currifiée

```typescript
function lessThanTime<
	GenericInput extends TheTime
>(
	threshold: TheTime
): (input: GenericInput) => boolean
```

## Paramètres

- `threshold` : Durée limite.
- `input` : Durée à comparer.

## Valeur de retour

`true` si `input` est inférieure ou égale au seuil.

## Voir aussi

- [`lessTime`](/fr/v1/api/date/lessTime)
- [`greaterThanTime`](/fr/v1/api/date/greaterThanTime)
