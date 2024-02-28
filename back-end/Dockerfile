FROM python:3.11-alpine

ENV PYTHONUNBUFFERED 1
ENV PYTHONDONTWRITEBYTECODE 1

WORKDIR /chat_app/back-end

RUN apk update && \
    apk add --no-cache postgresql-libs && \
    apk add --no-cache --virtual .build-deps gcc musl-dev postgresql-dev

RUN pip install --no-cache-dir virtualenv
RUN pip install --upgrade pip
RUN python -m venv /venv
ENV PATH="/venv/bin:$PATH"


COPY ./back-end/requirements.txt /chat_app/back-end/requirements.txt

RUN pip install --no-cache-dir -r requirements.txt && \
    pip install --no-cache-dir psycopg2-binary && \
    apk --purge del .build-deps

COPY ./back-end/ /chat_app/back-end/

CMD [ "python", "manage.py", "runserver", "0.0.0.0:8000" ]
