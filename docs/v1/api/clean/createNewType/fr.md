---
outline: [2, 3]
prev:
  text: "Clean"
  link: "/v1/api/clean/fr"
next:
  text: "createEntity"
  link: "/v1/api/clean/createEntity/fr"
---

# createNewType

`createNewType()` déclare un **type métier** (brand) basé sur un `DataParser`. Le résultat est un `NewTypeHandler` qui permet de créer des valeurs validées (via `Either`) ou de lever une exception (via `createOrThrow`).

Vous pouvez également fournir une ou plusieurs contraintes (`ConstraintHandler`) pour renforcer la validation et marquer la valeur créée.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/clean/createNewType/examples/tryout.doc.ts"
  majorVersion="v1"
  height="300px"
/>

## Syntaxe

```typescript
function createNewType(
	name: string,
	dataParser: DDataParser.DataParser,
	constraint?: ConstraintHandler | readonly ConstraintHandler[]
): NewTypeHandler
```

## Paramètres

- `name` : nom du type métier (sert d'identifiant runtime du `NewType`).
- `dataParser` : parser qui valide/convertit la donnée entrante.
- `constraint` *(optionnel)* : une contrainte ou une liste de contraintes à appliquer (checkers ajoutés au parser).

## Valeur de retour

Un `NewTypeHandler` exposant notamment :

- `create(data)` → `EitherRight`/`EitherLeft`
- `createOrThrow(data)` → retourne la valeur wrappée, ou throw une `CreateNewTypeError`
- `is(value)` → type guard pour vérifier qu'une valeur correspond bien à ce `NewType`

Vous pouvez récupérer le type du `NewType` via :

```typescript
type UserId = C.GetNewType<typeof UserId>;
```

## Voir aussi

- [`createConstraint`](/v1/api/clean/createConstraint/fr) - Construire une contrainte réutilisable
- [`createEntity`](/v1/api/clean/createEntity/fr) - Déclarer une entité à partir de NewTypes
