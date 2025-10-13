---
outline: [2, 3]
prev:
  text: 'String'
  link: '/v1/api/string/fr'
next:
  text: 'uncapitalize'
  link: '/v1/api/string/uncapitalize/fr'
---

# capitalize

La méthode **`capitalize()`** retourne une nouvelle chaîne de caractères avec la première lettre en majuscule.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/string/capitalize/examples/tryout.doc.ts"
  majorVersion="v1"
  height="200px"
/>

## Syntaxe

```typescript
function capitalize<
	GenericString extends string
>(
	input: GenericString
): Capitalize<GenericString>
```

## Paramètres

- `input` : La chaîne de caractères à modifier. Le type est générique (`GenericString extends string`) pour permettre une inférence précise du type littéral.

### Valeur de retour

Une nouvelle chaîne de caractères avec la première lettre en majuscule. Le type de retour est inféré précisément grâce au type utilitaire `Capitalize<GenericString>` de TypeScript.

## Exemples

### Capitaliser chaque mot d'une phrase

<MonacoTSEditor
  src="/v1/api/string/capitalize/examples/capitalizeEachWordingSentence.doc.ts"
  majorVersion="v1"
  height="250px"
/>

### Formater un nom d'utilisateur

<MonacoTSEditor
  src="/v1/api/string/capitalize/examples/formatUsername.doc.ts"
  majorVersion="v1"
  height="200px"
/>

## Voir aussi

- [`uncapitalize`](/v1/api/string/uncapitalize/fr) - Met en minuscule la première lettre
- [`toUpperCase`](/v1/api/string/toUpperCase/fr) - Convertit toute la chaîne en majuscules
- [`toLowerCase`](/v1/api/string/toLowerCase/fr) - Convertit toute la chaîne en minuscules

## Sources

- [TypeScript - Capitalize&lt;StringType&gt;](https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html#capitalizestringtype) - Type utilitaire TypeScript pour l'inférence

