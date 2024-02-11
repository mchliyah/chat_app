#!/bin/bash

# Install dependencies
pip install --upgrade pip && \
        apk add --no-cache postgresql-libs && \
        apk add --no-cache --virtual .build-deps gcc musl-dev postgresql-dev && \
        pip install --no-cache-dir psycopg2-binary && \
        apk --purge del .build-deps \
        && pip install -r requirements.txt
# pip install --upgrade pip
# pip install --no-cache-dir virtualenv
# pip install --no-cache-dir psycopg2-binary

# Set up virtual environment
python -m venv /venv
ENV PATH="/venv/bin:$PATH"
source /venv/bin/activate

# Install project dependencies
pip install -r requirements.txt

# Run the application
python manage.py runserver 8000
