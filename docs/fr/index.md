---
layout: home

hero:
  name: "@duplojs/utils"
  text: "Utilitaires TypeScript"
  tagline: "Des utilitaires robustes avec une excellente expérience développeur."
  image: "/images/logo.png"
  actions:
    - theme: brand
      text: Commencer
      link: "/fr/v1/guide/"
    - theme: alt
      text: Voir sur GitHub
      link: "https://github.com/duplojs/utils"
---

<div style="display: grid; gap: 1rem; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));">
  <div>
    <p><strong>Type native 💀</strong></p>
    <MonacoTSEditor
      src="/examples/v1/examples/native.doc.ts"
      majorVersion="v1"
      height="400px"
    />
  </div>
  <div>
    <p><strong>Type @duplojs/utils 🤩</strong></p>
    <MonacoTSEditor
      src="/examples/v1/examples/utils.doc.ts"
      majorVersion="v1"
      height="400px"
    />
  </div>
</div>
