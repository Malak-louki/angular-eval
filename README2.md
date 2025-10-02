## Symfony lab 

**Prérequis**

* Docker et Docker Compose installés sur la machine.

**Démarrer le projet**

```bash
bin/dev/start                 # build/pull si nécessaire + démarre les conteneurs
bin/dev/composer install      # installe les dépendances dans le conteneur PHP
```

Pour reconstruire les images après une modification importante (Dockerfile, dépendances…) :

```bash
bin/dev/start --build         # reconstruit les images et relance les services
```

Le site sera accessible sur : [http://localhost:8000/](http://localhost:8000/)

**Outils développeur**

```bash
bin/dev/composer --version    # vérifie la version de Composer dans le conteneur
bin/dev/phpcs-fix             # applique les règles de style PSR/Symfony (PHP CS Fixer)
bin/dev/phpstan analyse       # lance l’analyse statique (niveau configuré dans phpstan.neon, ex. --level=max)
bin/dev/phpunit               # exécute la suite de tests unitaires bin/dev/behat                 
# lance les scénarios BDD bin/dev/test-ci               # enchaîne linters + tests comme en CI
```

**Arrêter le projet**

```bash
bin/dev/stop                  # stoppe les conteneurs (les volumes/données sont conservés)
```

**Doctrine migrations**

```bash
bin/dev/console make:migration             # génère un fichier de migration dans migrations/
bin/dev/console doctrine:migrations:migrate # applique les migrations sur la base DATABASE_URL
```

> ⚠️ Pensez à adapter `DB_NAME` et `DATABASE_URL` dans `.env` ou `.env.local` si tu changes le nom de la base (ex: `symfony_lab`).

**Mapper la requête vers un DTO**

* Symfony ≥ 6.3 : utiliser `#[MapRequestPayload]` sur le paramètre du contrôleur (désérialisation + validation automatique)
* Symfony < 6.3 : utiliser `SerializerInterface` (et éventuellement `ValidatorInterface`)

**Documentation de l’API**
[http://localhost:8000/api/doc](http://localhost:8000/api/doc)

**Notes personnelles**

* Si un port (ex. 5432 ou 3306) est déjà utilisé, modifier le mapping dans `docker-compose.yml` pour éviter les conflits.
* Les règles de style appliquées par `phpcs-fix` suivent la convention Symfony, mais peuvent être adaptées selon les besoins du projet.
* Pour pousser l’analyse statique, on peut ajuster le niveau dans `phpstan.neon` (ex. `--level=max`).
