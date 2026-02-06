---
outline: [2, 3]
description: "Une contrainte permet de définir une règle que le typage ne pourra pas vérifier à lui seul. Par exemple, une contrainte peut vérifier qu'une chaîne de caractères respecte un format particulier (email, URL, …), ou qu'un nombre est dans une certaine plage. Une contrainte s'applique à une primitive."
prev:
  text: "Primitives"
  link: "/fr/v1/api/clean/primitives"
next:
  text: "NewType"
  link: "/fr/v1/api/clean/newType"
---

# Contraintes

Une contrainte permet de définir une règle que le typage ne pourra pas vérifier à lui seul. Par exemple, une contrainte peut vérifier qu'une chaîne de caractères respecte un format particulier (email, URL, …), ou qu'un nombre est dans une certaine plage.
Une contrainte s'applique à une [primitive](/fr/v1/api/clean/primitives/).

## Fonctionnement

Une contrainte est créée à partir :
- d'une primitive (ex: `C.String`, `C.Number`)
- d'un ou plusieurs checkers du `DDataParser` (`DP.checkerEmail()`, `DP.checkerInt()`, ...)

Au runtime, une contrainte valide la valeur, puis ajoute un marquage interne (par nom de contrainte).
Côté TypeScript, ce marquage se reflète dans le type : on peut alors écrire des fonctions qui acceptent « n'importe quelle valeur portant cette contrainte », qu'il s'agisse d'une primitive contrainte ou d'un `NewType` qui embarque la même contrainte.

## Exemple

<MonacoTSEditor
  src="/examples/v1/api/clean/constraints/tryout.doc.ts"
  majorVersion="v1"
  height="480px"
/>

## Ensembles de contraintes

Quand vous devez appliquer plusieurs contraintes ensemble, vous pouvez créer un ensemble réutilisable avec `C.createConstraintsSet(...)`.

<MonacoTSEditor
  src="/examples/v1/api/clean/constraints/constraintsSet.doc.ts"
  majorVersion="v1"
  height="418px"
/>

## Créer une contrainte

Pour créer une contrainte, utilisez `C.createConstraint(name, primitive, checker)` puis récupérez son type via `C.GetConstraint`.

Ce type (ex: `SlugConstraint`) sert ensuite :
- comme « contrat » (ex: paramètre de fonction)
- comme contrainte à appliquer lors de la création d'un `NewType` (`C.createNewType(..., SlugConstraint)`)

## Méthodes et Propriétés

Une contrainte est un *handler* (comme une primitive). Elle expose donc des méthodes de création/validation et quelques propriétés.

### Méthodes

#### `create()`

```typescript
function create(
	value: RawType | Primitive<RawType>
): Right<ConstrainedType<ConstraintName, RawType>> | Left<DP.DataParserError>
```

#### `createOrThrow()`

```typescript
function createOrThrow(
	value: RawType | Primitive<RawType>
): ConstrainedType<ConstraintName, RawType>
```

Lève `C.CreateConstrainedTypeError` en cas d'échec de validation.

#### `createWithUnknown()`

```typescript
function createWithUnknown(
	value: unknown
): Right<ConstrainedType<ConstraintName, RawType>> | Left<DP.DataParserError>
```

#### `createWithUnknownOrThrow()`

```typescript
function createWithUnknownOrThrow(
	value: unknown
): ConstrainedType<ConstraintName, RawType>
```

Lève `C.CreateConstrainedTypeError` en cas d'échec de validation.

#### `is()`

```typescript
function is(
	value: unknown
): value is ConstrainedType<ConstraintName, RawType>
```

### Propriétés

#### `name`

Le nom unique de la contrainte (ex: `"email"`, `"int"`, ...).

#### `checkers`

La liste des checkers du `DDataParser` utilisés pour valider la valeur.

#### `primitiveHandler`

La primitive sur laquelle s'applique la contrainte (ex: `C.String`, `C.Number`).

## Contraintes fournies par la librairie

La librairie exporte quelques contraintes prêtes à l'emploi via `C.*` :

### `Email`

Valide une chaîne au format email.

<MonacoTSEditor
  src="/examples/v1/api/clean/constraints/email.doc.ts"
  majorVersion="v1"
  height="240px"
/>

### `Url`

Valide une chaîne au format URL.

<MonacoTSEditor
  src="/examples/v1/api/clean/constraints/url.doc.ts"
  majorVersion="v1"
  height="240px"
/>

### `StringMin`

Valide une chaîne avec une longueur minimale (>= min).

<MonacoTSEditor
  src="/examples/v1/api/clean/constraints/stringMin.doc.ts"
  majorVersion="v1"
  height="271px"
/>

### `StringMax`

Valide une chaîne avec une longueur maximale (<= max).

<MonacoTSEditor
  src="/examples/v1/api/clean/constraints/stringMax.doc.ts"
  majorVersion="v1"
  height="271px"
/>

### `Int`

Valide un nombre entier.

<MonacoTSEditor
  src="/examples/v1/api/clean/constraints/int.doc.ts"
  majorVersion="v1"
  height="240px"
/>

### `Positive`

Valide un nombre strictement positif (>= 1).

<MonacoTSEditor
  src="/examples/v1/api/clean/constraints/positive.doc.ts"
  majorVersion="v1"
  height="240px"
/>

### `PositiveInt`

Valide un nombre entier strictement positif (>= 1).

<MonacoTSEditor
  src="/examples/v1/api/clean/constraints/positiveInt.doc.ts"
  majorVersion="v1"
  height="240px"
/>

### `Negative`

Valide un nombre strictement négatif (<= -1).

<MonacoTSEditor
  src="/examples/v1/api/clean/constraints/negative.doc.ts"
  majorVersion="v1"
  height="240px"
/>

### `NumberMin`

Valide un nombre supérieur ou égal à min.

<MonacoTSEditor
  src="/examples/v1/api/clean/constraints/numberMin.doc.ts"
  majorVersion="v1"
  height="271px"
/>

### `NumberMax`

Valide un nombre inférieur ou égal à max.

<MonacoTSEditor
  src="/examples/v1/api/clean/constraints/numberMax.doc.ts"
  majorVersion="v1"
  height="271px"
/>

### `PositiveTime`

Valide une durée strictement positive (>= 1 milliseconde) sur la primitive `C.Time`.

<MonacoTSEditor
  src="/examples/v1/api/clean/constraints/positiveTime.doc.ts"
  majorVersion="v1"
  height="271px"
/>

### `NegativeTime`

Valide une durée strictement négative (<= -1 milliseconde) sur la primitive `C.Time`.

<MonacoTSEditor
  src="/examples/v1/api/clean/constraints/negativeTime.doc.ts"
  majorVersion="v1"
  height="271px"
/>

## Voir aussi

- [Primitives](/fr/v1/api/clean/primitives/)
- [NewType](/fr/v1/api/clean/newType)
