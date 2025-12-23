---
outline: [2, 3]
prev:
  text: "sort"
  link: "/fr/v1/api/string/sort"
next:
  text: "isKeyof"
  link: "/fr/v1/api/string/isKeyof"
---

# concat

La méthode **`concat()`** combine le texte de plusieurs chaînes de caractères et retourne une nouvelle chaîne.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/string/concat/tryout.doc.ts"
  majorVersion="v1"
  height="200px"
/>

## Syntaxe

### Signature classique

```typescript
function concat(
	input: string,
	...textsRest: string[]
): string
```

### Signature currifiée

```typescript
function concat<
	GenericInput extends string
>(
	text: string
): (input: GenericInput) => string
```

## Paramètres

- `input` : La chaîne de caractères de base.
- `textsRest` : Une ou plusieurs chaînes de caractères à concaténer avec `input`.

## Valeur de retour

Une nouvelle chaîne de caractères contenant le texte combiné des chaînes fournies.

## Voir aussi

- [`repeat`](/fr/v1/api/string/repeat) - Répète une chaîne un nombre de fois donné
- [`padStart`](/fr/v1/api/string/padStart) - Complète la chaîne au début
- [`padEnd`](/fr/v1/api/string/padEnd) - Complète la chaîne à la fin

## Sources

- [MDN Web Docs - String.prototype.concat()](https://developer.mozilla.org/fr-FR/docs/Web/JavaScript/Reference/Global_Objects/String/concat)
