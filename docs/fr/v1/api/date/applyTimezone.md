---
outline: [2, 3]
description: "La fonction applyTimezone() ajuste un TheDate en appliquant le décalage d'un fuseau horaire."
prev:
  text: "getTimezoneOffset"
  link: "/fr/v1/api/date/getTimezoneOffset"
next:
  text: "toISOString"
  link: "/fr/v1/api/date/toISOString"
---

# applyTimezone

La fonction **`applyTimezone()`** ajuste un `TheDate` en appliquant le décalage d'un fuseau horaire.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/date/applyTimezone/tryout.doc.ts"
  majorVersion="v1"
  height="145px"
/>

## Syntaxe

```typescript
function applyTimezone(
	timezone: Timezone
): (input: TheDate | SerializedTheDate) => TheDate
```

```typescript
function applyTimezone(
	input: TheDate | SerializedTheDate,
	timezone: Timezone
): TheDate
```

## Paramètres

- `input` : Date `TheDate` (uniquement en signature classique).
- `timezone` : Fuseau horaire IANA.

## Valeur de retour

Un `TheDate` recalé sur le fuseau demandé.

## Voir aussi

- [`getTimezoneOffset`](/fr/v1/api/date/getTimezoneOffset)
- [`toTimestamp`](/fr/v1/api/date/toTimestamp)
