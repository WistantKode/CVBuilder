# Contribuer à CV Builder

Merci de l'intérêt que vous portez à contribuer à CV Builder ! 🎉
Ce document fournit des lignes directrices pour contribuer au projet.

## Comment contribuer ?

### Signaler des bugs

Si vous trouvez un bug, veuillez ouvrir une issue en décrivant :

1. Les étapes pour reproduire le bug.
2. Le comportement attendu.
3. Le comportement réel.
4. Des captures d'écran si possible.

### Proposer des améliorations

Vous avez une idée de fonctionnalité ? Ouvrez une issue pour en discuter avant de commencer le développement. Cela permet de s'assurer que votre contribution est alignée avec la roadmap du projet.

### Soumettre une Pull Request (PR)

1. **Forkez** le projet et créez votre branche à partir de `develop`.

    ```bash
    git checkout -b feature/ma-nouvelle-fonctionnalite
    ```

2. **Installez les dépendances** en utilisant `pnpm` (version 9+ recommandée).

    ```bash
    pnpm install
    ```

3. **Faites vos modifications**. Assurez-vous que le code respecte le style existant.
4. **Vérifiez votre code** :

    ```bash
    pnpm lint
    pnpm build
    ```

5. **Commitez vos changements** en suivant la convention [Conventional Commits](https://www.conventionalcommits.org/).
    * `feat: ...` pour une nouvelle fonctionnalité
    * `fix: ...` pour une correction de bug
    * `docs: ...` pour de la documentation
    * `refactor: ...` pour du refactoring
    * Exemple : `feat(components): ajout d'un nouveau thème sombre`
6. **Poussez votre branche** et ouvrez une Pull Request vers la branche `develop`.

## Développement Local

```bash
# Lancer le serveur de développement
pnpm dev
```

L'application sera accessible sur [http://localhost:3000](http://localhost:3000).

## Règles de Codage

* Utilisez **TypeScript** pour tout nouveau code.
* Préférez les composants fonctionnels React.
* Utilisez **Tailwind CSS** pour le style.
* Respectez l'architecture du projet (Context API, Atomic Design dans `components/`).

Merci pour vos contributions !
