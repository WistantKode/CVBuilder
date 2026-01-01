# 🎨 Landing Page : Plan d'Implémentation "Atomic Design"

L'objectif est de reproduire fidèlement la maquette avec une structure de composants ultra-découpée pour faciliter la maintenance et l'évolution vers le SaaS.

## 1. Structure des Dossiers (Spécifique Marketing)

Nous allons isoler les composants de la landing page pour ne pas polluer ceux de l'éditeur.

```bash
components/
├── landing/
│   ├── layout/          # Éléments de structure (Navbar, Footer)
│   ├── sections/        # Grandes sections de la page
│   │   ├── hero/        # Tout ce qui concerne le haut de page
│   │   ├── features/    # Grilles d'avantages
│   │   └── social-proof/# Témoignages, Logos partenaires
│   └── atoms/           # Composants graphiques réutilisables
│       ├── Button.tsx   # Boutons premium avec effets
│       ├── Badge.tsx    # Badges "Nouveau", "Pro", etc.
│       └── Icons.tsx    # Icônes flottantes (comme sur la maquette)
```

## 2. Découpage Granulaire (Atomic Breakdown)

### A. Le Header (Navbar)

- `Logo.tsx` : Texte + Icone stylisée.
- `NavLinks.tsx` : Liste des liens avec effets de survol fluides.
- `AuthButtons.tsx` : Boutons "Se connecter" et "Commencer".

### B. La Hero Section (Inspiration Maquette)

- `HeroContent.tsx` : Titre (H1), sous-titre et CTA principal.
- `FloatingPreview.tsx` : L'élément central montrant l'application.
    - `PreviewCard.tsx` : La carte "Rental" de ta maquette, adaptée en "CV".
    - `DecorativeElements.tsx` : Les icônes flottantes (Cœur, Clap, Main) avec animations de lévitation (Framer Motion).
- `SocialProofSmall.tsx` : La petite puce "Louis Staub / J'optimise..." en bas.

### C. Le Système de Design

- **Couleurs** : Utilisation de variables CSS pour le vert émeraude/primaire de ta maquette.
- **Typographie** : Combinaison d'une police "Bold" pour les titres et une sans-serif propre pour le corps.
- **Animations** : `framer-motion` pour les apparitions au scroll et les éléments flottants.

## 3. Ordre d'Implémentation

1.  **Tokens & Base** : Configuration des couleurs et polices dans `tailwind.config.ts`.
2.  **Ateliers Atomes** : Création des boutons et badges premium.
3.  **Construction Layout** : Navbar et Footer.
4.  **Le Bloc Hero** : Assemblage du contenu et des éléments flottants.
5.  **Final Polish** : Ajout des micro-animations et responsive mobile.

## 4. Choix Techniques

- **Framework** : Next.js 16 (App Router).
- **Styling** : Tailwind CSS + DaisyUI (pour les bases) + Custom CSS (pour le "glassmorphism").
- **Animations** : Framer Motion (pour l'effet "Wow").
- **Icônes** : Lucide React.
