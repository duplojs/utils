---
outline: [2, 3]
prev:
  text: "lessThan"
  link: "/v1/api/date/lessThan/fr"
next:
  text: "betweenThan"
  link: "/v1/api/date/betweenThan/fr"
---

# between

Vérifie qu'un `TheDate` est strictement compris entre deux bornes (`greater` puis `less`).

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/date/between/examples/tryout.doc.ts"
  majorVersion="v1"
  height="320px"
/>

## Syntaxe

### Signature classique

```typescript
function between<
	GenericInput extends TheDate
>(
	input: GenericInput,
	greater: TheDate,
	less: TheDate
): boolean
```

### Signature currifiée

```typescript
function between<
	GenericInput extends TheDate
>(
	greater: TheDate,
	less: TheDate
): (input: GenericInput) => boolean
```

## Paramètres

- `greater` : Borne inférieure (exclusive).
- `less` : Borne supérieure (exclusive).
- `input` : Date à tester.

## Valeur de retour

`true` si l'entrée se situe strictement entre les deux bornes.

## Voir aussi

- [`betweenThan`](/v1/api/date/betweenThan/fr)
- [`greater`](/v1/api/date/greater/fr)
