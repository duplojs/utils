---
outline: [2, 3]
description: "Un flag permet d'ajouter un marqueur sur une entité postérieurement à sa création. Il a pour but d'indiquer qu'une vérification a eu lieu, ou qu'une opération particulière a été effectuée, sans modifier la structure de l'entité."
prev:
  text: "Maybe"
  link: "/fr/v1/api/clean/maybe"
next:
  text: "Repository"
  link: "/fr/v1/api/clean/repository"
---

# Flag

Un `flag` permet d'ajouter un marqueur sur une entité postérieurement à sa création.
Il a pour but d'indiquer qu'une vérification a eu lieu, ou qu'une opération particulière a été effectuée, sans modifier la structure de l'entité.

## Exemple

<MonacoTSEditor
  src="/examples/v1/api/clean/flag/tryout.doc.ts"
  majorVersion="v1"
  height="1200px"
/>

## Fonctionnement

`C.createFlag(...)` retourne un **handler de flag**. Ce handler permet :

- d'ajouter le flag à une entité via `append(...)`
- de récupérer la valeur associée (optionnelle) via `getValue(...)`
- de vérifier la présence du flag via `has(...)`

Une fois le flag ajouté, le typage de l'entité est enrichi : vous pouvez exiger `Entity & MyFlag` dans une fonction, pour garantir qu'une étape métier a bien été effectuée.

## Créer un `flag`

Créer un flag, c'est définir :
- sur quelle entité il s'applique
- son nom (clé stockée sur l'entité)
- une valeur optionnelle associée au flag (utile pour transporter une donnée calculée)

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

Vérifie si le flag est présent sur l'entité.

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
