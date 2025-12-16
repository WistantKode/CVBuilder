# CV Builder

Une application web moderne et interactive pour créer, personnaliser et exporter votre Curriculum Vitae en quelques clics. Construite avec les dernières technologies web : Next.js 15, React 19 et Tailwind CSS.

![Aperçu de CV Builder](/preview.png)


## 🚀 Fonctionnalités

- **Édition en temps réel** : Visualisez instantanément les modifications apportées à votre CV au fur et à mesure que vous remplissez les formulaires.
- **Gestion complète des sections** :
  - Informations personnelles
  - Expériences professionnelles
  - Formation et éducation
  - Compétences techniques
  - Langues
  - Loisirs
- **Thèmes multiples** : Personnalisez l'apparence de votre CV avec une large sélection de thèmes DaisyUI (Cupcake, Dark, Corporate, Emerald, etc.).
- **Export PDF** : Génération et téléchargement de votre CV en format PDF haute qualité (A4) directement depuis le navigateur.
- **Contrôle d'interface** : Zoom ajustable pour une édition précise.
- **Données de démonstration** : L'application est pré-remplie avec des exemples pour faciliter la prise en main (boutons de réinitialisation disponibles par section).
- **Optimisation Desktop** : Conçu spécifiquement pour une expérience optimale sur ordinateur (message d'avertissement sur mobile).

## 🛠️ Stack Technique

- **Framework** : [Next.js 15](https://nextjs.org/) (App Router)
- **UI Library** : [React 19](https://react.dev/)
- **Langage** : [TypeScript](https://www.typescriptlang.org/)
- **Styling** : [Tailwind CSS](https://tailwindcss.com/) & [DaisyUI](https://daisyui.com/)
- **Icônes** : [Lucide React](https://lucide.dev/)
- **Génération PDF** : `html2canvas-pro` + `jspdf`
- **Animation** : `canvas-confetti`

## 📦 Installation

Assurez-vous d'avoir [Node.js](https://nodejs.org/) installé sur votre machine.

1. **Cloner le dépôt**
   ```bash
   git clone <votre-url-de-repo>
   cd cvbuilder
   ```

2. **Installer les dépendances**
   Ce projet utilise `pnpm` (déduit du fichier `pnpm-lock.yaml`), mais vous pouvez aussi utiliser `npm` ou `yarn`.

   ```bash
   pnpm install
   # ou
   npm install
   ```

3. **Lancer le serveur de développement**

   ```bash
   pnpm dev
   # ou
   npm run dev
   ```

4. **Accéder à l'application**
   Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur pour voir le résultat.

## 📁 Structure du Projet

- `app/` : Contient les pages et la logique principale de l'application (Next.js App Router).
  - `page.tsx` : Point d'entrée principal, gère l'état global et l'assemblage des composants.
  - `components/` : Composants UI pour les formulaires (`*Form.tsx`) et la prévisualisation (`CVPreview.tsx`).
- `presets.ts` : Données initiales par défaut pour le CV.
- `type.ts` : Définitions des types TypeScript pour les modèles de données (Experience, Education, etc.).

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou une pull request pour suggérer des améliorations.
