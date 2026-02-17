---
outline: [2, 3]
description: "La fonction createFormData() crée un FormData étendu à partir de valeurs imbriquées et expose des helpers pour aplatir ou reconstruire des entrées profondes."
prev:
  text: "builder"
  link: "/fr/v1/api/common/builder"
next:
  text: "override"
  link: "/fr/v1/api/common/override"
---

# createFormData

La fonction **`createFormData()`** crée un `FormData` étendu à partir de valeurs imbriquées (objets et tableaux) et conserve l'entrée d'origine dans `inputValues`.

Utilisez `TheFormData.toFlatEntries(...)` quand vous avez besoin de paires clé/valeur aplaties, et `TheFormData.fromEntries(...)` pour reconstruire un objet imbriqué après réception des entrées form-data côté backend.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/common/createFormData/tryout.doc.ts"
  majorVersion="v1"
  height="586px"
/>

## Syntaxe

```typescript
type EligibleFormDataValue =
	| string
	| File
	| undefined
	| { [key: string]: EligibleFormDataValue }
	| EligibleFormDataValue[];

class TheFormData<
	GenericValues extends Record<string, EligibleFormDataValue>
> extends FormData {
	readonly inputValues: GenericValues;

	static toFlatEntries(
		value: EligibleFormDataValue,
		path?: string
	): Iterable<[string, string | File]>;

	static fromEntries(
		iterable: Iterable<[string, unknown]>,
		arrayMaxIndex: number
	): object;
}

function createFormData<
	GenericValues extends Record<string, EligibleFormDataValue>
>(
	inputValues: GenericValues
): TheFormData<GenericValues>;
```

## Paramètres

- `inputValues` : Objet imbriqué à convertir en `FormData`.
- `iterable` : Entrées plates (souvent la sortie de `FormData.entries()`) à reconstruire.
- `arrayMaxIndex` : Index maximal accepté lors de la reconstruction des tableaux avec `fromEntries`.
- `value` / `path` : Paramètres utilisés par `toFlatEntries` pour aplatir récursivement les données.

## Valeur de retour

- `createFormData(...)` retourne une instance de `TheFormData`.
- `TheFormData.toFlatEntries(...)` retourne un itérable de paires plates `[path, value]`.
- `TheFormData.fromEntries(...)` retourne un objet imbriqué reconstruit.

## Voir aussi

- [`pipe`](/fr/v1/api/common/pipe) - Composer des transformations autour de `createFormData`
- [`stringToBytes`](/fr/v1/api/common/stringToBytes) - Helper de parsing de chaînes souvent utilisé avec les métadonnées multipart
