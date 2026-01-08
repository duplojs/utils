---
outline: [2, 3]
prev:
  text: "Entités"
  link: "/fr/v1/api/clean/entity"
next:
  text: "Flag"
  link: "/fr/v1/api/clean/flag"
description: "Déballe une entité en objet simple et expose ses métadonnées."
---

# unwrapEntity

`unwrapEntity` transforme une entité en objet simple, en déballant les valeurs des `NewType` et en exposant ses métadonnées.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/clean/unwrapEntity/tryout.doc.ts"
  majorVersion="v1"
  height="480px"
  :foldLines="[3]"
/>

## Syntaxe

### Signature classique

```typescript
function unwrapEntity(
	entity: Entity
): UnwrapEntity<Entity>
```

## Parametres

- `entity` : L'entité à déballer.

## Valeur de retour

Un objet simple contenant les propriétés brutes, plus `_entityName` et `_flags` si présents.

## Type utilitaire

```typescript
type UnwrappedUser = C.UnwrapEntity<User>;
```

## Voir aussi

- [`entity`](/fr/v1/api/clean/entity)
- [`flag`](/fr/v1/api/clean/flag)
