from .base import *

DEBUG = True

INSTALLED_APPS += [
    'drf_yasg',
]

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.postgresql",
        "NAME": os.environ.get('DB_NAME'),
        "USER": os.environ.get('DB_USER'),
        "PASSWORD": os.environ.get('DB_PASSWORD'),
        "HOST": os.environ.get('DB_HOST'),
        "PORT": os.environ.get('dB_PORT'),
    }
}

DEFAULT_RENDERER_CLASSES = DEFAULT_RENDERER_CLASSES + (
    'rest_framework.renderers.BrowsableAPIRenderer',
)

REST_FRAMEWORK = {
    'DEFAULT_PERMISSION_CLASSES': (
        'rest_framework.permissions.AllowAny',
    ),
    'DEFAULT_RENDERER_CLASSES': DEFAULT_RENDERER_CLASSES
}
