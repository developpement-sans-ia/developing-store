# Developing Store

Boutique en ligne haut de gamme développée en **Angular**, **TypeScript** et **TailwindCSS**, dans le cadre du brief CDA *"Développement d'un store"* (groupe non assisté par l'IA).

Les produits sont récupérés dynamiquement depuis l'API publique [FakeStoreAPI](https://fakestoreapi.com/).

📖 Documentation complète (organisation, choix techniques, architecture, conventions Git...) : [Wiki du projet](https://github.com/developpement-sans-ia/developing-store/wiki)

## Technologies utilisées

- [Angular](https://angular.dev/) 22 (+ SSR)
- [TypeScript](https://www.typescriptlang.org/) 6
- [TailwindCSS](https://tailwindcss.com/) 4
- RxJS
- [Vitest](https://vitest.dev/) (tests unitaires)
- [FakeStoreAPI](https://fakestoreapi.com/) (données produits)

## Procédure d'installation

```bash
git clone https://github.com/developpement-sans-ia/developing-store.git
cd developing-store/dev-sans-ia
npm install
```

## Procédure de lancement

```bash
npm start
```

L'application est accessible sur `http://localhost:4200/`.

### Tests

```bash
npm test
```

## Captures d'écran

*(à ajouter au fil de l'avancement — voir aussi les maquettes détaillées sur le [Wiki](https://github.com/developpement-sans-ia/developing-store/wiki/Maquettes))*

## Organisation du dépôt

- `dev-sans-ia/` — application Angular
- Branches : `main` (stable), `develop` (intégration), `feat/*` (fonctionnalités) — détails sur le [Wiki](https://github.com/developpement-sans-ia/developing-store/wiki/Convention-Git)
