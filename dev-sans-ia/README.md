<h1 align="center">Développement d'un store</h1>

<p align="center">
  <img src="https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white" alt="Angular">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/CDA-Simplon-555555?style=for-the-badge" alt="CDA Simplon">
</p>

<p align="center">
Boutique en ligne haut de gamme développée en **Angular**, **TypeScript** et **TailwindCSS**, dans le cadre du brief CDA *"Développement d'un store"* (groupe non assisté par l'IA)..
</p>

> Nous avons travaillé en équipe avec [**Chidori06**](https://github.com/Chidori06), [**MikaOcko**](https://github.com/MikaOcko), [**August2068**](https://github.com/August2068), [**porte-christophe**](https://github.com/porte-christophe) et [**fannysaez**](https://github.com/fannysaez)

Les produits sont récupérés dynamiquement depuis l'API publique [FakeStoreAPI](https://fakestoreapi.com/).

📖 Documentation complète (organisation, choix techniques, architecture, conventions Git...) : [Wiki du projet](https://github.com/developpement-sans-ia/developing-store/wiki)

---

## Technologies utilisées

- [Angular](https://angular.dev/) 22 (+ SSR)
- [TypeScript](https://www.typescriptlang.org/) 6
- [TailwindCSS](https://tailwindcss.com/) 4
- RxJS
- [Vitest](https://vitest.dev/) (tests unitaires)
- [FakeStoreAPI](https://fakestoreapi.com/) (données produits)

## Commandes essentielles

### Installation

```bash
# Installer Node.js (via nvm recommandé) puis vérifier
node -v
npm -v

# Installer le CLI Angular globalement
npm install -g @angular/cli

# Vérifier l'installation
ng version
```

### Créer un premier projet

```bash
git clone https://github.com/developpement-sans-ia/developing-store.git

cd developing-store/dev-sans-ia

npm install
```

Le CLI pose quelques questions à la création :

- `Would you like to add Angular routing?` → `y` pour activer le routage dès le départ
- `Which stylesheet format would you like to use?` → `CSS` (ou Sass/SCSS selon les besoins)

### Lancer le serveur de développement

```bash

ng serve
```

L'application est accessible sur `http://localhost:4200` et se recharge automatiquement à chaque modification (*hot reload*).

### Générer des éléments (schematics)

```bash
ng generate component nom-composant   # ou : ng g c nom-composant
ng generate service nom-service       # ou : ng g s nom-service
ng generate pipe nom-pipe             # ou : ng g p nom-pipe
ng generate directive nom-directive   # ou : ng g d nom-directive
ng generate interface nom-interface   # ou : ng g i nom-interface
```

### Build et tests

```bash
ng build     # Compile l'application pour la production (dossier dist/)
ng test      # Lance les tests unitaires (Karma/Jasmine)
ng lint      # Vérifie le style du code (si configuré)
```

---

## Captures d'écran de la maquette

<div align="center">
  <img src="assets/maquette/01-desktop.png" alt="Maquette Desktop" width="380" align="top">
  <img src="assets/maquette/02-mobile.png" alt="Maquette Mobile" width="140" align="top">
  <br>
  <sub><b>Desktop</b> · <b>Mobile</b></sub>
</div>

*(à ajouter au fil de l'avancement — voir aussi les maquettes détaillées sur le [Wiki](https://github.com/developpement-sans-ia/developing-store/wiki/Maquettes))*

---

## Organisation du dépôt

- `dev-sans-ia/` — application Angular
- Branches : 
  - `main` (stable), 
  - `develop` (intégration),
  - `feat/*` (fonctionnalités) — détails sur le [Wiki](https://github.com/developpement-sans-ia/developing-store/wiki)

---

<p align="center">
  <a href="https://github.com/developpement-sans-ia/developing-store/wiki"><img src="https://img.shields.io/badge/-SUIVANT%20%3A%20WIKI-DD0031?style=for-the-badge" alt="SUIVANT : WIKI"></a>
</p>
