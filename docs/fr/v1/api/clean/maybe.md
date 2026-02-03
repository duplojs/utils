---
outline: [2, 3]
description: "Maybe définit un contrat métier explicite pour représenter une entité présente (`some`) ou absente (`none`) sans exposer `null`/`undefined` dans le domaine."
prev:
  text: "unwrapEntity"
  link: "/fr/v1/api/clean/unwrapEntity"
next:
  text: "Flag"
  link: "/fr/v1/api/clean/flag"
---

# Maybe

`Maybe` définit un contrat métier explicite pour représenter une entité présente (`some`) ou absente (`none`) sans exposer `null`/`undefined` dans le domaine.

## Exemple

<MonacoTSEditor
  src="/examples/v1/api/clean/maybe/tryout.doc.ts"
  majorVersion="v1"
  height="649px"
/>

## Syntaxe

### Type `Maybe`

```typescript
type Maybe<Entity extends C.Entity> =
	| C.Some<Entity>
	| C.None<C.GetKindValue<typeof C.entityKind, Entity>>
```

### Constructeur `some`

```typescript
function some<Entity extends C.Entity>(
	entity: Entity
): C.Some<Entity>
```

### Constructeur `none`

```typescript
function none<EntityName extends string>(
	entityName: EntityName
): C.None<EntityName>
```

## Parametres

- `entity` : entité métier valide à encapsuler dans la branche "présente".
- `entityName` : nom de l'entité métier pour produire la branche "absente" typée.

## Valeur de retour

- `some(entity)` retourne une valeur `C.Some<Entity>`.
- `none(name)` retourne une valeur `C.None<name>`.
- les deux respectent le contrat `C.Maybe<Entity>` quand le nom d'entité correspond.

## Pourquoi c'est utile en métier ?

Le type `Maybe` permet de définir le contrat d'un use case avant l'implémentation :
- un résultat trouvé est explicitement typé avec `some(...)`
- une absence est explicitement typée avec `none(...)`
- le contrat reste lisible et stable côté domaine.

## Voir aussi

- [`entity`](/fr/v1/api/clean/entity)
- [`unwrapEntity`](/fr/v1/api/clean/unwrapEntity)
- [`useCase`](/fr/v1/api/clean/useCase)
