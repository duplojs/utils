---
outline: [2, 3]
prev:
  text: "repeat"
  link: "/v1/api/string/repeat/fr"
next:
  text: "replaceAll"
  link: "/v1/api/string/replaceAll/fr"
---

# replace

La méthode **`replace()`** retourne une nouvelle chaîne de caractères dans laquelle une partie de la chaîne originale est remplacée par une autre chaîne.

:warning: Cette méthode remplace uniquement la première occurrence trouvée. Pour remplacer toutes les occurrences, utilisez la méthode [replaceAll](/v1/api/string/replaceAll/fr).

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/string/replace/examples/tryout.doc.ts"
  majorVersion="v1"
  height="250px"
/>

## Syntaxe

### Signature classique

```typescript
function replace<
	GenericInput extends string
>(
	input: GenericInput, 
	pattern: string | RegExp, 
	replacement: string
): string;
```

### Signature currifiée

```typescript
function replace<
	GenericInput extends string
>(
	pattern: string | RegExp, 
	replacement: string
): (input: GenericInput) => string;
```

## Paramètres

- `input` : La chaîne de caractères dans laquelle effectuer le remplacement.
- `pattern` : La chaîne ou l'expression régulière à rechercher.
- `replacement` : La chaîne de remplacement.

## Valeur de retour

Une nouvelle chaîne de caractères avec les remplacements effectués.

## Exemples

### Renommer des frameworks

<MonacoTSEditor
  src="/v1/api/string/replace/examples/renameFrameworks.doc.ts"
  majorVersion="v1"
  height="200px"
/>

### Remplacer avec une regex

<MonacoTSEditor
  src="/v1/api/string/replace/examples/replaceWithRegex.doc.ts"
  majorVersion="v1"
  height="180px"
/>

## Voir aussi

- [repeat](/v1/api/string/repeat/fr) : Répète une chaîne un nombre spécifié de fois.
- [replaceAll](/v1/api/string/replaceAll/fr) : Remplace toutes les occurrences dans une chaîne de caractères.
- [trim](/v1/api/string/trim/fr) : Supprime les espaces blancs au début et à la fin d'une chaîne.

## Sources

- [MDN Web Docs - String.prototype.replace()](https://developer.mozilla.org/fr-FR/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
