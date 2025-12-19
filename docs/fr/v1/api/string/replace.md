---
outline: [2, 3]
prev:
  text: "repeat"
  link: "/fr/v1/api/string/repeat"
next:
  text: "replaceAll"
  link: "/fr/v1/api/string/replaceAll"
---

# replace

La méthode **`replace()`** retourne une nouvelle chaîne de caractères dans laquelle une partie de la chaîne originale est remplacée par une autre chaîne.

:warning: Cette méthode remplace uniquement la première occurrence trouvée. Pour remplacer toutes les occurrences, utilisez la méthode [replaceAll](/fr/v1/api/string/replaceAll).

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/string/replace/tryout.doc.ts"
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

## Voir aussi

- [repeat](/fr/v1/api/string/repeat) : Répète une chaîne un nombre spécifié de fois.
- [replaceAll](/fr/v1/api/string/replaceAll) : Remplace toutes les occurrences dans une chaîne de caractères.
- [trim](/fr/v1/api/string/trim) : Supprime les espaces blancs au début et à la fin d'une chaîne.

## Sources

- [MDN Web Docs - String.prototype.replace()](https://developer.mozilla.org/fr-FR/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
