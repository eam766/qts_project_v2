#!/bin/bash
set -e

# Génère la clé d'app si elle n'existe pas déjà (normalement définie via variable d'env sur Render)
php artisan config:clear

# Recrée la structure + réinjecte les seeders (donc ton compte démo)
php artisan migrate:fresh --seed --force

# Optimisations Laravel pour la prod
php artisan config:cache
php artisan route:cache
php artisan view:cache

# Démarre le serveur sur le port fourni par Render
php artisan serve --host=0.0.0.0 --port=${PORT:-10000}