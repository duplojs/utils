---
outline: [2, 3]
description: "La fonction createInterpolation() génère une fonction de templating typée : les placeholders {id} de la chaîne sont exigés au runtime et vérifiés au compile-time. En mode strict, une erreur est levée si un id manque."
prev:
  text: "mimeType"
  link: "/fr/v1/api/common/mimeType"
next:
  text: "wrapValue"
  link: "/fr/v1/api/common/wrapValue"
---

# createInterpolation

La fonction **`createInterpolation()`** génère une fonction de templating typée : les placeholders `{id}` de la chaîne sont exigés au runtime et vérifiés au compile-time. En mode strict, une erreur est levée si un id manque.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/common/interpolation/tryout.doc.ts"
  majorVersion="v1"
  height="376px"
/>

## Syntaxe

```typescript
function createInterpolation<
	GenericInput extends string,
	GenericInterpolationId extends ExtractInterpolationId<GenericInput>,
	GenericStrict extends boolean
>(
	input: GenericInput,
	strict?: GenericStrict
): <
	GenericInterpolationMapperValue extends string,
	GenericInterpolationValues extends Record<GenericInterpolationId, GenericInterpolationMapperValue>
>(
	...[interpolationValues]: IsEqual<GenericInterpolationId, never> extends true
		? []
		: [interpolationValues: GenericInterpolationValues]
) => IsEqual<GenericStrict, true> extends true
	? ReplaceInterpolationIdByValues<GenericInput, GenericInterpolationValues>
	: string;
```

## Paramètres

- `input` : Chaîne modèle contenant des placeholders `{id}`.
- `strict` : Booléen (optionnel). Si `true`, tous les ids doivent être fournis sinon une erreur est levée.

## Valeur de retour

Une fonction d'interpolation typée qui exige un objet de valeurs pour chaque id présent dans le template et retourne la chaîne interpolée (ou `string` en mode non strict).

## Voir aussi

- [`escapeRegExp`](/fr/v1/api/common/escapeRegExp) - Échapper une chaîne avant usage en regex
