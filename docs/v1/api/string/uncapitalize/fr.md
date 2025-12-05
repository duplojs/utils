---
outline: [2, 3]
prev:
  text: 'capitalize'
  link: '/v1/api/string/capitalize/fr'
next:
  text: 'toLowerCase'
  link: '/v1/api/string/toLowerCase/fr'
---

# uncapitalize

La méthode **`uncapitalize()`** retourne une nouvelle chaîne de caractères avec la première lettre en minuscule.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/string/uncapitalize/examples/tryout.doc.ts"
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

- [`capitalize`](/v1/api/string/capitalize/fr) - Met en majuscule la première lettre
- [`toUpperCase`](/v1/api/string/toUpperCase/fr) - Convertit toute la chaîne en majuscules
- [`toLowerCase`](/v1/api/string/toLowerCase/fr) - Convertit toute la chaîne en minuscules

## Sources

- [TypeScript - Uncapitalize&lt;StringType&gt;](https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html#uncapitalizestringtype) - Type utilitaire TypeScript pour l'inférence de type
