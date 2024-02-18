FROM python:3.11-alpine

RUN adduser -D myuser

# the contex is the root of the project

ENV PYTHONUNBUFFERED 1
ENV PYTHONDONTWRITEBYTECODE 1

WORKDIR /chat_app/back-end

RUN apk add --no-cache postgresql-libs

RUN pip install --no-cache-dir virtualenv

RUN python -m venv /venv
ENV PATH="/venv/bin:$PATH"

RUN chown -R myuser:myuser /venv

USER myuser

COPY ./back-end/requirements.txt /chat_app/back-end/requirements.txt
USER root
RUN pip install --upgrade pip && \
        apk add --no-cache postgresql-libs && \
        apk add --no-cache --virtual .build-deps gcc musl-dev postgresql-dev && \
        pip install --no-cache-dir psycopg2-binary && \
        apk --purge del .build-deps \
        && pip install -r requirements.txt

USER myuser

COPY ./back-end/ /chat_app/back-end/

# RUN python manage.py makemigrations
# RUN python manage.py migrate

CMD [ "python", "manage.py", "runserver", "0.0.0.0:8000" ]
