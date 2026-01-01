# 🎯 Roadmap SaaS : Landing Page & Refactorisation

Suite à l'analyse de ta maquette, voici l'ordre précis pour transformer l'app proprement sans rien casser.

## 1. Ordre de Bataille

### 📥 Étape 1 : Le Déménagement (Infrastructure)
On doit libérer la page d'accueil. Actuellement, l'éditeur est sur `/`.
- **Action** : Déplacer le contenu de `app/page.tsx` vers un nouveau dossier `app/(editor)/builder/page.tsx`.
- **But** : Libérer `app/page.tsx` pour la nouvelle Landing Page.

### 🎨 Étape 2 : La Landing Page (Visuel)
Implémentation de la maquette que tu m'as envoyée.
- **Header Premium** : Navigation avec liens (Bénéfices, Tarifs, FAQ) + boutons Auth.
- **Hero Section** : Titre accrocheur, sous-titre, et bouton CTA "Commencer".
- **Product Showcase** : Présentation visuelle de l'éditeur de CV (comme dans ta maquette avec les icônes flottantes).
- **Target** : Rendre l'app "SaaS-ready" visuellement dès l'arrivée.

### 🔐 Étape 3 : Le Dashboard & Auth
- **Auth (Clerk)** : Création des pages de login/register.
- **Dashboard** : Une page `/dashboard` où l'utilisateur voit ses CV créés et peut en créer un nouveau.
- **Base de données** : Connexion Prisma/Supabase pour que "Sauvegarder" fonctionne réellement.

### 🏗️ Étape 4 : Le Moteur Modulaire (Le Refactor)
Une fois que le flux SaaS est là, on découpe l'éditeur.
- Chaque template dans son dossier (`templates/modern/`, `templates/classic/`).
- Création du `TemplateRegistry` pour gérer 20+ modèles facilement.

---

## 2. Planning des Tâches (task.md mis à jour)

- [ ] **Phase 1** : Refactor des routes (Move editor to `/builder`)
- [ ] **Phase 2** : Codage de la Landing Page (Mockup fidelity)
- [ ] **Phase 3** : Intégration Auth & Dashboard
- [ ] **Phase 4** : Migration vers le système de templates modulaires

## 3. Pourquoi cet ordre ?
1. **Visibilité** : Tu vois la landing page (le plus dur visuellement) très vite.
2. **Modularité** : En isolant l'éditeur tout de suite, on peut travailler sur le SaaS sans casser la logique de création de CV actuelle.
3. **Évolution** : Le refactor technique (Step 4) est plus facile quand on a déjà une structure de routes propre.
