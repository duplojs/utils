---
outline: [2, 3]
prev:
  text: "createNewType"
  link: "/v1/api/clean/createNewType/fr"
next:
  text: "createConstraint"
  link: "/v1/api/clean/createConstraint/fr"
---

# createEntity

`createEntity()` déclare une **entité métier** à partir d'une définition de propriétés basée sur des `NewTypeHandler`. Il génère automatiquement :

- un `mapDataParser` pour convertir des propriétés brutes en propriétés typées,
- `map()` / `mapOrThrow()` pour construire l'entité depuis du runtime,
- `new()` pour instancier l'entité à partir de propriétés déjà typées.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/clean/createEntity/examples/tryout.doc.ts"
  majorVersion="v1"
  height="450px"
/>

## Syntaxe

```typescript
function createEntity(
	name: string,
	getPropertiesDefinition: (
		params: PropertiesDefinitionParams
	) => EntityPropertiesDefinition
): EntityHandler

interface PropertiesDefinitionParams {
	union(
		...definitions: EntityPropertyDefinition[]
	): { type: EntityPropertyDefinition[] };

	nullable(
		definition: EntityPropertyDefinition
	): { type: EntityPropertyDefinition; nullable: true };

	array(
		definition: EntityPropertyDefinition,
		params?: { min?: number; max?: number }
	): { type: EntityPropertyDefinition; inArray: true; min?: number; max?: number };
}
```

## Paramètres

- `name` : nom de l'entité (sert d'identifiant runtime).
- `getPropertiesDefinition(params)` : callback qui retourne la définition des propriétés.

`params` expose des helpers pour enrichir la définition :

- `nullable(definition)` : autorise `null`.
- `array(definition, { min?, max? })` : valeur en tableau (avec min/max optionnels).
- `union(...definitions)` : union de plusieurs `NewTypeHandler`.

## Valeur de retour

Un `EntityHandler` avec :

- `map(raw)` → `EitherRight`/`EitherLeft`
- `mapOrThrow(raw)` → entité typée ou throw `CreateEntityError`
- `new(properties)` → crée une entité à partir de propriétés déjà typées
- `is(value)` → type guard

Vous pouvez récupérer le type de l'entité via :

```typescript
type User = C.GetEntity<typeof User>;
```

## Voir aussi

- [`createNewType`](/v1/api/clean/createNewType/fr)
- [`createFlag`](/v1/api/clean/createFlag/fr)
