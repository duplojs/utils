---
outline: [2, 3]
description: "La méthode charAt() retourne le caractère à l'index spécifié dans une chaîne de caractères."
prev:
  text: 'matchAll'
  link: '/fr/v1/api/string/matchAll'
next:
  text: 'at'
  link: '/fr/v1/api/string/at'
---

# charAt

La méthode **`charAt()`** retourne le caractère à l'index spécifié dans une chaîne de caractères.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/string/charAt/tryout.doc.ts"
  majorVersion="v1"
  height="200px"
/>

## Syntaxe

### Signature classique

```typescript
function charAt(
	input: string,
	index: number
): string
```

### Signature currifiée

```typescript
function charAt<
	GenericInput extends string
>(
	index: number
): (input: GenericInput) => string
```

## Paramètres

- `input` : La chaîne de caractères dans laquelle récupérer le caractère.
- `index` : L'index du caractère à retourner (commence à 0).

## Valeur de retour

Une chaîne de caractères représentant le caractère à l'index spécifié. Si l'index est hors limites, retourne une chaîne vide (`""`).

## Voir aussi

- [`indexOf`](/fr/v1/api/string/indexOf) - Trouve l'index d'une sous-chaîne
- [`lastIndexOf`](/fr/v1/api/string/lastIndexOf) - Trouve le dernier index d'une sous-chaîne

## Sources

- [MDN Web Docs - String.prototype.charAt()](https://developer.mozilla.org/fr-FR/docs/Web/JavaScript/Reference/Global_Objects/String/charAt)
