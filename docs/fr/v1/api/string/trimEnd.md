---
outline: [2, 3]
description: "La méthode trimEnd() supprime les espaces à la fin d'une chaîne de caractères. Les espaces incluent les espaces, tabulations, sauts de ligne et autres caractères d'espacement Unicode."
prev:
  text: "trimStart"
  link: "/fr/v1/api/string/trimStart"
next:
  text: "sort"
  link: "/fr/v1/api/string/sort"
---

# trimEnd

La méthode **`trimEnd()`** supprime les espaces à la fin d'une chaîne de caractères. Les espaces incluent les espaces, tabulations, sauts de ligne et autres caractères d'espacement Unicode.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/string/trimEnd/tryout.doc.ts"
  majorVersion="v1"
  height="145px"
/>

## Syntaxe

```typescript
function trimEnd<
	GenericInput extends string
>(input: GenericInput): string
```

## Paramètres

- `input` : La chaîne de caractères dont on souhaite supprimer les espaces à la fin.

## Valeur de retour

Une nouvelle chaîne de caractères représentant la chaîne appelante sans les espaces à la fin.

## Voir aussi

- [`trim`](/fr/v1/api/string/trim) - Supprime les espaces au début et à la fin
- [`trimStart`](/fr/v1/api/string/trimStart) - Supprime les espaces au début uniquement

## Sources

- [MDN Web Docs - String.prototype.trimEnd()](https://developer.mozilla.org/fr-FR/docs/Web/JavaScript/Reference/Global_Objects/String/trimEnd)
