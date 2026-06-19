---
outline: [2, 3]
description: "Un flag décrit un état métier d'une entité et permet de construire des contrats de type précis sans multiplier les déclinaisons de cette entité."
prev:
  text: "Maybe"
  link: "/fr/v1/api/clean/maybe"
next:
  text: "Evidence"
  link: "/fr/v1/api/clean/evidence"
---

# Flag

Un `flag` décrit un **état métier** d'une entité. Cet état peut être acquis après une validation ou une opération, et peut porter les données qui lui sont propres.

Une fonction peut alors exiger précisément `Entity & MyFlag` plutôt qu'une simple `Entity`. Le type garantit que la fonction reçoit une entité dans l'état attendu.

Les flags évitent de créer une nouvelle déclinaison d'entité pour chaque état, par exemple `MajorUserEntity`, puis de dupliquer les repositories, mappers et autres fonctions associés. Une même entité peut accumuler plusieurs états indépendants tout en conservant sa structure et son écosystème existants.

## Exemple

<MonacoTSEditor
  src="/examples/v1/api/clean/flag/tryout.doc.ts"
  majorVersion="v1"
  height="1279px"
/>

## Fonctionnement

`C.createFlag(...)` retourne un **handler de flag**. Ce handler permet :

- d'ajouter le flag à une entité via `append(...)`
- de récupérer la valeur associée (optionnelle) via `getValue(...)`
- de vérifier la présence du flag via `has(...)`

`append(...)` retourne l'entité enrichie par le type du flag. Les propriétés métier restent identiques, mais le nouvel état fait désormais partie du contrat de type. Plusieurs flags peuvent être combinés sur la même entité pour exprimer un contrat aussi précis que nécessaire.

Dans l'exemple, `drinkAlcohol` accepte uniquement un `User.Entity & User.MajorFlag`. Il n'est donc pas nécessaire de déclarer une seconde entité dédiée aux utilisateurs majeurs ni de recopier le code qui manipule déjà `User.Entity`.

## Créer un `flag`

Créer un flag, c'est définir :

- l'entité sur laquelle cet état peut s'appliquer ;
- le nom unique de l'état ;
- éventuellement, les données associées à cet état.

La valeur optionnelle permet de conserver le résultat qui justifie ou caractérise l'état. Dans l'exemple, `MajorFlag` transporte l'âge validé au moment où l'utilisateur devient majeur dans le contrat de type.

## Méthodes et Propriétés

Un `FlagHandler` expose :

### Méthodes

#### `append()`

Ajoute le flag à l'entité et retourne une entité enrichie du type du flag.

```typescript
function append(
	entity: Entity
): Entity & Flag<FlagName>
```

Si le flag porte une valeur, `append` attend aussi cette valeur :

```typescript
function append(
	entity: Entity,
	value: FlagValue
): Entity & Flag<FlagName, FlagValue>
```

#### `getValue()`

Récupère la valeur associée au flag.

```typescript
function getValue(
	entity: Entity & Flag<FlagName, FlagValue>
): FlagValue
```

#### `has()`

Vérifie si le flag est présent sur l'entité. Cette méthode est un predicate TypeScript : lorsqu'elle retourne `true`, le type de l'entité est affiné avec le flag.

```typescript
function has(
	entity: Entity
): boolean
```

### Propriétés

#### `name`

Le nom unique du flag (la clé stockée sur l'entité).

## Récupérer le type

```typescript
type MajorFlag = C.GetFlag<typeof MajorFlag>;
```

## Voir aussi

- [`entity`](/fr/v1/api/clean/entity)
- [`newType`](/fr/v1/api/clean/newType)
