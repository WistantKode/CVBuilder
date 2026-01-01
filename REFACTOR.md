# 🏗️ Plan de Refactorisation : Architecture Modulaire SaaS

L'objectif est de transformer l'application monolithique actuelle en une plateforme extensible capable de gérer des dizaines de templates isolés et interchangeables.

## 1. Nouvelle Structure de Dossiers

Nous allons isoler chaque template dans son propre "micro-écosystème" pour garantir que les changements sur l'un n'affectent pas les autres.

```bash
src/
├── app/                  # Routes Next.js (Marketing, Dashboard, Auth)
├── components/
│   ├── editor/          # Interface de l'éditeur (Panneaux, Inputs)
│   ├── ui/              # Composants atomiques (Boutons, Cards)
│   └── shared/          # Composants de CV partagés (SectionTitle, Badge)
├── templates/           # LE CŒUR DU SYSTÈME
│   ├── registry.ts       # Liste de tous les templates disponibles
│   ├── base-styles.css   # Styles globaux partagés par les templates
│   └── [template-id]/    # Dossier spécifique à un template (ex: 'modern-dark')
│       ├── index.tsx     # Point d'entrée du template
│       ├── components/   # Sous-composants spécifiques à ce template
│       ├── styles.css    # Styles dédiés
│       └── config.json   # Métadonnées (nom, layout par défaut, icône)
├── context/              # État global (Données du CV, UI State)
├── lib/                  # Utilitaires (Génération PDF, formatage date)
└── types/                # Définitions TypeScript
```

## 2. Le Registre des Templates (`templates/registry.ts`)

Plutôt que d'avoir des `if/else` géants, nous utiliserons un registre dynamique.

```typescript
export const TEMPLATE_REGISTRY = {
  'modern-dark': {
    component: dynamic(() => import('./modern-dark')),
    thumbnail: '/previews/modern-dark.png',
    category: 'Creatif'
  },
  'classic-serif': {
    component: dynamic(() => import('./classic-serif')),
    thumbnail: '/previews/classic-serif.png',
    category: 'Professionnel'
  },
  // ... jusqu'à 20+
};
```

## 3. Modularité des Données (Atomic Data)

Les données ne seront plus "plates". Chaque section sera un objet capable d'être rendu par n'importe quel template.

- **Contrat Universel** : Chaque template doit accepter le même objet `CVData`.
- **Composants Slots** : Utilisation de "slots" pour que l'utilisateur puisse déplacer une section (ex: déplacer "Compétences" de la sidebar vers le corps principal).

## 4. Étapes du Refactoring

### Phase 1 : Extraction
1. Déplacer la logique actuelle de `CVPreview` dans `templates/v1-legacy`.
2. Créer le dossier `templates/shared` pour les composants réutilisables (ex: le rendu d'une expérience).

### Phase 2 : Standardisation
1. Normaliser l'objet `CVContext` pour suivre le modèle de sections dynamiques.
2. Créer une interface `TemplateProps` que tous les templates devront implémenter.

### Phase 3 : Factory & Isolation
1. Créer le premier "Nouveau Template" (v2-modern) pour valider l'architecture.
2. Implémenter le `TemplateSwitcher` dans l'éditeur.

## 5. Pourquoi cette architecture ?
- **Scalabilité** : On peut ajouter le template n°21 simplement en créant un nouveau dossier.
- **Maintenance** : Un bug visuel sur le template "Minimalist" se corrige dans son propre dossier, sans risque pour "Professional".
- **Performance** : Utilisation de `next/dynamic` pour ne charger que le code du template sélectionné par l'utilisateur.
