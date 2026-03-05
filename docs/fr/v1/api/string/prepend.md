---
outline: [2, 3]
description: "La fonction prepend() ajoute une ou plusieurs chaînes en préfixe d'une chaîne d'entrée et retourne une nouvelle chaîne."
prev:
  text: "concat"
  link: "/fr/v1/api/string/concat"
next:
  text: "pop"
  link: "/fr/v1/api/string/pop"
---

# prepend

La fonction **`prepend()`** ajoute une ou plusieurs chaînes en préfixe d'une chaîne d'entrée et retourne une nouvelle chaîne.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/string/prepend/tryout.doc.ts"
  majorVersion="v1"
  height="271px"
/>

## Syntaxe

### Signature classique

```typescript
function prepend(
	input: string,
	...textsRest: string[]
): string
```

### Signature currifiée

```typescript
function prepend(
	text: string
): (input: string) => string
```

## Paramètres

- `input` : La chaîne de base.
- `text` : Le préfixe utilisé en mode currifié.
- `textsRest` : Une ou plusieurs chaînes à placer avant `input`.

## Valeur de retour

Une nouvelle chaîne construite en concaténant tous les préfixes avant la chaîne d'entrée.

## Voir aussi

- [`concat`](/fr/v1/api/string/concat) - Concatène une ou plusieurs chaînes après une entrée
- [`pop`](/fr/v1/api/string/pop) - Retire le dernier caractère d'une chaîne
