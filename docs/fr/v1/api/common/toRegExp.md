---
outline: [2, 3]
description: "La fonction toRegExp() normalise une chaîne, un tableau de chaînes ou une RegExp en expression régulière."
prev:
  text: "escapeRegExp"
  link: "/fr/v1/api/common/escapeRegExp"
next:
  text: "mimeType"
  link: "/fr/v1/api/common/mimeType"
---

# toRegExp

La fonction **`toRegExp()`** normalise une chaîne, un tableau de chaînes ou une `RegExp` en expression régulière.
Quand l'entrée est textuelle, elle échappe les métacaractères regex et construit un motif de correspondance exacte.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/common/toRegExp/tryout.doc.ts"
  majorVersion="v1"
  height="313px"
/>

## Syntaxe

```typescript
function toRegExp(
	input: string | string[] | RegExp
): RegExp;
```

## Paramètres

- `input` : Valeur à convertir en `RegExp`.

## Valeur de retour

Une `RegExp` :
- depuis une `string` : correspondance littérale exacte (`^...$`)
- depuis `string[]` : alternatives exactes (`^(?:...|...)$`)
- depuis une `RegExp` : la même instance

## Voir aussi

- [`escapeRegExp`](/fr/v1/api/common/escapeRegExp) - Échappe les caractères spéciaux pour un usage regex
