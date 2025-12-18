---
outline: [2, 3]
prev:
  text: "NewType"
  link: "/v1/api/clean/newType/fr"
next:
  text: "Flag"
  link: "/v1/api/clean/flag/fr"
---

# Entités

Une entité représente une structure de données métier, composée de plusieurs propriétés. Chaque propriété est typée via un `NewType`.

## Exemple

<MonacoTSEditor
  src="/v1/api/clean/entity/examples/tryout.doc.ts"
  majorVersion="v1"
  height="680px"
/>

:::info
En général on préfère définir une fonction `create()` plutôt que d'utiliser la fonction `new()` pour prévenir les cas de valeur par défaut.
:::

## Fonctionnement

`C.createEntity(...)` retourne un **handler d'entité**.

Ce handler vous donne deux manières de construire une entité :

- `map(...)` / `mapOrThrow(...)` : à partir de propriétés brutes (ex: payload HTTP, DB, etc.). Les valeurs passent par les `DataParser` de chaque `NewType` et les contraintes associées.

<MonacoTSEditor
  src="/v1/api/clean/entity/examples/second.doc.ts"
  majorVersion="v1"
  height="350px"
  :foldLines="[2]"
/>

- `new(...)` : à partir de propriétés déjà typées (utile quand vous êtes déjà dans du code métier).

L'entité créée est ensuite identifiable avec `is(...)` (type guard), ce qui facilite le narrowing dans des unions.

## Définir les propriétés

La définition des propriétés se fait via un callback : vous retournez un objet où chaque clé est une propriété métier, et chaque valeur est un `NewTypeHandler` (ou une définition avancée).

Le callback reçoit `params`, qui expose des helpers pour enrichir la définition :

### `nullable(definition)`

Autorise `null` sur une propriété.

### `array(definition, { min?, max? })`

Déclare une propriété sous forme de tableau, avec min/max optionnels (validation runtime + typage).

### `union(...definitions)`

Déclare une union de plusieurs `NewTypeHandler` pour une même propriété.

Ces helpers sont combinables (ex: `nullable(array(...))`), et ils servent autant au runtime (validation) qu'au typage.

## Méthodes et Propriétés

Un `EntityHandler` expose :

### Méthodes

#### `new()`

Construit l'entité à partir de propriétés déjà typées.

```typescript
function new(
	properties: Properties
): Entity<EntityName> & Properties
```

#### `map()`

Valide et transforme des propriétés brutes en propriétés typées, puis construit l'entité.

```typescript
function map(
	rawProperties: RawProperties
): EitherRight<Entity<EntityName> & Properties> | EitherLeft<DP.DataParserError>
```

#### `mapOrThrow()`

```typescript
function mapOrThrow(
	rawProperties: RawProperties
): Entity<EntityName> & Properties
```

Lève `C.CreateEntityError` en cas d'échec de validation.

#### `is()`

```typescript
function is(
	value: unknown
): value is Entity<EntityName>
```

### Propriétés

#### `name`

Le nom unique de l'entité (ex: `"User"`), utilisé comme identifiant runtime.

#### `propertiesDefinition`

La définition des propriétés (telle que déclarée dans `createEntity`).

#### `mapDataParser`

Le `DataParser` généré à partir de `propertiesDefinition` (pratique si vous voulez réutiliser la validation/transform ailleurs).

## Récupérer le type

Pour récupérer le type de l'entité générée :

```typescript
type User = C.GetEntity<typeof User>;
```

## Voir aussi

- [`newType`](/v1/api/clean/newType/fr)
- [`flag`](/v1/api/clean/flag/fr)
