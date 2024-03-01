from .base import *

DEBUG = False

MIDDLEWARE += [
    "django.middleware.cache.UpdateCacheMiddleware",
    "django.middleware.cache.FetchFromCacheMiddleware",
]

DATABASES = {
    'default': dj_database_url.config(
        default='postgresql://postgres:postgres@localhost:5432/ToDo',
        conn_max_age=600
    )
}


CACHES = {
    "default": {
        "BACKEND": "django.core.cache.backends.redis.RedisCache",
        "LOCATION": "redis://redis-13974.c323.us-east-1-2.ec2.cloud.redislabs.com:13974",
        "OPTIONS": {
            "db": "0",
            "username": 'default',
            "password": "3pwxh2QGwIEuEpsxhjnKk3XAfhnlyHvy",
            "parser_class": "redis.connection.DefaultParser",
            "pool_class": "redis.BlockingConnectionPool",
        },
    }
}
