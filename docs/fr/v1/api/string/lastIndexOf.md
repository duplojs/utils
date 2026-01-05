---
outline: [2, 3]
description: "La méthode lastIndexOf() retourne l'index de la dernière occurrence d'une sous-chaîne dans une chaîne de caractères, ou undefined si la sous-chaîne n'est pas trouvée."
prev:
  text: "indexOf"
  link: "/fr/v1/api/string/indexOf"
next:
  text: "search"
  link: "/fr/v1/api/string/search"
---


# lastIndexOf

La méthode **`lastIndexOf()`** retourne l'index de la dernière occurrence d'une sous-chaîne dans une chaîne de caractères, ou undefined si la sous-chaîne n'est pas trouvée.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/string/lastIndexOf/tryout.doc.ts"
  majorVersion="v1"
  height="200px"
/>

## Syntaxe

### Signature classique

```typescript
function lastIndexOf<
	GenericInput extends string
>(
	input: GenericInput, 
	searchString: string, 
	position?: number
): number | undefined;
```

### Signature currifiée

```typescript
function lastIndexOf<
	GenericInput extends string
>(
	searchString: string
): (input: GenericInput) => number | undefined;
```

## Paramètres

- `input` : La chaîne de caractères dans laquelle chercher.
- `searchString` : La sous-chaîne à rechercher.
- `position` (optionnel) : La position dans la chaîne à partir de laquelle commencer la recherche en arrière. Par défaut, la recherche commence à la fin de la chaîne.

## Valeur de retour

L'index de la dernière occurrence de la sous-chaîne, ou undefined si la sous-chaîne n'est pas trouvée.

## Voir aussi

- [match](/fr/v1/api/string/match) : Récupère les correspondances d'une chaîne contre une expression régulière.
- [endsWith](/fr/v1/api/string/endsWith) : Vérifie si une chaîne se termine par une sous-chaîne spécifique.
- [includes](/fr/v1/api/string/includes) : Vérifie si une chaîne contient une sous-chaîne.

## Sources

- [MDN Web Docs: String.prototype.lastIndexOf()](https://developer.mozilla.org/fr-FR/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf)
