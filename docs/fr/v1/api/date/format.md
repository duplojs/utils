---
outline: [2, 3]
description: "La fonction format() affiche un TheDate selon un format personnalisé et un fuseau horaire choisi."
prev:
  text: "toISOString"
  link: "/fr/v1/api/date/toISOString"
next:
  text: "formatTime"
  link: "/fr/v1/api/date/formatTime"
---

# format

La fonction **`format()`** affiche un `TheDate` selon un format personnalisé et un fuseau horaire choisi.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/date/format/tryout.doc.ts"
  majorVersion="v1"
  height="280px"
/>

## Syntaxe

```typescript
function format<
	GenericInput extends TheDate,
	GenericFormat extends string,
	GenericTimezone extends Timezone
>(
	formatString: GenericFormat,
	timezone: GenericTimezone
): (input: GenericInput) => string
```

```typescript
function format<
	GenericInput extends TheDate,
	GenericFormat extends string,
	GenericTimezone extends Timezone
>(
	input: GenericInput,
	formatString: GenericFormat,
	timezone: GenericTimezone
): string
```

## Paramètres

- `input` : Date `TheDate` (uniquement en signature classique).
- `formatString` : Chaîne de format.
- `timezone` : Fuseau horaire IANA.

## Valeur de retour

Chaîne formatée selon les tokens fournis.

## Tokens disponibles

- `YYYY` : année sur 4 chiffres
- `YY` : année sur 2 chiffres
- `MM` : mois sur 2 chiffres
- `DD` : jour sur 2 chiffres
- `HH` : heure sur 2 chiffres (24h)
- `mm` : minutes sur 2 chiffres
- `ss` : secondes sur 2 chiffres
- `SSS` : millisecondes
- `ZZ` : timezone (IANA)

## Voir aussi

- [`toISOString`](/fr/v1/api/date/toISOString)
- [`toTimestamp`](/fr/v1/api/date/toTimestamp)
- [`toNative`](/fr/v1/api/date/toNative)
