---
outline: [2, 3]
prev:
  text: "stringToBytes"
  link: "/v1/api/common/stringToBytes/fr"
next:
  text: "interpolation"
  link: "/v1/api/common/interpolation/fr"
---

# escapeRegExp

La fonction **`escapeRegExp()`** échappe les caractères spéciaux d'une chaîne pour pouvoir la réutiliser dans une expression régulière sans altérer son sens.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/common/escapeRegExp/examples/tryout.doc.ts"
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

- [`interpolation`](/v1/api/common/interpolation/fr) - Génère des templates typés avec placeholders
