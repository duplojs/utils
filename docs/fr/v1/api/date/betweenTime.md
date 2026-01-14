---
outline: [2, 3]
prev:
  text: "lessThanTime"
  link: "/fr/v1/api/date/lessThanTime"
next:
  text: "betweenThanTime"
  link: "/fr/v1/api/date/betweenThanTime"
---

# betweenTime

Vérifie qu'un `TheTime` est strictement compris entre deux bornes (`greater` puis `less`).

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/date/betweenTime/tryout.doc.ts"
  majorVersion="v1"
  height="208px"
/>

## Syntaxe

### Signature classique

```typescript
function betweenTime<
	GenericInput extends TheTime
>(
	input: GenericInput,
	greater: TheTime,
	less: TheTime
): boolean
```

### Signature currifiée

```typescript
function betweenTime<
	GenericInput extends TheTime
>(
	greater: TheTime,
	less: TheTime
): (input: GenericInput) => boolean
```

## Paramètres

- `greater` : Borne inférieure (exclusive).
- `less` : Borne supérieure (exclusive).
- `input` : Durée à tester.

## Valeur de retour

`true` si l'entrée se situe strictement entre les deux bornes.

## Voir aussi

- [`betweenThanTime`](/fr/v1/api/date/betweenThanTime)
- [`greaterTime`](/fr/v1/api/date/greaterTime)
