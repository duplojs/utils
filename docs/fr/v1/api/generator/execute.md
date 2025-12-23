---
outline: [2, 3]
prev:
  text: "Generator"
  link: "/fr/v1/api/generator/"
next:
  text: "loop"
  link: "/fr/v1/api/generator/loop"
---

# execute

La fonction **`execute()`** consomme entièrement un générateur en itérant sur tous ses éléments sans retourner de valeur. Utilisée pour terminer une chaîne de transformations sur un générateur.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/generator/execute/tryout.doc.ts"
  majorVersion="v1"
  height="400px"
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

## Voir aussi

- [`loop`](/fr/v1/api/generator/loop) - Crée un générateur avec une boucle personnalisée
- [`map`](/fr/v1/api/generator/map) - Transforme les éléments d'un générateur

## Sources

- [MDN Web Docs - Iterators and generators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators)
