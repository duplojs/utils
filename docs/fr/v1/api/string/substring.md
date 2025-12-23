---
outline: [2, 3]
prev:
  text: "slice"
  link: "/fr/v1/api/string/slice"
next:
  text: "split"
  link: "/fr/v1/api/string/split"
---

# substring

La méthode **`substring()`** retourne une sous-chaîne de caractères entre deux index, sans modifier la chaîne d'origine.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/string/substring/tryout.doc.ts"
  majorVersion="v1"
  height="200px"
/>

## Syntaxe

### Signature classique

```typescript
function substring<
	GenericInput extends string
>(
	input: GenericInput,
	start: number,
	end?: number
): string
```

### Signature currifiée

```typescript
function substring<
	GenericInput extends string
>(
	start: number,
	end?: number
): (input: GenericInput) => string
```

## Paramètres

- `input` : La chaîne de caractères à extraire.
- `start` : L'index du premier caractère à inclure dans la sous-chaîne retournée.
- `end` (optionnel) : L'index du premier caractère à exclure de la sous-chaîne retournée. Si omis, extrait jusqu'à la fin de la chaîne.

## Valeur de retour

Une nouvelle chaîne de caractères contenant la section spécifiée de la chaîne d'origine.

## Voir aussi

- [`slice`](/fr/v1/api/string/slice) - Extrait une section d'une chaîne avec support des index négatifs
- [`charAt`](/fr/v1/api/string/charAt) - Retourne le caractère à un index
- [`indexOf`](/fr/v1/api/string/indexOf) - Trouve l'index d'une sous-chaîne

## Sources

- [MDN Web Docs - String.prototype.substring()](https://developer.mozilla.org/fr-FR/docs/Web/JavaScript/Reference/Global_Objects/String/substring)
