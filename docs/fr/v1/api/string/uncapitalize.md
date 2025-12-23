---
outline: [2, 3]
prev:
  text: 'capitalize'
  link: '/fr/v1/api/string/capitalize'
next:
  text: 'toLowerCase'
  link: '/fr/v1/api/string/toLowerCase'
---

# uncapitalize

La méthode **`uncapitalize()`** retourne une nouvelle chaîne de caractères avec la première lettre en minuscule.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/string/uncapitalize/tryout.doc.ts"
  majorVersion="v1"
  height="250px"
/>

## Syntaxe

```typescript
function uncapitalize<
	GenericInput extends string
>(
	input: GenericInput
): Uncapitalize<GenericInput>
```

## Paramètres

- `input` : La chaîne de caractères à modifier. Le type est générique (`GenericInput extends string`) pour permettre une inférence précise du type littéral.

### Valeur de retour

Une nouvelle chaîne de caractères avec la première lettre en minuscule. Le type de retour est inféré précisément grâce au type utilitaire `Uncapitalize<GenericInput>` de TypeScript.
## Voir aussi

- [`capitalize`](/fr/v1/api/string/capitalize) - Met en majuscule la première lettre
- [`toUpperCase`](/fr/v1/api/string/toUpperCase) - Convertit toute la chaîne en majuscules
- [`toLowerCase`](/fr/v1/api/string/toLowerCase) - Convertit toute la chaîne en minuscules

## Sources

- [TypeScript - Uncapitalize&lt;StringType&gt;](https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html#uncapitalizestringtype) - Type utilitaire TypeScript pour l'inférence de type
