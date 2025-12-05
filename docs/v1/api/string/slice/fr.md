---
outline: [2, 3]
prev:
  text: "at"
  link: "/v1/api/string/at/fr"
next:
  text: "substring"
  link: "/v1/api/string/substring/fr"
---

# slice

La méthode **`slice()`** extrait une section d'une chaîne de caractères et retourne une nouvelle chaîne, sans modifier la chaîne d'origine.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/string/slice/examples/tryout.doc.ts"
  majorVersion="v1"
  height="200px"
/>

## Syntaxe

### Signature classique

```typescript
function slice<
	GenericInput extends string
>(
	input: GenericInput,
	start: number,
	end: number
): string
```

### Signature currifiee

```typescript
function slice<
	GenericInput extends string
>(
	start: number,
	end: number
): (input: GenericInput) => string
```

## Paramètres

- `input` : La chaîne de caractères à extraire.
- `start` : L'index de début de l'extraction (inclus). Si négatif, compte depuis la fin.
- `end` : L'index de fin de l'extraction (exclus). Si négatif, compte depuis la fin.

## Valeur de retour

Une nouvelle chaîne de caractères contenant la section extraite de la chaîne d'origine.

## Voir aussi

- [`substring`](/v1/api/string/substring/fr) - Extrait une sous-chaîne entre deux index
- [`charAt`](/v1/api/string/charAt/fr) - Retourne le caractère à un index
- [`at`](/v1/api/string/at/fr) - Retourne le caractère à un index avec support des index négatifs

## Sources

- [MDN Web Docs - String.prototype.slice()](https://developer.mozilla.org/fr-FR/docs/Web/JavaScript/Reference/Global_Objects/String/slice)
