---
outline: [2, 3]
description: "Une entité représente une structure de données métier, composée de plusieurs propriétés. Chaque propriété est typée via un NewType."
prev:
  text: "NewType"
  link: "/fr/v1/api/clean/newType"
next:
  text: "unwrapEntity"
  link: "/fr/v1/api/clean/unwrapEntity"
---

# Entités

Une entité représente une structure de données métier, composée de plusieurs propriétés. Chaque propriété est typée via un `NewType`.

## Exemple

<MonacoTSEditor
  src="/examples/v1/api/clean/entity/tryout.doc.ts"
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
  src="/examples/v1/api/clean/entity/second.doc.ts"
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
	rawProperties: PropertiesToMapOfEntity
): Right<Entity<EntityName> & Properties> | Left<DP.DataParserError>
```

`rawProperties` est volontairement permissif : certaines contraintes (par exemple `array(..., { min })`) sont vérifiées au moment de la validation.

#### `mapOrThrow()`

```typescript
function mapOrThrow(
	rawProperties: PropertiesToMapOfEntity
): Entity<EntityName> & Properties
```

Lève `C.CreateEntityError` en cas d'échec de validation.

#### `is()`

```typescript
function is(
	value: unknown
): value is Entity<EntityName>
```

#### `update()`

Met a jour une entite existante en fusionnant des proprietes typees.

```typescript
function update(
	entity: Entity<EntityName>,
	properties: Partial<Properties>
): Entity<EntityName> & Properties
```

### Propriétés

#### `name`

Le nom unique de l'entité (ex: `"User"`), utilisé comme identifiant runtime.

#### `propertiesDefinition`

La définition des propriétés (telle que déclarée dans `createEntity`).

#### `mapDataParser`

Le `DataParser` généré à partir de `propertiesDefinition` (pratique si vous voulez réutiliser la validation/transform ailleurs). Il accepte une entrée `unknown` et produit des propriétés d'entité typées.

## Récupérer le type

Pour récupérer le type de l'entité générée :

```typescript
type User = C.GetEntity<typeof User>;
```

## Voir aussi

- [`newType`](/fr/v1/api/clean/newType)
- [`unwrapEntity`](/fr/v1/api/clean/unwrapEntity)
- [`flag`](/fr/v1/api/clean/flag)
