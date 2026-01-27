---
outline: [2, 3]
description: "Un NewType est un type conçu pour répondre aux exigences métier, tout en étant basé sur un type primitif (ou une structure de données) existant. Il permet d'ajouter des contraintes et des règles spécifiques, garantissant que les valeurs respectent les conditions définies par le métier."
prev:
  text: "Contraintes"
  link: "/fr/v1/api/clean/constraints"
next:
  text: "Entités"
  link: "/fr/v1/api/clean/entity"
---

# NewType

Un `NewType` est un type conçu pour répondre aux exigences métier, tout en étant basé sur un type primitif (ou une structure de données) existant. Il permet d'ajouter des contraintes et des règles spécifiques, garantissant que les valeurs respectent les conditions définies par le métier.

## Exemple

<MonacoTSEditor
  src="/examples/v1/api/clean/newType/tryout.doc.ts"
  majorVersion="v1"
  height="300px"
/>

## Fonctionnement

Un `NewType` est un wrapper typé qui :

- valide une entrée via un `DataParser` (`DP.string()`, `DP.number()`, etc.)
- applique éventuellement une ou plusieurs [contraintes](/fr/v1/api/clean/constraints)
- « brand » la valeur avec un nom (ex: `"userId"`) pour éviter les mélanges accidentels

Vous déclarez un `NewType` via `C.createNewType(...)`, ce qui retourne un **handler**. Ce handler sert ensuite à créer des valeurs sûres au runtime, tout en conservant un typage précis côté TypeScript.

## Créer un `NewType`

Créer un `NewType`, c'est définir :
- un nom (ex: `"userId"`)
- un `DataParser` (ex: `DP.number()`)
- des contraintes optionnelles (ex: `C.Positive`, `C.Email`, ...)

Pour récupérer le type du `NewType` généré, utilisez :

```typescript
type UserId = C.GetNewType<typeof UserId>;
```

## Méthodes et Propriétés

Un `NewTypeHandler` expose les mêmes méthodes de création/validation que les autres handlers Clean, ainsi que quelques propriétés.

### Méthodes

#### `create()`

```typescript
function create(
	value: RawType | Primitive<RawType>
): Right<NewType<NewTypeName, RawType, ConstraintName>> | Left<DP.DataParserError>
```

#### `createOrThrow()`

```typescript
function createOrThrow(
	value: RawType | Primitive<RawType>
): NewType<NewTypeName, RawType, ConstraintName>
```

Lève `C.CreateNewTypeError` en cas d'échec de validation.

#### `createWithUnknown()`

```typescript
function createWithUnknown(
	value: unknown
): Right<NewType<NewTypeName, RawType, ConstraintName>> | Left<DP.DataParserError>
```

#### `createWithUnknownOrThrow()`

```typescript
function createWithUnknownOrThrow(
	value: unknown
): NewType<NewTypeName, RawType, ConstraintName>
```

Lève `C.CreateNewTypeError` en cas d'échec de validation.

#### `is()`

```typescript
function is(
	value: unknown
): value is NewType<NewTypeName, RawType, ConstraintName>
```

### Propriétés

#### `name`

Le nom unique du `NewType` (ex: `"userId"`).

#### `dataParser`

Le `DataParser` utilisé pour valider la donnée (incluant les checkers ajoutés par les contraintes).

#### `constrains`

La liste des contraintes appliquées au `NewType`.

## Voir aussi

- [Primitives](/fr/v1/api/clean/primitives/)
- [Contraintes](/fr/v1/api/clean/constraints)
- [Entités](/fr/v1/api/clean/entity)
