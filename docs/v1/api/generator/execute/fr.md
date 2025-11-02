---
outline: [2, 3]
prev:
  text: "Generator"
  link: "/v1/api/generator/fr"
next:
  text: "loop"
  link: "/v1/api/generator/loop/fr"
---

# execute

La fonction **`execute()`** consomme entièrement un générateur en itérant sur tous ses éléments sans retourner de valeur. Utilisée pour terminer une chaîne de transformations sur un générateur.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/generator/execute/examples/tryout.doc.ts"
  majorVersion="v1"
  height="200px"
/>

## Syntaxe

### Signature synchrone

```typescript
function execute<
	GenericIterator extends Iterable<unknown>
>(
	iterator: GenericIterator
): void
```

### Signature asynchrone

```typescript
function execute<
	GenericIterator extends AsyncIterable<unknown>
>(
	iterator: GenericIterator
): Promise<void>
```

## Paramètres

- `iterator` : Le générateur (synchrone ou asynchrone) à exécuter complètement.

## Valeur de retour

`void` pour les générateurs synchrones, `Promise<void>` pour les générateurs asynchrones.

## Exemples

### Consommer un générateur filtré

<MonacoTSEditor
  src="/v1/api/generator/execute/examples/consumeFiltered.doc.ts"
  majorVersion="v1"
  height="350px"
/>

## Voir aussi

- [`loop`](/v1/api/generator/loop/fr) - Crée un générateur avec une boucle personnalisée
- [`map`](/v1/api/generator/map/fr) - Transforme les éléments d'un générateur

## Sources

- [MDN Web Docs - Iterators and generators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators)
