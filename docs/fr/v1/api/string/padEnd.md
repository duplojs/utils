---
outline: [2, 3]
description: "La méthode padEnd() complète la chaîne courante avec une chaîne de caractères donnée afin d'obtenir une chaîne de longueur fixe. Le remplissage est appliqué à la fin de la chaîne courante."
prev:
  text: "padStart"
  link: "/fr/v1/api/string/padStart"
next:
  text: "trim"
  link: "/fr/v1/api/string/trim"
---

# padEnd

La méthode **`padEnd()`** complète la chaîne courante avec une chaîne de caractères donnée afin d'obtenir une chaîne de longueur fixe. Le remplissage est appliqué à la fin de la chaîne courante.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/string/padEnd/tryout.doc.ts"
  majorVersion="v1"
  height="200px"
/>

## Syntaxe

### Signature classique

```typescript
function padEnd<
	GenericInput extends string
>(
	input: GenericInput,
	targetLength: number,
	padString: string
): string
```

### Signature currifiée

```typescript
function padEnd<
	GenericInput extends string
>(
	targetLength: number,
	padString: string
): (input: GenericInput) => string
```

## Paramètres

- `input` : La chaîne de caractères à compléter.
- `targetLength` : La longueur de la chaîne résultante une fois complétée.
- `padString` : La chaîne de caractères à utiliser pour compléter la chaîne courante.

## Valeur de retour

Une nouvelle chaîne de caractères de la longueur indiquée, complétée avec la chaîne fournie depuis la fin.

## Voir aussi

- [`padStart`](/fr/v1/api/string/padStart) - Complète la chaîne au début
- [`repeat`](/fr/v1/api/string/repeat) - Répète une chaîne un nombre de fois donné

## Sources

- [MDN Web Docs - String.prototype.padEnd()](https://developer.mozilla.org/fr-FR/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd)
