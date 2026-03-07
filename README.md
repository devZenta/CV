# 📄 CV — Hugo GHESQUIER

> Mon CV codé en HTML & généré en PDF via Puppeteer. Parce que je suis dev, autant faire mon CV comme un dev.

## 🚀 Stack

- **Runtime** — [Bun](https://bun.sh)
- **PDF generation** — [Puppeteer](https://pptr.dev)
- **Language** — HTML / CSS
- **CI/CD** — GitHub Actions

## 📦 Installation

```bash
bun install
```

## ⚡ Générer le PDF

```bash
bun pdf
```

Le PDF est généré dans `CV/CV_Hugo_GHESQUIER.pdf`.

## 🗂️ Structure

```
├── src/
│   ├── index.html     # Le CV
│   └── build.js       # Script de génération PDF
├── CV/                # Dossier de sortie (gitignored)
└── package.json
```

## 📋 Versions

Toutes les versions du CV sont disponibles dans les [Releases](https://github.com/devZenta/CV/releases).
