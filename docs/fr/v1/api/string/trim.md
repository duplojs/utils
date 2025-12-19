---
outline: [2, 3]
prev:
  text: "padEnd"
  link: "/fr/v1/api/string/padEnd"
next:
  text: "trimStart"
  link: "/fr/v1/api/string/trimStart"
---

# trim

La méthode **`trim()`** supprime les espaces en début et en fin de chaîne. Les espaces incluent les espaces, tabulations, sauts de ligne et autres caractères d'espacement Unicode.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/string/trim/tryout.doc.ts"
  majorVersion="v1"
  height="200px"
/>

## Syntaxe

```typescript
function trim<
	GenericInput extends string
>(input: GenericInput): string
```

## Paramètres

- `input` : La chaîne de caractères dont on souhaite supprimer les espaces en début et en fin.

## Valeur de retour

Une nouvelle chaîne de caractères représentant la chaîne appelante sans les espaces en début et en fin.

## Voir aussi

- [`trimStart`](/fr/v1/api/string/trimStart) - Supprime les espaces au début uniquement
- [`trimEnd`](/fr/v1/api/string/trimEnd) - Supprime les espaces à la fin uniquement

## Sources

- [MDN Web Docs - String.prototype.trim()](https://developer.mozilla.org/fr-FR/docs/Web/JavaScript/Reference/Global_Objects/String/trim)
