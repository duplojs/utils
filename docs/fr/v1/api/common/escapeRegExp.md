---
outline: [2, 3]
description: "La fonction escapeRegExp() échappe les caractères spéciaux d'une chaîne pour pouvoir la réutiliser dans une expression régulière sans altérer son sens."
prev:
  text: "stringToBytes"
  link: "/fr/v1/api/common/stringToBytes"
next:
  text: "interpolation"
  link: "/fr/v1/api/common/interpolation"
---

# escapeRegExp

La fonction **`escapeRegExp()`** échappe les caractères spéciaux d'une chaîne pour pouvoir la réutiliser dans une expression régulière sans altérer son sens.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/common/escapeRegExp/tryout.doc.ts"
  majorVersion="v1"
  height="200px"
/>

## Syntaxe

```typescript
function escapeRegExp<
	GenericInput extends string
>(
	input: GenericInput
): string;
```

## Paramètres

- `input` : Chaîne à échapper pour un usage dans une regex.

## Valeur de retour

Une chaîne où tous les métacaractères regex ont été échappés.

## Voir aussi

- [`interpolation`](/fr/v1/api/common/interpolation) - Génère des templates typés avec placeholders
