__author__ = 'risaacson'

from celery import Celery

app = Celery('hello', broker='amqp://guest@192.168.251.50//')

@app.task
def hello():
    return 'hello world'