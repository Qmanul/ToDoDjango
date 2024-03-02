import json

import dj_database_url

from .base import *

DEBUG = False

MIDDLEWARE += [
    "django.middleware.cache.UpdateCacheMiddleware",
    "django.middleware.cache.FetchFromCacheMiddleware",
]

DATABASES = {
    "default": dj_database_url.config(
        conn_max_age=600,
        default=os.environ.get('DATABASE_URL')
    )
}

ALLOWED_HOSTS = json.loads(os.environ.get('ALLOWED_HOSTS'))

CACHES = {
    "default": {
        "BACKEND": "django.core.cache.backends.redis.RedisCache",
        "LOCATION": os.environ.get('CACHE_LOCATION'),
        "OPTIONS": {
            "db": os.environ.get('CACHE_DB'),
            "username": os.environ.get('CACHE_USERNAME'),
            "password": os.environ.get('CACHE_PASSWORD'),
            "parser_class": "redis.connection.DefaultParser",
            "pool_class": "redis.BlockingConnectionPool",
        },
    }
}

STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')

STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'

CSRF_COOKIE_SECURE = True

SESSION_COOKIE_SECURE = True
