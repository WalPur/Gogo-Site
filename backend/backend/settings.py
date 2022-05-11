from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent
# TODO: форматирование документа

SECRET_KEY = 'django-insecure-hb@@d5exb+x!^&8lf_=b95c+vri7fdccjq77*^s2r0u3(kw8)7'

DEBUG = True

ALLOWED_HOSTS = []  # TODO: можно выставить ALLOWED_HOSTS = ['*'] чтобы небыло конфликтов с сервером



INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'web.apps.WebConfig',  # TODO: Пакеты приложения лучше ставить в конце и отделять пустой строкой
    'api.apps.ApiConfig',
    'rest_framework',  # TODO: внешние пакеты лучше ставить после пакетов джанго и отделять пустой строкой
    'corsheaders',
]

REST_FRAMEWORK = {
    "DEFAULT_PERMISSION_CLASSES": [
        "rest_framework.permissions.AllowAny",
    ],
}

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
]

ROOT_URLCONF = 'backend.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [BASE_DIR / 'frontend/build'],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'backend.wsgi.application'



DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}



AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]



LANGUAGE_CODE = 'en-us'  # TODO: в данном случае лучше выставить ru-RU для языка

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True



STATIC_URL = 'static/'
STATIC_ROOT = BASE_DIR / 'static'
STATICFILES_DIRS = (
    (BASE_DIR / 'webpage-ui/build/static'),  # TODO этой папки нет в репозитории
)

CORS_ALLOWED_ORIGINS = [
    'http://localhost:3000',  # TODO: помимо localhost для локальной разработки нужно добавить 127.0.0.1
]

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'
