---
outline: [2, 3]
description: "La méthode trimStart() supprime les espaces au début d'une chaîne de caractères. Les espaces incluent les espaces, tabulations, sauts de ligne et autres caractères d'espacement Unicode."
prev:
  text: "trim"
  link: "/fr/v1/api/string/trim"
next:
  text: "trimEnd"
  link: "/fr/v1/api/string/trimEnd"
---

# trimStart

La méthode **`trimStart()`** supprime les espaces au début d'une chaîne de caractères. Les espaces incluent les espaces, tabulations, sauts de ligne et autres caractères d'espacement Unicode.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/string/trimStart/tryout.doc.ts"
  majorVersion="v1"
  height="200px"
/>

## Syntaxe

```typescript
function trimStart<
	GenericInput extends string
>(input: GenericInput): string
```

## Paramètres

- `input` : La chaîne de caractères dont on souhaite supprimer les espaces au début.

## Valeur de retour

Une nouvelle chaîne de caractères représentant la chaîne appelante sans les espaces au début.

## Voir aussi

- [`trim`](/fr/v1/api/string/trim) - Supprime les espaces au début et à la fin
- [`trimEnd`](/fr/v1/api/string/trimEnd) - Supprime les espaces à la fin uniquement

## Sources

- [MDN Web Docs - String.prototype.trimStart()](https://developer.mozilla.org/fr-FR/docs/Web/JavaScript/Reference/Global_Objects/String/trimStart)
