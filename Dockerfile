# --- Étape 1 : build des assets front-end (React/Vite) ---
FROM node:20-alpine AS node_build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# --- Étape 2 : image finale PHP ---
FROM php:8.2-cli

# Dépendances système + extensions PHP nécessaires
RUN apt-get update && apt-get install -y \
    git unzip libsqlite3-dev libzip-dev libpng-dev libonig-dev \
    && docker-php-ext-install pdo pdo_sqlite mbstring zip exif pcntl bcmath \
    && rm -rf /var/lib/apt/lists/*

# Installer Composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

WORKDIR /var/www/html

# Copier le code applicatif
COPY . .

# Copier les assets déjà buildés depuis l'étape 1
COPY --from=node_build /app/public/build ./public/build

# Installer les dépendances PHP (production, sans dev)
RUN composer install --no-dev --optimize-autoloader --no-interaction

# Créer le fichier SQLite s'il n'existe pas + permissions
RUN mkdir -p database && touch database/database.sqlite \
    && chmod -R 775 storage bootstrap/cache database

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

EXPOSE 10000
ENTRYPOINT ["/entrypoint.sh"]