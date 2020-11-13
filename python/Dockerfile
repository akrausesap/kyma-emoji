# using python base image
FROM python:alpine

COPY ./requirements.txt /conuhacks5-python/requirements.txt

WORKDIR /conuhacks5-python

# install python dependencies
RUN pip install -r /conuhacks5-python/requirements.txt

COPY . /conuhacks5-python

WORKDIR /conuhacks5-python/app

# set required environment variables
ENV FLASK_ENV "development"
ENV FLASK_APP=index.py

ENTRYPOINT [ "python" ]

CMD [ "index.py" ]

EXPOSE 8080