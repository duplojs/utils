---
outline: [2, 3]
prev:
  text: "useCaseInstances"
  link: "/v1/api/clean/useCaseInstances/fr"
next:
  text: "primitives"
  link: "/v1/api/clean/primitives/fr"
---

# createFlag

`createFlag()` construit un handler permettant **d'ajouter** et **de lire** un flag sur une entité. Un flag sert typiquement d'indicateur qu'une étape métier a été effectuée (validation, contrôle, workflow), afin de pouvoir ensuite restreindre le type attendu par les fonctions suivantes.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/clean/createFlag/examples/tryout.doc.ts"
  majorVersion="v1"
  height="1200px"
/>

## Syntaxe

```typescript
function createFlag<
	GenericEntity extends Entity, 
	GenericName extends string, 
	GenericValue extends unknown = never,
>(
	name: GenericName
): FlagHandler<GenericEntity, GenericName, GenericValue>
```

## Paramètres

- `name` : nom du flag (clé stockée sur l'entité).

## Valeur de retour

Un `FlagHandler` avec :

- `append(entity, value?)` : ajoute le flag (avec ou sans valeur selon le type)
- `getValue(entity)` : récupère la valeur du flag

Vous pouvez récupérer le type du flag via :

```typescript
type MajorFlag = C.GetFlag<typeof MajorFlag>;
```

## Voir aussi

- [`createEntity`](/v1/api/clean/createEntity/fr)
