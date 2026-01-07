---
outline: [2, 3]
prev:
  text: "isSafeTimeValue"
  link: "/fr/v1/api/date/isSafeTimeValue"
next:
  text: "applyTimezone"
  link: "/fr/v1/api/date/applyTimezone"
---

# getTimezoneOffset

La fonction **`getTimezoneOffset()`** retourne le décalage en millisecondes entre un `TheDate` et un fuseau horaire IANA.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/date/getTimezoneOffset/tryout.doc.ts"
  majorVersion="v1"
  height="260px"
/>

## Syntaxe

```typescript
function getTimezoneOffset(
	timezone: Timezone
): (input: TheDate) => number
```

```typescript
function getTimezoneOffset(
	input: TheDate,
	timezone: Timezone
): number
```

## Paramètres

- `input` : Date `TheDate` (uniquement en signature classique).
- `timezone` : Fuseau horaire IANA.

## Valeur de retour

Décalage en millisecondes par rapport à l'UTC pour le fuseau fourni.

## Voir aussi

- [`applyTimezone`](/fr/v1/api/date/applyTimezone)
- [`toTimestamp`](/fr/v1/api/date/toTimestamp)
- [`toNative`](/fr/v1/api/date/toNative)
