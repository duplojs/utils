---
outline: [2, 3]
prev:
  text: "slice"
  link: "/v1/api/string/slice/fr"
next:
  text: "split"
  link: "/v1/api/string/split/fr"
---

# substring

La méthode **`substring()`** retourne une sous-chaîne de caractères entre deux index, sans modifier la chaîne d'origine.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/string/substring/examples/tryout.doc.ts"
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

- [`slice`](/v1/api/string/slice/fr) - Extrait une section d'une chaîne avec support des index négatifs
- [`charAt`](/v1/api/string/charAt/fr) - Retourne le caractère à un index
- [`indexOf`](/v1/api/string/indexOf/fr) - Trouve l'index d'une sous-chaîne

## Sources

- [MDN Web Docs - String.prototype.substring()](https://developer.mozilla.org/fr-FR/docs/Web/JavaScript/Reference/Global_Objects/String/substring)
