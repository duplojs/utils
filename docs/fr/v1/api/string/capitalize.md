---
outline: [2, 3]
description: "La méthode capitalize() retourne une nouvelle chaîne de caractères avec la première lettre en majuscule."
prev:
  text: 'String'
  link: '/fr/v1/api/string/'
next:
  text: 'uncapitalize'
  link: '/fr/v1/api/string/uncapitalize'
---

# capitalize

La méthode **`capitalize()`** retourne une nouvelle chaîne de caractères avec la première lettre en majuscule.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/string/capitalize/tryout.doc.ts"
  majorVersion="v1"
  height="250px"
/>

## Syntaxe

```typescript
function capitalize<
	GenericInput extends string
>(
	input: GenericInput
): Capitalize<GenericInput>
```

## Paramètres

- `input` : La chaîne de caractères à modifier. Le type est générique (`GenericInput extends string`) pour permettre une inférence précise du type littéral.

### Valeur de retour

Une nouvelle chaîne de caractères avec la première lettre en majuscule. Le type de retour est inféré précisément grâce au type utilitaire `Capitalize<GenericInput>` de TypeScript.

## Voir aussi

- [`uncapitalize`](/fr/v1/api/string/uncapitalize) - Met en minuscule la première lettre
- [`toUpperCase`](/fr/v1/api/string/toUpperCase) - Convertit toute la chaîne en majuscules
- [`toLowerCase`](/fr/v1/api/string/toLowerCase) - Convertit toute la chaîne en minuscules

## Sources

- [TypeScript - Capitalize&lt;StringType&gt;](https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html#capitalizestringtype) - Type utilitaire TypeScript pour l'inférence

