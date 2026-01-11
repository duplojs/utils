---
outline: [2, 3]
description: "La méthode repeat() retourne une nouvelle chaîne de caractères qui est la répétition de la chaîne originale un nombre spécifié de fois."
prev:
  text: "normalize"
  link: "/fr/v1/api/string/normalize"
next:
  text: "replace"
  link: "/fr/v1/api/string/replace"
---

# repeat

La méthode **`repeat()`** retourne une nouvelle chaîne de caractères qui est la répétition de la chaîne originale un nombre spécifié de fois.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/string/repeat/tryout.doc.ts"
  majorVersion="v1"
  height="200px"
/>

## Syntaxe

### Signature classique

```typescript
function repeat<
	GenericInput extends string
>(
	input: GenericInput, 
	count: number
): string;
```

### Signature currifiée

```typescript
function repeat<
	GenericInput extends string
>(
	count: number
): (input: GenericInput) => string;
```

## Paramètres

- `input` : La chaîne de caractères à répéter.
- `count` : Le nombre de fois que la chaîne doit être répétée. Doit être un entier non négatif. Si `count` est 0, une chaîne vide est retournée.

## Valeur de retour

Une nouvelle chaîne de caractères résultant de la répétition de la chaîne originale `count` fois.

## Voir aussi 

- [normalize](/fr/v1/api/string/normalize) : Normalise une chaîne de caractères selon une forme Unicode spécifiée.
- [replace](/fr/v1/api/string/replace) : Remplace des occurrences dans une chaîne de caractères.
- [trim](/fr/v1/api/string/trim) : Supprime les espaces blancs au début et à la fin d'une chaîne.

## Sources

- [MDN Web Docs - String.prototype.repeat()](https://developer.mozilla.org/fr-FR/docs/Web/JavaScript/Reference/Global_Objects/String/repeat)
