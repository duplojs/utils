---
outline: [2, 3]
prev:
  text: "replace"
  link: "/fr/v1/api/string/replace"
next:
  text: "includes"
  link: "/fr/v1/api/string/includes"
---

# replaceAll

La méthode **`replaceAll()`** retourne une nouvelle chaîne de caractères dans laquelle toutes les occurrences d'un motif spécifié sont remplacées par une chaîne de remplacement.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/string/replaceAll/tryout.doc.ts"
  majorVersion="v1"
  height="250px"
/>

## Syntaxe

### Signature classique

```typescript
function replaceAll(
	input: string, 
	pattern: string | RegExp, 
	replacement: string
): string;
```

### Signature currifiée

```typescript
function replaceAll<
	GenericInput extends string
>(
	pattern: string | RegExp, 
	replacement: string
): (input: GenericInput) => string;
```

## Paramètres

- `input` : La chaîne de caractères dans laquelle effectuer les remplacements.
- `pattern` : Le motif à rechercher. Il peut s'agir d'une chaîne de caractères ou d'une expression régulière.
- `replacement` : La chaîne de remplacement.

## Valeur de retour

Une nouvelle chaîne de caractères avec toutes les occurrences du motif remplacées par la chaîne de remplacement.

## Voir aussi

- [replace](/fr/v1/api/string/replace) : Remplace la première occurrence d'un motif dans une chaîne de caractères.
- [includes](/fr/v1/api/string/includes) : Vérifie si une chaîne de caractères contient un certain motif.
- [indexOf](/fr/v1/api/string/indexOf) : Retourne l'index de la première occurrence d'un motif dans une chaîne de caractères.
- [toLowerCase](/fr/v1/api/string/toLowerCase) : Convertit toute la chaîne en minuscules.


## Sources

- [MDN Web Docs - String.prototype.replaceAll()](https://developer.mozilla.org/fr-FR/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll)