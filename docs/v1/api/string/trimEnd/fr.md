---
outline: [2, 3]
prev:
  text: "trimStart"
  link: "/v1/api/string/trimStart/fr"
next:
  text: "concat"
  link: "/v1/api/string/concat/fr"
---

# trimEnd

La méthode **`trimEnd()`** supprime les espaces à la fin d'une chaîne de caractères. Les espaces incluent les espaces, tabulations, sauts de ligne et autres caractères d'espacement Unicode.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/string/trimEnd/examples/tryout.doc.ts"
  majorVersion="v1"
  height="200px"
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

## Exemples

### Supprimer le slash final d'une URL

<MonacoTSEditor
  	src="/v1/api/string/trimEnd/examples/removeTrailingSlash.doc.ts"
  	majorVersion="v1"
	height="480px"
/>

### Nettoyer l'extension d'un fichier

<MonacoTSEditor
  	src="/v1/api/string/trimEnd/examples/cleanFileExtension.doc.ts"
  	majorVersion="v1"
	height="680px"
/>

### Formater la sortie de commande

<MonacoTSEditor
  	src="/v1/api/string/trimEnd/examples/formatCommandOutput.doc.ts"
  	majorVersion="v1"
	height="350px"
/>

## Voir aussi

- [`trim`](/v1/api/string/trim/fr) - Supprime les espaces au début et à la fin
- [`trimStart`](/v1/api/string/trimStart/fr) - Supprime les espaces au début uniquement

## Sources

- [MDN Web Docs - String.prototype.trimEnd()](https://developer.mozilla.org/fr-FR/docs/Web/JavaScript/Reference/Global_Objects/String/trimEnd)
