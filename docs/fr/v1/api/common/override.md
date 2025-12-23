---
outline: [2, 3]
prev:
  text: "builder"
  link: "/fr/v1/api/common/builder"
next:
  text: "Common"
  link: "/fr/v1/api/common/"
---

# override

La fonction **`createOverride()`** permet d’**enregistrer des modifications** (valeurs par défaut et/ou méthodes) qui seront **appliquées lors de la création d’un objet**.

Le pattern typique est :
1) créer l’objet de base
2) appeler `overrideHandler.apply(self)` juste avant de le retourner
3) depuis un autre module, enregistrer des overrides via `setPropertyDefaultValue` / `setMethod`

Cet outil est beaucoup utilisé dans `dataParser` pour permettre d’ajouter/altérer des capacités sans modifier l’implémentation du parser.

::: warning
Les overrides sont stockés dans un store global (valide dans tout le process) : le dernier override appliqué sur une même propriété/méthode gagne.
:::

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/common/override/tryout.doc.ts"
  majorVersion="v1"
  height="760px"
/>

## Syntaxe

```typescript
interface OverrideHandler<
	GenericInterface extends object
> {
	setMethod<
		GenericProperty extends keyof GenericInterface
	>(
		prop: GenericProperty,
		theFunction: (
			self: GenericInterface,
			...args: any[]
		) => any
	): void;

	setPropertyDefaultValue<
		GenericProperty extends keyof GenericInterface
	>(
		prop: GenericProperty,
		value: any
	): void;

	apply(overrideInterface: GenericInterface): GenericInterface;
}

function createOverride<
	GenericInterface extends object
>(overrideName: string): OverrideHandler<GenericInterface>;
```

## Notes d’usage

- `overrideName` : choisissez un nom **unique** (souvent un identifiant namespacé du style `@duplojs/utils/...`).
- `apply(self)` : applique les overrides et retourne un nouvel objet `self` (avec méthodes wrapées pour recevoir le bon `self`).
- `setMethod(...)` : la fonction reçoit `self` en premier paramètre, ce qui permet d’éviter les problèmes de `this` et de référencer les propriétés overridées.
- `setPropertyDefaultValue(...)` : définit une valeur appliquée à la création (et peut écraser une valeur existante).

## Voir aussi

- [`builder`](/fr/v1/api/common/builder) - Pattern similaire “déclarer puis configurer”
- [`globalStore`](/fr/v1/api/common/globalStore) - Stockage global par process
