---
outline: [2, 3]
description: "La méthode group() regroupe les éléments d'un tableau selon une clé calculée et retourne un objet indexé par nom de groupe avec les éléments associés."
prev:
  text: "join"
  link: "/fr/v1/api/array/join"
next:
  text: "sum"
  link: "/fr/v1/api/array/sum"
---

# group

La méthode **`group()`** regroupe les éléments d'un tableau selon une clé calculée et retourne un objet indexé par nom de groupe avec les éléments associés.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/array/group/tryout.doc.ts"
  majorVersion="v1"
  height="460px"
  :foldLines="[2]"
/>

## Syntaxe

### Signature classique

```typescript
function group<
	GenericInput extends readonly unknown[],
	GenericOutput extends ArrayGroupFunctionOutput
>(
	input: GenericInput,
	theFunction: (
		element: GenericInput[number], 
		params: ArrayGroupFunctionParams
	) => GenericOutput
): ArrayGroupResult<GenericOutput>
```

### Signature currifiée

```typescript
function group<
	GenericInput extends readonly unknown[],
	GenericOutput extends ArrayGroupFunctionOutput
>(
	theFunction: (
		element: GenericInput[number],
		params: ArrayGroupFunctionParams
	) => GenericOutput
): (input: GenericInput) => ArrayGroupResult<GenericOutput>
```

### Paramètres auxiliaires

```typescript
interface ArrayGroupFunctionOutput<
	GenericGroupName extends string = string, 
	GenericGroupValue extends unknown = unknown
> {
	group: GenericGroupName;
	value: GenericGroupValue;
}

interface ArrayGroupFunctionParams {
	index: number;
	output: typeof groupOutput;
}

function groupOutput<
	GenericGroupValue extends unknown, 
	GenericGroupName extends string
>(
	group: GenericGroupName
): (
	value: GenericGroupValue
) => ArrayGroupFunctionOutput<GenericGroupName, GenericGroupValue>;

function groupOutput<
	GenericGroupValue extends unknown, 
	GenericGroupName extends string
>(
	group: GenericGroupName,
	value: GenericGroupValue
): ArrayGroupFunctionOutput<GenericGroupName, GenericGroupValue>;
```

## Paramètres

- `input` : Le tableau à parcourir pour créer les groupes.
- `theFunction` : Fonction appliquée à chaque élément. Elle retourne un objet `{ group, value }` décrivant le nom du groupe cible et la valeur à ajouter.
- `params.index` : L'index actuel dans le tableau d'entrée.
- `params.output` : Raccourci pour construire un objet de sortie via `groupOutput`, ce qui garantit la cohérence du typage.

## Valeur de retour

Un objet dont chaque propriété correspond à un groupe calculé. Chaque clé contient un tableau des valeurs produites pour ce groupe. Les clés absentes correspondent à des groupes jamais rencontrés.

## Voir aussi

- [`reduce`](/fr/v1/api/array/reduce) - Agrège un tableau en une seule valeur
- [`sum`](/fr/v1/api/array/sum) - Additionne toutes les valeurs d'un tableau

## Sources

- [MDN Web Docs - Array.prototype.group()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/group)
