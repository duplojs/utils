---
outline: [2, 3]
prev:
  text: "justReturn"
  link: "/fr/v1/api/common/justReturn"
next:
  text: "loop"
  link: "/fr/v1/api/common/loop"
---

# kind

Les **kinds** sont un mécanisme de **discrimination** de données (type narrowing) basé sur l’ajout d’un marqueur à un objet, mais avec quelques contraintes que nous voulions dans nos projets :

- **Stringification** : le marqueur reste présent après un `JSON.stringify()` / `JSON.parse()`.
- **Non-accessibilité par le type** : le marqueur ne doit pas devenir une propriété “normale” accessible dans votre modèle.
- **Cumul** : un même objet peut porter plusieurs kinds (et donc être filtrable sur plusieurs axes).

::: warning
C’est un “tour de passe passe” entre le typage TypeScript et le runtime (voir `scripts/common/kind.ts`). Nous l’utilisons partout chez nous, mais ce n’est pas forcément un pattern à reproduire dans tous les projets.
:::

## Contexte : discriminer une union

Les deux exemples suivants montrent des solutions classiques pour discriminer une union, avec leurs compromis.

### Solution 1 : `instanceof` (classes)

<MonacoTSEditor
  src="/examples/v1/api/common/kind/withClass.doc.ts"
  majorVersion="v1"
  height="900px"
/>

Le principal inconvénient est qu’après un passage JSON (ou tout autre transport), on perd l’instance et on retombe sur des objets “plats” plus identifiable.

### Solution 2 : propriété discriminante (ex: `kind`)

<MonacoTSEditor
  src="/examples/v1/api/common/kind/withPorp.doc.ts"
  majorVersion="v1"
  height="900px"
/>

Cette approche est très efficace, mais le discriminant devient une propriété “métier” : elle est accessible, sérialisée, et peut entrer en collision avec des données externes.

## Notre approche : `createKind()`

Un kind est créé par `createKind(name)`. Le handler retourné permet :

- d’**ajouter** le kind à un objet (`addTo`)
- de **tester** si un objet porte ce kind (`has`)
- de **lire** sa valeur (`getValue`)

Au runtime, `addTo` ajoute une **propriété string** (préfixée) pour que la donnée survive à la stringification.  
Au niveau du typage, `Kind<...>` utilise un **`Symbol`** pour “cacher” cette info et éviter qu’elle soit manipulée comme une prop normale.

<MonacoTSEditor
  src="/examples/v1/api/common/kind/withKind.doc.ts"
  majorVersion="v1"
  height="980px"
/>

### Cumul de kinds

Vous pouvez accumuler plusieurs kinds sur le même objet en appelant `addTo` plusieurs fois (sur des handlers différents). Chaque kind est stocké sous une clé runtime différente, donc ils n’entrent pas en collision.

## Syntaxe

### `createKind`

```typescript
function createKind<
	GenericName extends string,
	GenericKindValue = unknown
>(
	name: GenericName
): KindHandler<KindDefinition<GenericName, GenericKindValue>>;
```

Contraintes sur `name` :
- ne doit pas contenir `@` ni `/` (réservés au format namespacé)

### `createKindNamespace`

```typescript
function createKindNamespace<
	GenericNamespace extends string
>(namespace: GenericNamespace): <
	GenericName extends string,
	GenericKindValue = unknown
>(
	name: GenericName
) => KindHandler<KindDefinition<`@${GenericNamespace}/${GenericName}`, GenericKindValue>>;
```

`createKindNamespace("MyNamespace")("myKind")` produit un kind nommé `@MyNamespace/myKind`.

## Paramètres et retour (handler)

Un `KindHandler` expose notamment :

- `definition.name` : le nom “logique” du kind (ex: `"paymentRejected"` ou `"@MyNs/myKind"`)
- `runTimeKey` : la clé réellement utilisée sur l’objet au runtime (préfixée `@duplojs/utils/kind/…`)
- `addTo(input, value?)` : retourne une copie de `input` portant le kind (sans mutation)
- `has(input)` : type guard (permet le narrowing d’un union)
- `getValue(input)` : lit la valeur associée au kind
- `setTo(input, value?)` : **déprécié** (mutant)

## Exemple minimal

<MonacoTSEditor
  src="/examples/v1/api/common/kind/use.doc.ts"
  majorVersion="v1"
  height="220px"
/>

## Voir aussi

- [`instanceOf`](/fr/v1/api/common/instanceOf) - Alternative autour de `instanceof`
- [`isType`](/fr/v1/api/common/isType) - Type guards utilitaires
