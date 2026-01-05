---
outline: [2, 3]
description: "La méthode slice() extrait une section d'une chaîne de caractères et retourne une nouvelle chaîne, sans modifier la chaîne d'origine."
prev:
  text: "at"
  link: "/fr/v1/api/string/at"
next:
  text: "substring"
  link: "/fr/v1/api/string/substring"
---

# slice

La méthode **`slice()`** extrait une section d'une chaîne de caractères et retourne une nouvelle chaîne, sans modifier la chaîne d'origine.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/string/slice/tryout.doc.ts"
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

- [`substring`](/fr/v1/api/string/substring) - Extrait une sous-chaîne entre deux index
- [`charAt`](/fr/v1/api/string/charAt) - Retourne le caractère à un index
- [`at`](/fr/v1/api/string/at) - Retourne le caractère à un index avec support des index négatifs

## Sources

- [MDN Web Docs - String.prototype.slice()](https://developer.mozilla.org/fr-FR/docs/Web/JavaScript/Reference/Global_Objects/String/slice)
