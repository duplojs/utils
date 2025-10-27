---
outline: [2, 3]
prev:
  text: "padEnd"
  link: "/v1/api/string/padEnd/fr"
next:
  text: "trimStart"
  link: "/v1/api/string/trimStart/fr"
---

# trim

La méthode **`trim()`** supprime les espaces en début et en fin de chaîne. Les espaces incluent les espaces, tabulations, sauts de ligne et autres caractères d'espacement Unicode.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/string/trim/examples/tryout.doc.ts"
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

## Exemples

### Nettoyer les entrées utilisateur

<MonacoTSEditor
  	src="/v1/api/string/trim/examples/sanitizeUserInput.doc.ts"
  	majorVersion="v1"
	height="300px"
/>

### Parser les lignes de configuration

<MonacoTSEditor
  	src="/v1/api/string/trim/examples/parseConfigLines.doc.ts"
  	majorVersion="v1"
	height="450px"
/>

### Normaliser une requête de recherche

<MonacoTSEditor
  	src="/v1/api/string/trim/examples/normalizeQuery.doc.ts"
  	majorVersion="v1"
	height="300px"
/>

## Voir aussi

- [`trimStart`](/v1/api/string/trimStart/fr) - Supprime les espaces au début uniquement
- [`trimEnd`](/v1/api/string/trimEnd/fr) - Supprime les espaces à la fin uniquement

## Sources

- [MDN Web Docs - String.prototype.trim()](https://developer.mozilla.org/fr-FR/docs/Web/JavaScript/Reference/Global_Objects/String/trim)
