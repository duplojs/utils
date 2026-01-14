---
outline: [2, 3]
prev:
  text: "addMilliseconds"
  link: "/fr/v1/api/date/addMilliseconds"
next:
  text: "subtractYears"
  link: "/fr/v1/api/date/subtractYears"
---

# addTime

La fonction **`addTime()`** ajoute une durée `TheTime` à un `TheDate` ou à un autre `TheTime`.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/date/addTime/tryout.doc.ts"
  majorVersion="v1"
  height="250px"
/>

## Syntaxe

### Signature classique

```typescript
function addTime<
	GenericInput extends TheDate
>(
	input: GenericInput,
	time: TheTime
): TheDate

function addTime<
	GenericInput extends TheTime
>(
	input: GenericInput,
	time: TheTime
): TheTime
```

### Signature currifiée

```typescript
function addTime<
	GenericInput extends TheDate
>(
	time: TheTime
): (input: GenericInput) => TheDate

function addTime<
	GenericInput extends TheTime
>(
	time: TheTime
): (input: GenericInput) => TheTime
```

## Paramètres

- `time` : Durée à ajouter sous forme de `TheTime`.
- `input` : `TheDate` ou `TheTime` à ajuster.

## Valeur de retour

Un `TheDate` ou un `TheTime` avec la durée ajoutée.

## Voir aussi

- [`createTime`](/fr/v1/api/date/createTime)
- [`subtractTime`](/fr/v1/api/date/subtractTime)
