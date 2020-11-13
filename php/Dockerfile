# Stage 0: Download files with Composer.
FROM composer:1.9.1 as vendor

WORKDIR /src
COPY . /src/

RUN composer install

# Stage 1: Run application with Apache.
FROM php:7.4.1-apache

ENV APACHE_DOCUMENT_ROOT /var/www/html/public

COPY --from=vendor /src/ /var/www/html

RUN sed -ri -e 's!/var/www/html!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/sites-available/*.conf && \
  sed -ri -e 's!/var/www/!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/apache2.conf /etc/apache2/conf-available/*.conf && \
  mv "$PHP_INI_DIR/php.ini-production" "$PHP_INI_DIR/php.ini" && \
  a2enmod rewrite
