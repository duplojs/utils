---
outline: [2, 3]
prev:
  text: "Entités"
  link: "/fr/v1/api/clean/entity"
next:
  text: "Maybe"
  link: "/fr/v1/api/clean/maybe"
description: "Déballe une entité en objet simple et expose ses métadonnées."
---

# unwrapEntity

`unwrapEntity` transforme une entité en objet simple, en déballant les valeurs des `NewType` et en exposant ses métadonnées.
Par défaut, les valeurs sont déballées telles quelles. Vous pouvez fournir un `transformer` (ex: `toNative`, `toJSON`) pour projeter les valeurs pendant le déballage.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/clean/unwrapEntity/tryout.doc.ts"
  majorVersion="v1"
  height="550px"
  :foldLines="[3]"
/>

## Syntaxe

### Signature classique

```typescript
function unwrapEntity(
	entity: Entity,
	params?: { transformer?: TransformerFunction }
): UnwrapEntity<Entity, TransformerFunction>
```

## Parametres

- `entity` : L'entité à déballer.
- `params` : Paramètres optionnels.
- `params.transformer` : Transformateur appliqué à chaque valeur déballée.

## Valeur de retour

Un objet readonly contenant les propriétés déballées, plus `_entityName` et `_flags` si présents.

## Type utilitaire

```typescript
type UnwrappedUser = C.UnwrapEntity<UserEntity>;
type UnwrappedUserJSON = C.UnwrapEntity<UserEntity, TransformerFunction<"toJSON">>;
```

## Voir aussi

- [`entity`](/fr/v1/api/clean/entity)
- [`maybe`](/fr/v1/api/clean/maybe)
- [`flag`](/fr/v1/api/clean/flag)
